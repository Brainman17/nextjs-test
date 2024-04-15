import { GetServerSideProps } from "next/types";
import { API } from "../../assets/api/api";
import { ResponseType, EpisodeType } from "../../assets/api/rick-and-morty-api";
import { Card } from "../../components/Card/Card";
import { getBaseLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=100"
  );

  const episodes = await API.rickAndMorty.getEpisodes();

  if (!episodes) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      episodes,
    },
  };
};

type PropsType = {
  episodes: ResponseType<EpisodeType>;
};

const Episodes = (props: PropsType) => {
  const { episodes } = props;

  const episodesList = episodes.results.map((episode) => (
    <Card key={episode.id} name={episode.name} />
  ));

  return <PageWrapper>{episodesList}</PageWrapper>;
};

Episodes.getLayout = getBaseLayout;
export default Episodes;
