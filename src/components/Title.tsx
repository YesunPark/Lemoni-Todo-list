import React from 'react';
import styled from 'styled-components';

function Title() {
  return <TitleContainer></TitleContainer>;
}

const TitleContainer = styled.div`
  height: 65px;
  background-color: ${(props) => props.theme.color.mainBg};
`;

export default Title;
