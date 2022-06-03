import React from 'react';
import {ICharacter} from "../../types/character";
import {CharCard, CharLink} from "./Card.style";
import {useLocation} from "react-router-dom";

const Card: React.FC<ICharacter> = ({name}) => {
    const url = useLocation()
    const pathName = name.split(' ').join('')

    return (
        <CharCard>
            <CharLink to={`${url.pathname}/${pathName}`} state={{name}}>
                <p>{name}</p>
            </CharLink>
        </CharCard>
    );
};

export default Card;