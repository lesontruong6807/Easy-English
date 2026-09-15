import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password, fullName } = body;

    const cleanUsername = (username || "").trim().toLowerCase().replace(/[^a-z0-9_.-]/g, "");
    if (!cleanUsername || cleanUsername.length < 3) {
      return NextResponse.json(
        { error: "Tên đăng nhập cần ít nhất 3 ký tự (chữ cái, chữ số, dấu gạch dưới)." },
        { status: 400 }
      );
    }

    if (!password || password.length < 6) {
      return NextResponse.json(
        { error: "Mật khẩu cần ít nhất 6 ký tự." },
        { status: 400 }
      );
    }

    if (!fullName || !fullName.trim()) {
      return NextResponse.json(
        { error: "Vui lòng nhập họ và tên của bạn." },
        { status: 400 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: "Hệ thống chưa được cấu hình khóa Supabase Server." },
        { status: 500 }
      );
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey);
    const email = `${cleanUsername}@easyenglish.app`;

    // 1. Tạo tài khoản với vai trò học viên ('student')
    const { data: userData, error: createError } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      email_confirm: true,
      user_metadata: {
        username: cleanUsername,
        full_name: fullName.trim(),
        role: "student", // Luôn cố định là student khi đăng ký
      },
    });

    if (createError) {
      const msg = createError.message.toLowerCase();
      if (msg.includes("already registered") || msg.includes("already exists")) {
        return NextResponse.json(
          { error: "Tên đăng nhập này đã có người sử dụng. Vui lòng chọn tên khác." },
          { status: 400 }
        );
      }
      return NextResponse.json({ error: createError.message }, { status: 400 });
    }

    if (!userData.user) {
      return NextResponse.json(
        { error: "Không thể tạo tài khoản, vui lòng thử lại." },
        { status: 500 }
      );
    }

    // 2. Lưu thông tin vào bảng profiles
    const { error: profileError } = await supabaseAdmin.from("profiles").upsert({
      id: userData.user.id,
      full_name: fullName.trim(),
      role: "student",
    });

    if (profileError) {
      console.warn("Could not upsert profile row:", profileError);
    }

    return NextResponse.json({
      success: true,
      user: {
        id: userData.user.id,
        full_name: fullName.trim(),
        role: "student",
        username: cleanUsername,
      },
    });
  } catch (error: any) {
    console.error("Register API error:", error);
    return NextResponse.json(
      { error: error.message || "Đã xảy ra lỗi máy chủ trong quá trình đăng ký." },
      { status: 500 }
    );
  }
}
