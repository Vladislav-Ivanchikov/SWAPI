import React from 'react';
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h2`
  color: white;
  margin: 25px auto;
`

const MainPage: React.FC = () => {

    return (
        <Container>
            <Title>The latest Star Wars characters you searched</Title>
        </Container>
    );
};

export default MainPage;