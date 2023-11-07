import { LayoutDefault } from "@/components/LayoutDefault";
import { PageIndex } from "@/components/PageIndex";
import { getDraftKey, getBlog } from "@/libs/microcms";
import { useEffect, useState } from "react";

const Index = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      // 下書き用のパラメーターがある場合は取得して、APIリクエストを行う
      const requestUrl = window.location.href;
      const draftKey = getDraftKey(requestUrl);
      const data = await getBlog({ draftKey }, true);
      setData(data);
    })();
  }, []);

  return <PageIndex {...data} />;
};

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Index;
