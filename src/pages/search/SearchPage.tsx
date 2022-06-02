import React, {SyntheticEvent, useContext, useEffect, useState} from 'react';
import styled from "styled-components";
import SearchContext from "../../context/searchContext";
import {Title} from "../main/MainPage";
import {ICharacter} from "../../types/character";
import {getPeople} from "../../utils/getPeople";

export const Wrapper = styled.div`
 display: flex;
  flex-direction: column;
`

export const Form = styled.form`
  display: flex;
  width: 420px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  position: relative;

  input {
    width: 420px;
    font-size: 18px;
    padding: 5px 70px 5px 5px;
    border: 1px solid #cecece;
    background: #F6F6f6;
    border-radius: 0.5rem;
    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #1e54e8;
    }
    
    &::placeholder {
      opacity: .5;
    }
  }
  
  button {
    position: absolute;
    right: 0;
    padding: 0 10px;
    border: none;
    height: 33px;
    background-color: white;
    border-radius: 0.5rem;
    transition: background-color .2s, color .2s ;
    
    &:hover {
      background-color: gray;
      color: white;
    }
  }
`

export const PeopleList = styled.ul`
  display: flex;
  width: 100%;
  max-width: 1024px;
  height: 70vh;
  border: 2px solid rebeccapurple;
  border-radius: 0.5rem;
  margin: 20px auto;

  li {
    color: white;
    font-size: 16px;
  }
`

const SearchPage: React.FC = () => {
    const {query, setQuery} = useContext(SearchContext)
    const [people, setPeople] = useState([])

    const handleSearch = (e: SyntheticEvent) => {
        e.preventDefault();
    }

    useEffect(() => {
        if (query !== '') getPeople(setPeople, query)
    }, [query])

    console.log(people)

    return (
        <Wrapper>
            <Title>Enter character name</Title>
            <Form>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='e. g. Chewbacca'/>
                <button onClick={(e) => handleSearch(e)}>Search</button>
            </Form>
            <PeopleList>
                {people.map((character: ICharacter) => <li key={character.name}>
                    {character.name}
                </li>)}
            </PeopleList>
        </Wrapper>

    );
};

export default SearchPage;