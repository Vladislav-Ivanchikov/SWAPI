import React, { useEffect } from "react";
import { getSessionArr } from "../../utils/getSessionArr";
import NameCard from "../NameCard/NameCard";
import { PeopleList } from "../People/PeopleList.style";
import { Container, Title } from "./ViewedCharacters.style";

const ViewedCharacters: React.FC = () => {
  const sessionArr = getSessionArr();
  const isEmpty = sessionArr < 1;

  useEffect(() => {
    if (sessionArr === null) {
      sessionStorage.setItem("session", JSON.stringify([]));
    }
  }, [sessionArr]);

  return (
    <Container>
      <Title>The latest Star Wars characters you searched</Title>
      <PeopleList>
        {sessionArr !== null && !isEmpty ? (
          sessionArr.map((name: string) => (
            <NameCard key={name} name={name} main={true} />
          ))
        ) : (
          <Title>Session storage is empty</Title>
        )}
      </PeopleList>
    </Container>
  );
};

export default ViewedCharacters;
