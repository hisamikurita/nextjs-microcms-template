import { LayoutDefault } from "@/components/LayoutDefault";
import type { NextPageWithLayout } from "@/pages/_app";
import { PageAbout } from "@/components/PageAbout";
import { getAbout } from "@/libs/microcms";

export const getStaticProps = async () => {
  const data = await getAbout();
  return { props: data };
};

const About: NextPageWithLayout = (data) => <PageAbout {...data} />;

About.getLayout = function getLayout(page: React.ReactElement) {
  return <LayoutDefault>{page}</LayoutDefault>;
};

export default About;
