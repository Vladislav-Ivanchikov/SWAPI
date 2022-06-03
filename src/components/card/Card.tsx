import React from 'react';
import {ICharacter} from "../../types/character";
import {CharCard} from "./Card.style";

const Card: React.FC<ICharacter> = ({gender, height, hair_color, eye_color, mass, name, birth_year}) => {
    return (
        <CharCard>
            <div>
                <p>Name: <span>{name}</span></p>
                <p>Birth year: <span>{birth_year}</span></p>
                <p>Gender: <span>{gender}</span></p>
                <p>Height: <span>{height}</span></p>
                <p>Mass: <span>{mass}</span></p>
                <p>Eye color: <span>{eye_color}</span></p>
                <p>Hair color: <span>{hair_color}s</span></p>
            </div>
        </CharCard>
    );
};

export default Card;