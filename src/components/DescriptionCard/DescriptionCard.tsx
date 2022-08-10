import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getSessionArr } from "../../utils/getSessionArr";
import PeopleContext from "../../context/peopleContext";
import { ICharacter } from "../../types/character";
import { ILinkState } from "../../types/linkState";
import { CharDesc, PeopleDesc } from "./DescriptionCard.style";

const DescriptionCard: React.FC = () => {
  const { people } = useContext(PeopleContext);

  const { state } = useLocation();
  const _state = state as ILinkState;

  const charDesc = people.filter(
    (item: ICharacter) => item.name === _state.name
  );
  const charNameArr = charDesc.map((item: ICharacter) => item.name);
  const sessionArr = getSessionArr();

  if (!sessionArr.some((item: string) => item === charNameArr[0])) {
    sessionArr.push(...charNameArr);
  }

  useEffect(() => {
    return () => {
      sessionStorage.setItem("session", JSON.stringify(sessionArr));
    };
  }, [charDesc, sessionArr]);

  return (
    <PeopleDesc>
      {charDesc.map(
        ({
          name,
          birth_year,
          gender,
          height,
          mass,
          eye_color,
          hair_color,
          skin_color,
        }: ICharacter) => (
          <CharDesc key={name}>
            <p>
              Name: <span>{name}</span>
            </p>
            <p>
              Birth year: <span>{birth_year}</span>
            </p>
            <p>
              Gender: <span>{gender}</span>
            </p>
            <p>
              Height: <span>{height}</span>
            </p>
            <p>
              Mass: <span>{mass}</span>
            </p>
            <p>
              Eye color: <span>{eye_color}</span>
            </p>
            <p>
              Hair color: <span>{hair_color}</span>
            </p>
            <p>
              Skin color: <span>{skin_color}</span>
            </p>
          </CharDesc>
        )
      )}
    </PeopleDesc>
  );
};

export default DescriptionCard;
