import React, {useContext} from 'react';
import {ICharacter} from "../../types/character";
import PeopleContext from "../../context/peopleContext";
import NameCard from "../NameCard/NameCard";
import {PeopleList} from "./PeopleList.style";

const People = () => {
    const {people} = useContext(PeopleContext)
    const charName = people.map((item: ICharacter) => item.name)

    return (
        <PeopleList>
            {charName.map((item: string) => <NameCard key={item} name={item}/>)}
        </PeopleList>
    );
};

export default People;