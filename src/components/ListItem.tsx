import React, { useState } from 'react';
import BoxStyle from './Box.Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

function ListItem() {
  const [checked, setChecked] = useState(false);
  function clickCheckBox() {
    setChecked(!checked);
  }

  return (
    <ListContainer id={checked.toString()}>
      <BoxStyle className="list">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          <div className="content">설거지하기</div>
        </div>
      </BoxStyle>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  .icon {
    color: ${(props) => (props.id === 'false' ? props.theme.color.main : 'green')};
  }
  .content {
    color: ${(props) => (props.id === 'false' ? props.theme.color.txt : props.theme.color.grayTxt)};
  }
`;

export default ListItem;
