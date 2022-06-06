import React from 'react';
import People from "../../components/People/People";
import SearchForm from "../../components/SearchForm/SearchForm";
import {Container, Title} from '../../components/ViewedCharacters/ViewedCharacters.style';

const SearchPage: React.FC = () => {
    return (
        <Container>
            <Title>Enter character name</Title>
            <SearchForm/>
            <People/>
        </Container>
    );
};

export default SearchPage;