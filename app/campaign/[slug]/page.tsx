"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { getCampaignDetailApi } from "@/utils/apis/campaigns";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface CampaignDetailPageParams {
  slug: string;
}

interface CampaignDetailData {
  id: number | string;
  name: string;
  short_description: string;
  long_description: string;
  image_url: string;
  goal_amount: number;
  current_amount: number;
  donor_count: number;
  user_id: number;
  slug: string;
  perks: string[];
  images: {
    image_url: string;
    is_primary: boolean;
  }[];
}

interface CampaignDetailPageProps {
  params: CampaignDetailPageParams;
}

const CampaignDetailPage: React.FC<CampaignDetailPageProps> = ({
  params,
}) => {
  const { slug } = params;

  const [detailCampaign, setDetailCampaign] =
    useState<CampaignDetailData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCampaignDetail = async (slug: string) => {
    try {
      setIsLoading(true);
      const response = await getCampaignDetailApi(slug);
      setDetailCampaign(response);
    } catch (error) {
      console.error("Error fetching campaign details:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaignDetail(slug);
  }, [slug]);

  if (isLoading) {
    return <p className="text-center">Loading...</p>;
  }

  if (!detailCampaign) {
    return (
      <p className="text-center">No campaign details available.</p>
    );
  }

  // Utility function for formatting currency to IDR
  const formatToIDR = (value: number): string => {
    return `Rp ${value.toLocaleString("id-ID")}`;
  };

  // Calculate progress percentage with guard for division by zero
  const progressPercentage =
    detailCampaign.goal_amount > 0
      ? (detailCampaign.current_amount / detailCampaign.goal_amount) *
        100
      : 0;

  return (
    <div className="flex flex-col w-full max-w-screen-lg mx-auto gap-2">
      <div className="flex gap-8">
        {/* Image */}
        <Image
          src={detailCampaign?.image_url || "/image1.jpg"}
          alt={detailCampaign?.name || "Campaign image"}
          width={500}
          height={300}
          className="rounded-lg"
        />

        {/* Main Content */}
        <div className="ml-4">
          <h1 className="text-2xl font-bold">
            {detailCampaign.name}
          </h1>
          <p className="text-gray-600">
            {detailCampaign.short_description}
          </p>
          <p className="mt-4">{detailCampaign.long_description}</p>

          <div className="flex flex-col mt-4 gap-2">
            <h2 className="font-bold text-sky-500 text-xl">
              {formatToIDR(detailCampaign.current_amount)}
            </h2>
            <h3 className="font-semibold text-base">
              Goal: {formatToIDR(detailCampaign.goal_amount)}
            </h3>
          </div>

          {/* Progress Bar */}
          <Progress value={progressPercentage} />
          <Link href={`/transactions/${detailCampaign.id}`}>
            <Button className="mt-[2rem] w-full bg-sky-500 hover:bg-sky-700">
              Donate
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CampaignDetailPage;
