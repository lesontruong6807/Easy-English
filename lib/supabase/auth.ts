import { createClient } from "./client";
import { Profile } from "@/lib/types";

/**
 * Chuyển đổi tên đăng nhập thành định dạng email nội bộ cho Supabase Auth
 */
export function usernameToEmail(username: string): string {
  const clean = username.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, "");
  return `${clean}@easyenglish.app`;
}

export async function getSessionUser(): Promise<Profile | null> {
  const supabase = createClient();
  if (!supabase) return null;

  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;

    const username = user.user_metadata?.username || user.email?.split("@")[0] || "";

    // Lấy profile từ bảng profiles
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (profile) {
      return {
        ...(profile as Profile),
        username: username,
      };
    }

    // Fallback: tạo profile nếu chưa có
    const fallbackProfile: Profile = {
      id: user.id,
      full_name: user.user_metadata?.full_name || username || "Học viên",
      role: (user.user_metadata?.role as any) || "student",
      username: username,
    };

    // Gọi server để lưu profile vào database
    fetch("/api/auth/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(fallbackProfile),
    }).catch(console.warn);

    return fallbackProfile;
  } catch (err) {
    console.warn("Failed to get session user:", err);
    return null;
  }
}

/**
 * Đăng nhập bằng Tên đăng nhập và Mật khẩu
 */
export async function loginWithUsername(
  username: string,
  password: string
): Promise<{ user?: Profile; error?: string }> {
  const supabase = createClient();
  if (!supabase) return { error: "Chưa cấu hình Supabase Client." };

  const cleanUsername = username.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, "");
  if (!cleanUsername) {
    return { error: "Vui lòng nhập tên đăng nhập." };
  }

  const email = usernameToEmail(cleanUsername);

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("invalid login credentials") || msg.includes("invalid credentials")) {
      return { error: "Tên đăng nhập hoặc mật khẩu không chính xác." };
    }
    return { error: error.message };
  }

  if (!data.user) {
    return { error: "Không tìm thấy thông tin tài khoản." };
  }

  const profile = await getSessionUser();
  return { user: profile || undefined };
}

/**
 * Đăng ký tài khoản học viên mới bằng Tên đăng nhập
 */
export async function registerWithUsername(
  username: string,
  password: string,
  fullName: string
): Promise<{ user?: Profile; error?: string }> {
  const supabase = createClient();
  if (!supabase) return { error: "Chưa cấu hình Supabase Client." };

  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
        fullName,
      }),
    });

    const data = await res.json();
    if (!res.ok || data.error) {
      return { error: data.error || "Đăng ký không thành công." };
    }

    // Đăng nhập tự động sau khi đăng ký thành công
    const email = usernameToEmail(username);
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      return { error: "Đăng ký thành công nhưng không thể tự động đăng nhập. Vui lòng thử đăng nhập lại." };
    }

    const profile = await getSessionUser();
    return { user: profile || data.user };
  } catch (err: any) {
    return { error: err.message || "Lỗi kết nối máy chủ." };
  }
}

// Giữ lại tương thích
export const loginWithEmail = loginWithUsername;
export const registerWithEmail = (email: string, pass: string, name: string) =>
  registerWithUsername(email.split("@")[0], pass, name);

export async function logoutUser(): Promise<void> {
  const supabase = createClient();
  if (supabase) {
    await supabase.auth.signOut();
  }
  if (typeof window !== "undefined") {
    localStorage.removeItem("easy_english_current_user");
    window.location.href = "/login";
  }
}
