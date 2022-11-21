import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import List from 'components/List';
import MakeToDo from 'components/MakeToDo';

function App() {
  return (
    <AppContainer>
      <Title />
      <List />
      <MakeToDo />
    </AppContainer>
  );
}

const AppContainer = styled.section`
  width: 370px;
  height: 650px;
  background-color: #ffffff;
`;

export default App;
