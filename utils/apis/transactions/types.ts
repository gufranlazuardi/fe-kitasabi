export type CreateTransactionResponse = {
  meta: Meta;
  data: TransactionDatas;
};

export type Meta = {
  message: string;
  code: number;
  status: string;
};

export type TransactionDatas = {
  id: number | string;
  campaign_id: number | string;
  user_id: number | string;
  amount: number;
  status: string;
  code: string;
  payment_url: string;
};

export type CreateTransactionRequest = {
  campaign_id: number | string;
  amount: number;
};
