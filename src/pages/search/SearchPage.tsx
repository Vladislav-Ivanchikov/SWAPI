import React, { useContext, useState } from "react";
import People from "../../components/People/People";
import SearchForm from "../../components/SearchForm/SearchForm";
import {
  Container,
  Title,
} from "../../components/ViewedCharacters/ViewedCharacters.style";
import PeopleContext from "../../context/peopleContext";
import { ICharacter } from "../../types/character";

const SearchPage: React.FC = () => {
  const { people } = useContext(PeopleContext);
  const [query, setQuery] = useState("");
  const charName = people.map((item: ICharacter) => item.name);

  return (
    <Container>
      <Title>Enter character name</Title>
      <SearchForm query={query} setQuery={setQuery} />
      <People name={charName} />
    </Container>
  );
};

export default SearchPage;
