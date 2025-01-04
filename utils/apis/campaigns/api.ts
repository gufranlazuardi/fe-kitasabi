import { CampaignDatas, CampaignDetailDatas } from "./types";
import Cookies from "js-cookie";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function fetchWithAuth(
  endpoint: string,
  options: RequestInit = {}
) {
  const token = Cookies.get("token");
  const headers = new Headers(options.headers || {});
  headers.set("Content-Type", "application/json");
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    if (response.status === 401) {
      throw new Error("Unauthorized: Please log in again.");
    }
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.meta?.message ||
        `HTTP error! status: ${response.status}`
    );
  }

  return response.json();
}

async function fetchWithoutAuth(
  endpoint: string,
  options: RequestInit = {}
) {
  const headers = new Headers(options.headers || {});
  headers.set("Content-Type", "application/json");

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.meta?.message ||
        `HTTP error! status: ${response.status}`
    );
  }

  return response.json();
}

export async function getCampaignsApi(): Promise<CampaignDatas[]> {
  try {
    const data = await fetchWithoutAuth("/campaigns");
    return data.data;
  } catch (error: any) {
    console.error("Error fetching campaigns:", error);
    throw new Error(error.message || "Failed to fetch campaigns");
  }
}

export async function getCampaignDetailApi(
  id: string | number
): Promise<CampaignDetailDatas> {
  try {
    const data = await fetchWithAuth(`/campaigns/${id}`);
    return data.data;
  } catch (error: any) {
    console.error("Error fetching campaign detail:", error);
    throw new Error(
      error.message || "Failed to fetch campaign detail"
    );
  }
}
