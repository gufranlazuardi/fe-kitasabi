import { Response } from "@/utils/types/types";
import { LoginResponse, LoginSchema, RegisterSchema } from "./types";
import axios from "axios";
import axiosWithConfig from "@/utils/axiosWithConfig";

export const loginAccount = async (
  body: LoginSchema
): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/sessions",
      body
    );
    return response.data as LoginResponse;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.meta?.message || "Failed to login."
    );
  }
};

export const registerAccount = async (body: RegisterSchema) => {
  try {
    const response = await axiosWithConfig.post(`/register`, body);

    return response.data as Response;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};
