"use client";

import CardSampleDisaster from "@/components/CardSampleDisaster";
import { Input } from "@/components/ui/input";
import { Campaigns, getCampaignsApi } from "@/utils/apis/campaigns";
import { CampaignDatas } from "@/utils/apis/campaigns/types";
import { Search } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Campaign = () => {
  const [campaigns, setCampaigns] = useState<CampaignDatas[]>([]);

  async function fetchGetCampaigns() {
    try {
      const response = await getCampaignsApi();
      setCampaigns(response);
    } catch (error) {
      console.log("Failed to fetch get campaigns");
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
        <div className="w-full grid grid-cols-3 gap-10 mt-[2rem] mx-auto">
          {/* mapping disini
          <CardSampleDisaster /> */}

          {campaigns.map((campaign, index) => (
            <Link href={`/campaign/${campaign.id}`}>
              <CardSampleDisaster
                key={index}
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
      </div>
    </div>
  );
};

export default Campaign;
