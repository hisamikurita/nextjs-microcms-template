import { LayoutDefault } from "@/components/LayoutDefault";
import { PageAbout } from "@/components/PageAbout";
import { getDraftKey, getAbout } from "@/libs/microcms";
import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      // 下書き用のパラメーターがある場合は取得して、APIリクエストを行う
      const requestUrl = window.location.href;
      const draftKey = getDraftKey(requestUrl);
      const data = await getAbout({ draftKey }, true);
      setData(data);
    })();
  }, []);

  return <PageAbout {...data} />;
};

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default About;
