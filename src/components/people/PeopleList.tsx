import React, {useContext} from 'react';
import {ICharacter} from "../../types/character";
import PeopleContext from "../../context/peopleContext";
import Card from "../card/Card";
import { People } from './People.style';

const PeopleList = () => {
    const {people} = useContext(PeopleContext)

    return (
        <People>
            {people.map((character: ICharacter) =>
                <Card key={character.name}
                      name={character.name}
                      birth_year={character.birth_year}
                      eye_color={character.eye_color}
                      gender={character.gender}
                      hair_color={character.hair_color}
                      height={character.height}
                      mass={character.mass}/>)}
        </People>
    );
};

export default PeopleList;