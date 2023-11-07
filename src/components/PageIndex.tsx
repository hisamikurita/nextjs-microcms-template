import Image from "next/image";
import { Card } from "@/components/Card";
import { MicroCmsBlogDataType } from "@/libs/types";
import { BaseHead } from "./BaseHead";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";

export const PageIndex: React.FC<MicroCmsBlogDataType> = (data) => {
  const metaData = {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
  };
  const articles = data.contents || [];

  return (
    <>
      <BaseHead {...metaData} />
      <div>
        <div>
          <Image src="/images/thumbnail-mv.jpg" alt="" width={2688} height={1536} />
        </div>
        <div>
          <p>BLOG</p>
          <ul>
            {articles.map((article: any) => (
              <li key={article.id}>
                <Card {...article} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
