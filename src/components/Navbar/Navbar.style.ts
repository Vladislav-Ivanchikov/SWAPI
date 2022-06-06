import styled from "styled-components";
import {Link} from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 10vh;
  background: rgba(94, 94, 94, 0.4);
  transition: background .3s;

  &:hover {
    background: rgba(94, 94, 94, 0.7);
  }
`

export const Nav = styled.nav`
  display: flex;
  width: 420px;
  justify-content: space-between;
`

export const CustomLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
`