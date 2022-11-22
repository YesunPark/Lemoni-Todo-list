import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import FullList from 'components/FullList';
import MakeToDo from 'components/MakeToDo';

function App() {
  return (
    <AppContainer>
      <Title />
      <FullList />
      <MakeToDo />
    </AppContainer>
  );
}

const AppContainer = styled.section`
  position: relative;
  width: 370px;
  height: 650px;
  background-color: #ffffff;
`;

export default App;
