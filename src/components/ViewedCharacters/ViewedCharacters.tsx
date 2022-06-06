import React, {useEffect} from 'react';
import {getSessionArr} from "../../utils/getSessionArr";
import {PeopleList} from '../People/PeopleList.style';
import {Container, Title, ViewedItem} from './ViewedCharacters.style';
import {CharCard} from "../NameCard/NameCard.style";

const ViewedCharacters: React.FC = () => {
    const sessionArr = getSessionArr()
    const isEmpty = sessionArr < 1

    useEffect(() => {
        if (sessionArr === null) {
            sessionStorage.setItem('session', JSON.stringify([]))
        }
    }, [sessionArr])

    return (
        <Container>
            <Title>The latest Star Wars characters you searched</Title>
            <PeopleList>
                {sessionArr !== null && !isEmpty ? sessionArr.map((name: string) =>
                    <CharCard key={name}>
                        <ViewedItem>
                            <p><span>{name}</span></p>
                        </ViewedItem>
                    </CharCard>) : <Title>Session storage is empty</Title>}
            </PeopleList>
        </Container>
    );
};

export default ViewedCharacters;