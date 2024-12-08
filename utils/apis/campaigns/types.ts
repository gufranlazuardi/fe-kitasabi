export type Campaigns = {
  meta: Meta;
  data: CampaignDatas[];
};

export type Meta = {
  message: string;
  code: number;
  status: string;
};

export type CampaignDatas = {
  id: number | string;
  user_id: number | string;
  name: string;
  short_description: string;
  long_description: string;
  image_url: string;
  goal_amount: number;
  current_amount: number;
  slug: string;
};

export type CampaignDetail = {
  meta: Meta;
  data: CampaignDetailDatas;
};

export type CampaignDetailDatas = {
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
  user: {
    name: string;
    ImageURL?: string;
  };
  images: {
    image_url: string;
    is_primary: boolean;
  }[];
};

// {
//   "meta": {
//       "message": "Campaign detail",
//       "code": 200,
//       "status": "success"
//   },
//   "data": {
//       "id": 1,
//       "name": "test derado",
//       "short_description": "mantap",
//       "long_description": "bantu sih tapi kok mahal yaa",
//       "image_url": "images/1-erd-tiny-donate.png",
//       "goal_amount": 100000000,
//       "current_amount": 0,
//       "donor_count": 0,
//       "user_id": 1,
//       "Slug": "test-derado-1",
//       "perks": [
//           "ahhhhhhhhhhhhhhhh"
//       ],
//       "user": {
//           "name": "derado",
//           "ImageURL": ""
//       },
//       "images": [
//           {
//               "image_url": "images/1-erd-tiny-donate.png",
//               "is_primary": false
//           }
//       ]
//   }
// }
