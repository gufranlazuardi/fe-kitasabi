import { Response } from "@/utils/types/types";
import { LoginSchema } from "./types";
import axios from "axios";

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
