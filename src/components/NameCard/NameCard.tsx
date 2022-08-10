import React from "react";
import { useLocation } from "react-router-dom";
import { INameCard } from "../../types/nameCard";
import { CharCard, CharLink } from "./NameCard.style";

const NameCard: React.FC<INameCard> = ({ name, main }) => {
  const url = useLocation();
  const pathName = name.split(" ").join("");

  return (
    <CharCard>
      <CharLink
        to={main ? `search/${pathName}` : `${url.pathname}/${pathName}`}
        state={{ name }}
      >
        <p>{name}</p>
      </CharLink>
    </CharCard>
  );
};

export default NameCard;
