import { LayoutDefault } from "@/components/LayoutDefault";
import type { NextPageWithLayout } from "@/pages/_app";
import { PageIndex } from "@/components/PageIndex";
import { getBlog } from "@/libs/microcms";

export const getStaticProps = async () => {
  const data = await getBlog();
  return { props: data };
};

const Index: NextPageWithLayout = (data) => <PageIndex {...data} />;

Index.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default Index;
