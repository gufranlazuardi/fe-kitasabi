import axiosWithConfig from "@/utils/axiosWithConfig";
import {
  CampaignDatas,
  CampaignDetailDatas,
  Campaigns,
} from "./types";

export async function getCampaignsApi(): Promise<CampaignDatas[]> {
  try {
    const response = await axiosWithConfig.get("/campaigns");
    return response.data.data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch campaigns");
  }
}

export async function getCampaignDetailApi(
  id: string | number
): Promise<CampaignDetailDatas> {
  try {
    const response = await axiosWithConfig.get(`/campaigns/${id}`);
    return response.data.data;
  } catch (error: any) {
    throw new Error(
      error.message || "Failed to fetch campaign detail"
    );
  }
}
