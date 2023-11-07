import { BaseHead } from "./BaseHead";
import { MicroCmsAboutDataType } from "@/libs/types";
import { SITE_DESCRIPTION, SITE_NAME } from "@/libs/constants";

export const PageAbout: React.FC<MicroCmsAboutDataType> = (data) => {
  const metaData = {
    title: `${SITE_NAME} | About`,
    description: SITE_DESCRIPTION,
  };

  return (
    <>
      <BaseHead {...metaData} />
      <div>
        <div>
          <p>ABOUT</p>
          <p>{data.name}</p>
          <p>{data.intro}</p>
        </div>
      </div>
    </>
  );
};
