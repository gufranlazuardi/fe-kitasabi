"use client";

import CreateTransaction from "@/components/form/CreateTransaction";
import { useParams } from "next/navigation";
import React from "react";

interface TransactionDetailProps {
  campaign_id: string | number;
}

const TransactionsDetail: React.FC<TransactionDetailProps> = ({
  campaign_id,
}) => {
  const { slug } = useParams();
  console.log("apaaaa iniiiiii", campaign_id);
  console.log("apaaaa iniiiiii", slug);

  const campaignId = Array.isArray(slug)
    ? parseInt(slug[0])
    : parseInt(slug);

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <h1 className="text-center">Detail Transactions</h1>
      <p>{slug}</p>

      <div className="flex flex-col items-center justify-center space-y-2 mt-[1rem]">
        <CreateTransaction campaign_id={campaignId} />
      </div>
    </div>
  );
};

export default TransactionsDetail;
