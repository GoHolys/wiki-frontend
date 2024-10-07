import axios from "axios";
import { User } from "../types/User";
import { Article } from "../types/Articles";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://wiki-frontend.onrender.com";

const api = axios.create({
  baseURL: API_BASE_URL,
});

interface UserSignUpResponse {
  token: string;
}

export async function signUp(user: User): Promise<UserSignUpResponse> {
  try {
    const response = await api.post<UserSignUpResponse>("/user", user);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Signup failed");
  }
}

export async function fetchArticleIntroduction(
  articleName: string,
  token?: string,
  language?: string
): Promise<Article> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Accept-Language": "",
  };

  if (token) {
    headers["x-authentication"] = token;
  }

  if (language) {
    headers["Accept-Language"] = language;
  }

  try {
    const response = await api.get<Article>(`/introduction/${articleName}`, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch article");
  }
}
