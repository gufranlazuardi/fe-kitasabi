import axiosWithConfig from "@/utils/axiosWithConfig";
import {
  CreateTransactionRequest,
  CreateTransactionResponse,
} from "./types";

export async function createTransactionApi(
  req: CreateTransactionRequest
): Promise<CreateTransactionResponse> {
  try {
    const response =
      await axiosWithConfig.post<CreateTransactionResponse>(
        "/transactions",
        req
      );
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 401) {
      throw new Error("Unauthorized: Please log in again.");
    }
    throw new Error(
      error?.response?.data?.meta?.message ||
        "Failed to create transaction"
    );
  }
}
