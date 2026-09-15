import { createClient } from "./client";
import { Profile } from "@/lib/types";

export async function getSessionUser(): Promise<Profile | null> {
  const supabase = createClient();
  if (!supabase) return null;

  try {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error || !user) return null;

    // Fetch profile from profiles table
    const { data: profile } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", user.id)
      .maybeSingle();

    if (profile) {
      return profile as Profile;
    }

    // Fallback: create profile if missing
    const fallbackProfile: Profile = {
      id: user.id,
      full_name: user.user_metadata?.full_name || user.email?.split("@")[0] || "Học viên",
      role: (user.user_metadata?.role as any) || "student",
    };

    // Call server to ensure profile is saved in DB
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

export async function loginWithEmail(email: string, password: string): Promise<{ user?: Profile; error?: string }> {
  const supabase = createClient();
  if (!supabase) return { error: "Chưa cấu hình Supabase Client." };

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return { error: error.message };
  }

  if (!data.user) {
    return { error: "Không tìm thấy thông tin tài khoản." };
  }

  const profile = await getSessionUser();
  return { user: profile || undefined };
}

export async function registerWithEmail(
  email: string,
  password: string,
  fullName: string,
  role: "student" | "admin" = "student"
): Promise<{ user?: Profile; error?: string }> {
  const supabase = createClient();
  if (!supabase) return { error: "Chưa cấu hình Supabase Client." };

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name: fullName,
        role: role,
      },
    },
  });

  if (error) {
    return { error: error.message };
  }

  if (!data.user) {
    return { error: "Đăng ký không thành công." };
  }

  // Create profile via API route
  try {
    await fetch("/api/auth/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: data.user.id,
        full_name: fullName,
        role: role,
      }),
    });
  } catch (e) {
    console.warn("Profile creation call failed:", e);
  }

  const profile = await getSessionUser();
  return { user: profile || undefined };
}

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
