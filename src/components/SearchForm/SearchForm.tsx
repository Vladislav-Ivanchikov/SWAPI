import React, { SyntheticEvent, useContext } from "react";
import { getPeople } from "../../utils/getPeople";
import PeopleContext from "../../context/peopleContext";
import { Form } from "./SearchForm.style";
import { IQuery } from "../../types/query";

const SearchForm: React.FC<IQuery> = ({ query, setQuery }) => {
  const { setPeople } = useContext(PeopleContext);

  const handleSearch = (e: SyntheticEvent) => {
    e.preventDefault();
    if (query !== "") getPeople(setPeople, query);
    setQuery("");
  };

  return (
    <Form>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="e. g. Chewbacca"
      />
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </Form>
  );
};

export default SearchForm;
