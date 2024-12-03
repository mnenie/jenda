import type { AxiosResponse } from "axios";
import { api } from "@/shared/api";

export async function login(
  email: string,
  password: string,
): Promise<AxiosResponse> {
  return await api.post("/auth/login", { email, password });
}

export async function registration(
  email: string,
  password: string,
): Promise<AxiosResponse> {
  return await api.post("/auth/registration", { email, password });
}
