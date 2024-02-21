import supabase from ".";
import { User } from "../models/user.model";

export interface LoginData {
  login: string;
  password: string;
}

export interface Login {
  user_metadata: {
    avatar_url: string;
  };
  email: string;
  id: string;
  role: string;
}

export const login = async ({
  login,
  password,
}: LoginData): Promise<User | null> => {
  const {
    error,
    data: { user },
  } = await supabase.auth.signInWithPassword({
    email: login,
    password,
  });

  if (error || !user || !user?.id || !user?.email || !user?.role) {
    return null;
  }

  const { id, role, email, user_metadata } = user;

  window.localStorage.setItem("userId", id);

  return {
    id,
    role,
    email,
    avatarUrl: user_metadata?.avatar_url || "",
  };
};

export const logout = async () => {
  await supabase.auth.signOut();
};
