import { Response } from "@/utils/types/types";
import { LoginSchema, RegisterSchema } from "./types";
import axios from "axios";
import axiosWithConfig from "@/utils/axiosWithConfig";
import { User } from "../users/types";

export const loginAccount = async (body: LoginSchema) => {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/v1/sessions",
      body
    );
    return response.data as Response<{ token: string }>;
  } catch (error: any) {
    throw Error(error.response.data.message);
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get(`/sessions`);

    return response.data as Response<User>;
  } catch (error: any) {
    throw Error(error.response.data.message);
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