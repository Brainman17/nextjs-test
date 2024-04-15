import { API } from "../../assets/api/api";
import {
  ResponseType,
  CharacterType,
} from "../../assets/api/rick-and-morty-api";
import { CharacterCard } from "../../components/Card/CharacterCard/CharacterCard";
import { getBaseLayout } from "../../components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "../../components/PageWrapper/PageWrapper";

export const getStaticProps = async () => {
  const characters = await API.rickAndMorty.getCharacters();

  return {
    props: {
      characters,
    },
    revalidate: 60, // секунды
  };
}; // функция вызывается еще раз через 60 секунд только тогда, когда мы запросили страницу заново

type PropsType = {
  characters: ResponseType<CharacterType>;
};

const Characters = (props: PropsType) => {
  const { characters } = props;

  const charactersList = characters.results.map((character) => (
    <CharacterCard key={character.id} character={character} />
  ));

  return <PageWrapper>{charactersList}</PageWrapper>;
};

Characters.getLayout = getBaseLayout;
export default Characters;
