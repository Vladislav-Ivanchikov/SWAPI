import React, {SyntheticEvent, useCallback, useContext, useState} from 'react';
import {getPeople} from "../../utils/getPeople";
import PeopleContext from "../../context/peopleContext";
import {Form} from './SearchForm.style';

const SearchForm = () => {
    const [query, setQuery] = useState<string>('')
    const {setPeople} = useContext(PeopleContext)

    const handleSearch = useCallback((e: SyntheticEvent) => {
        e.preventDefault();
        if (query !== '') getPeople(setPeople, query)
        setQuery('')
    }, [query, setPeople]);

    return (
        <Form>
            <input type="text"
                   value={query} onChange={(e) => setQuery(e.target.value)}
                   placeholder='e. g. Chewbacca'
            />
            <button onClick={(e) => handleSearch(e)}>Search</button>
        </Form>
    );
};

export default SearchForm;