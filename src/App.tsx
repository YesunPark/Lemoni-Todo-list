import React from 'react';
import styled from 'styled-components';
import Title from 'components/Title';
import List from 'components/List';

function App() {
  return (
    <AppContainer>
      <Title />
      <List />
    </AppContainer>
  );
}

const AppContainer = styled.section`
  width: 370px;
  height: 650px;
  background-color: #ffffff;
`;

export default App;
