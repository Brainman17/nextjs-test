import {
  ResponseType,
  LocationType,
} from "../../assets/api/rick-and-morty-api";
import { Card } from "../../components/Card/Card";
import { getBaseLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";
import { QueryClient, dehydrate, useQuery } from "@tanstack/react-query";

const getLocations = () => {
  return fetch("https://rickandmortyapi.com/api/location", {
    method: "GET",
  }).then((res) => res.json());
};

export const getStaticProps = async () => {
  const queryClient = new QueryClient();

  await queryClient.fetchQuery(["locations"], getLocations);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Locations = () => {
  const { data: locations } = useQuery<ResponseType<LocationType>>(
    ["locations"],
    getLocations
  );

  if (!locations) return null;

  const locationsList = locations.results.map((location) => (
    <Card key={location.id} name={location.name} />
  ));

  return <PageWrapper>{locationsList}</PageWrapper>;
};

Locations.getLayout = getBaseLayout;
export default Locations;
