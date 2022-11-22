import React from 'react';
import styled from 'styled-components';
import BoxStyle from './Box.Style';

function EmptyList() {
  return (
    <EmptyListContainer>
      <BoxStyle>
        <div className="empty">할 일을 만들어보세요!</div>
      </BoxStyle>
    </EmptyListContainer>
  );
}

const EmptyListContainer = styled.div`
  .empty {
    margin: auto;
  }
`;

export default EmptyList;
