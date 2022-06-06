import styled from "styled-components";

export const PeopleList = styled.ul`
  width: 100%;
  max-width: 420px;
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
  height: 60vh;
  border-radius: 0.5rem;
  margin: 20px auto;
  list-style: none;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 18px;
    background-color: rgba(94, 94, 94, 0.3);
    border-radius: .5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #5e5e5e;
    border-radius: .5rem;
  }
`