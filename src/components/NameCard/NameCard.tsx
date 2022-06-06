import React from 'react';
import {useLocation} from "react-router-dom";
import {ICard} from "../../types/nameCard";
import {CharCard, CharLink} from "./NameCard.style";

const NameCard: React.FC<ICard> = ({name}) => {
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

export default NameCard;