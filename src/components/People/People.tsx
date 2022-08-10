import React from "react";
import NameCard from "../NameCard/NameCard";
import { PeopleList } from "./PeopleList.style";

const People: React.FC<{ name: string[] }> = ({ name }) => {
  return (
    <PeopleList>
      {name.map((item: string) => (
        <NameCard key={item} name={item} main={false} />
      ))}
    </PeopleList>
  );
};

export default People;
