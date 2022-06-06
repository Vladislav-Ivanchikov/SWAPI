import styled from "styled-components";
import {Link} from "react-router-dom";

export const CharCard = styled.li`
  display: flex;
  width: 300px;
  cursor: pointer;
  margin-bottom: 10px;
  background: rgba(94, 94, 94, 0.4);
  border-radius: .5rem;
  transition: .2s;
  text-decoration: none;;


  &:hover {
    background: rgba(94, 94, 94, 0.8);
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const CharLink = styled(Link)`
  width: 100%;
  padding: 15px;
  text-decoration: none;
  text-align: center;
  color: white;
  font-size: 18px;
`