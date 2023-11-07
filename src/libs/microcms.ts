import { createClient } from "microcms-js-sdk";
import type { MicroCMSQueries } from "microcms-js-sdk";

export const defaultClient = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN as string,
  apiKey: process.env.API_KEY as string,
});

export const previewClient = createClient({
  serviceDomain: process.env.NEXT_PUBLIC_SERVICE_DOMAIN as string,
  apiKey: process.env.NEXT_PUBLIC_API_KEY as string,
});

export const getBlog = async (queries?: MicroCMSQueries, preview = false) => {
  const client = preview ? previewClient : defaultClient;

  const blogData = await client.get<Response>({
    endpoint: "blog",
    queries,
  });
  return blogData;
};

export const getAbout = async (queries?: MicroCMSQueries, preview = false) => {
  const client = preview ? previewClient : defaultClient;

  const aboutData = await client.get<Response>({
    endpoint: "about",
    queries,
  });
  return aboutData;
};

export const getDraftKey = (requestUrl: string) => {
  const url = new URL(requestUrl);
  const params = new URLSearchParams(url.search);
  const draftKey = params.get("draftKey") || undefined;
  return draftKey;
};

export const getContentId = (requestUrl: string) => {
  const url = new URL(requestUrl);
  const params = new URLSearchParams(url.search);
  const contentId = params.get("contentId") || undefined;
  return contentId;
};
