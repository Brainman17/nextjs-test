import { GetStaticPaths, GetStaticProps } from "next";
import { API } from "../../assets/api/api";
import { CharacterType } from "assets/api/rick-and-morty-api";
import { CharacterCard } from "components/Card/CharacterCard/CharacterCard";
import { getBaseLayout } from "components/Layout/BaseLayout/BaseLayout";
import { PageWrapper } from "components/PageWrapper/PageWrapper";
import { useRouter } from "next/router";
import styled from "styled-components";

export const getStaticPaths: GetStaticPaths = async () => {
  const { results } = await API.rickAndMorty.getCharacters();

  const paths = results.map((character) => ({
    params: { id: String(character.id) },
  }));

  return {
    paths,
    fallback: true
    // если поставить blocking, то сначала сгенерируется новая картинка на сервере (которой нет в paths) и отдастся нам готовая
    // а если true как сейчас, то тоже самое, но с помощью router.isFallback мы можем показывать loading...
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { id } = ctx.params || {};


  const character = await API.rickAndMorty.getCharacter(id as string);

  if (!character) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      character,
    },
  };
};

type PropsType = {
  character: CharacterType;
};

const Character = (props: PropsType) => {
  const { character } = props;

  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;

  const characterId = router.query.id;

  const goToCharacters = () => router.push("/characters");

  return (
    <PageWrapper>
      <IdText>ID: {characterId}</IdText>
      <CharacterCard key={character.id} character={character} />
      <Button onClick={goToCharacters}>Go to Characters</Button>
    </PageWrapper>
  );
};

Character.getLayout = getBaseLayout;
export default Character;

const IdText = styled.div`
  font-size: 38px;
`;

const Button = styled.button`
  all: unset;
  padding: 10px;
  font-size: 12px;
  width: 100px;
  height: 100px;
  background: blue;
  cursor: pointer;
`;
