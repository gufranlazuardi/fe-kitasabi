"use client";

import CardSampleDisaster from "@/components/CardSampleDisaster";
import { Input } from "@/components/ui/input";
import { getCampaignsApi } from "@/utils/apis/campaigns";
import { CampaignDatas } from "@/utils/apis/campaigns/types";
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState<CampaignDatas[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { toast } = useToast();

  async function fetchGetCampaigns() {
    try {
      setIsLoading(true);
      setError(null);
      const response = await getCampaignsApi();
      setCampaigns(response);
    } catch (error: any) {
      console.error("Failed to fetch campaigns:", error);
      if (error.message === "Network Error") {
        setError(
          "Unable to connect to the server. Please check your internet connection and try again."
        );
      } else if (error.response && error.response.status === 401) {
        toast({
          title: "Authentication Error",
          description:
            "Your session has expired. Please log in again.",
          variant: "destructive",
        });
        router.push("/login");
      } else {
        setError(
          "An unexpected error occurred. Please try again later."
        );
      }
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGetCampaigns();
  }, []);

  return (
    <div className="w-full flex flex-col max-w-screen-lg mx-auto">
      <div className="relative">
        <Input
          className="pl-[3rem]"
          placeholder="Search campaign..."
        />
        <Search
          className="absolute top-0 left-0 mt-2 ml-4"
          size={18}
        />
        {isLoading ? (
          <div className="text-center mt-8">Loading campaigns...</div>
        ) : error ? (
          <div className="text-center mt-8 text-red-500">{error}</div>
        ) : (
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-[2rem] mx-auto">
            {campaigns.map((campaign) => (
              <Link
                href={`/campaign/${campaign.id}`}
                key={campaign.id}
              >
                <CardSampleDisaster
                  name={campaign.name}
                  user_id={campaign.user_id}
                  short_description={campaign.short_description}
                  image_url={campaign.image_url}
                  goal_amount={campaign.goal_amount}
                  current_amount={campaign.current_amount}
                  slug={campaign.slug}
                  long_description={
                    campaign.long_description || "long description"
                  }
                />
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Campaign;
