import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';

function Title() {
  return (
    <TitleContainer>
      <FontAwesomeIcon icon={faLemon} className="lemon-icon" />
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  height: 65px;
  background-color: ${(props) => props.theme.color.mainBg};
  .lemon-icon {
    color: ${(props) => props.theme.color.main};
  }
`;

export default Title;
