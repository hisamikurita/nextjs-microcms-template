export type BaseHeadDataType = {
  title: string;
  description: string;
};

export type MicroCmsBlogDataType = {
  contents?: [];
  limit?: number;
  offset?: number;
  totalCount?: number;
  className?: string;
};

export type MicroCmsAboutDataType = {
  revisedAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  createdAt?: string;
  className?: string;
  name?: string;
  intro?: string;
};

export type CardType = {
  id: string;
  thumbnail: {
    url: string;
    height: number;
    width: number;
  };
  title: string;
  body: string;
};
