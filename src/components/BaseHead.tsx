import Head from "next/head";
import { URL_FAVICON, URL_APPLE_TOUCH_ICON, URL_DEFAULT_OGP } from "@/libs/constants";
import { BaseHeadDataType } from "@/libs/types";

export const BaseHead: React.FC<BaseHeadDataType> = (data) => {
  const { title, description } = data;
  const currentUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  return (
    <Head>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <link rel="icon" href={URL_FAVICON} />
      <link rel="apple-touch-icon" href={URL_APPLE_TOUCH_ICON} />

      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* OGP / Facebook */}
      <meta property="og:site_name" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${currentUrl}${URL_DEFAULT_OGP}`} />

      {/* Twitter  */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${currentUrl}${URL_DEFAULT_OGP}`} />
    </Head>
  );
};
