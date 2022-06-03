import React, {useContext, useEffect} from 'react';
import styled from "styled-components";
import PeopleContext from "../../context/peopleContext";
import {Title} from "../main/MainPage";
import PeopleList from "../../components/people/PeopleList";
import SearchForm from "../../components/form/SearchForm";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const SearchPage: React.FC = () => {
    const {people, setPeople} = useContext(PeopleContext)

    useEffect(() => {
        return () => {
            setPeople([])
        }
    }, [setPeople])

    return (
        <Wrapper>
            <Title>Enter character name</Title>
            <SearchForm/>
            {people.length > 0 ? <PeopleList/> : <Title>Character not found. Try again!</Title>}
        </Wrapper>
    );
};

export default SearchPage;