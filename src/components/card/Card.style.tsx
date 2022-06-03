import styled from "styled-components";

export const CharCard = styled.li`
  display: flex;
  width: 250px;
  height: 200px;
  color: white;
  font-size: 18px;
  padding: 15px;
  cursor: pointer;
  margin: 10px 10px 0 10px;
  background: rgba(94, 94, 94, 0.4);
  border-radius: .5rem;
  transition: .2s;

  span {
    color: #8400ff;
  }

  &:hover {
    background: rgba(94, 94, 94, 0.8);
  }
`