import {
  LoginResponse,
  LoginSchema,
  RegisterResponse,
  RegisterSchema,
} from "./types";
import axiosWithConfig from "@/utils/axiosWithConfig";

export const loginAccount = async (
  body: LoginSchema
): Promise<LoginResponse> => {
  try {
    const response = await axiosWithConfig.post(`/sessions`, body);
    return response.data as LoginResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.meta?.message || "Failed to login."
    );
  }
};

export const registerAccount = async (
  body: RegisterSchema
): Promise<RegisterResponse> => {
  try {
    const response = await axiosWithConfig.post(`/users`, body);
    return response.data as RegisterResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.meta?.message || "Failed to register."
    );
  }
};
