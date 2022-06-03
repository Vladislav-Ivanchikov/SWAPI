import React from 'react';
import styled from "styled-components";

export const About = styled.div`
  max-width: 800px;
  text-align: center;
  margin: 25px auto;

  p, a {
    color: white;
  }
`

const AboutPage: React.FC = () => {
    return (
        <About>
            <p>
                React - Необходимо создать приложение которое использует api <a href="https://swapi.dev/" target='_blank' rel="noreferrer">https://swapi.dev/</a> .
                Приложение должно уметь искать персонажей по имени и выводить списком. При нажатии на персонажа
                показывать информацию о нем отдельной страницей
                Хранить историю просмотренных персонажей в текущей сессии и выводить на главной
                Необходимо использовать хуки и контекст, typescript приветствуется
            </p>
        </About>
    );
};

export default AboutPage;