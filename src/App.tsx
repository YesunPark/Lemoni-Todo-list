import React from 'react';
import styled from 'styled-components';
import Title from 'components/title/Title';
import FullList from 'components/fullList/FullList';
import MakeToDo from 'components/makeToDo/MakeToDo';

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
