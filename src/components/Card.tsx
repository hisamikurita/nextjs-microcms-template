import Link from "next/link";
import { URL_HOME } from "@/libs/constants";
import { CardType } from "@/libs/types";

export const Card = (article : CardType) => {
  const { id, thumbnail, title, body } = article;

  return (
    <article>
      <Link href={`${URL_HOME}${id}`}>
        <img src={`${thumbnail.url}?fm=webp&q=80`} alt="" width={thumbnail.width} height={thumbnail.height} decoding="async" />
        <h1>{title}</h1>
        <div dangerouslySetInnerHTML={{ __html: body }}></div>
      </Link>
    </article>
  );
};
