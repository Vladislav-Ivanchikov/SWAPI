import styled from "styled-components";
import {CharCard} from "../NameCard/NameCard.style";
import {PeopleList} from "../People/PeopleList.style";

export const CharDesc = styled(CharCard)`
  width: 420px;
  padding: 18px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 24px;

  p {
    color: white;
    margin-bottom: 10px;
  }

  span {
    color: #6b8cee;
  }
`

export const PeopleDesc = styled(PeopleList)`
  padding: 15px;
  align-content: center;

  &::-webkit-scrollbar {
    width: 18px;
    background-color: rgba(94, 94, 94, 0.3);
    border-radius: .5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6b6b6b;
    border-radius: .5rem;
  }
`