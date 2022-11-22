import React, { useState } from 'react';
import BoxStyle from './Box.Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';

type ListItem = {
  content: string;
  key: number;
};

function ListItem({ content }: ListItem) {
  const [checked, setChecked] = useState(false);
  function clickCheckBox() {
    setChecked(!checked);
  }

  return (
    <ListContainer id={checked.toString()}>
      <BoxStyle className="list">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          <div className="content">{content}</div>
        </div>
      </BoxStyle>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  .icon {
    color: ${(props) => props.id === 'true' && '#91D086'};
  }
  .content {
    color: ${(props) => props.id === 'true' && props.theme.color.grayTxt};
  }
`;

export default ListItem;
