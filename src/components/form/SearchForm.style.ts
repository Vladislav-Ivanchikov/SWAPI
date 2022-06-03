import styled from "styled-components";

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
    transition: background-color .2s, color .2s;
    cursor: pointer;
    font-size: 14px;

    &:hover {
      background-color: gray;
      color: white;
    }
  }
`