import React, { useState } from 'react';
import BoxStyle from './Box.Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import styled from 'styled-components';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';

type ListItem = {
  content: string;
  key: number;
};

function ListItem({ content }: ListItem) {
  const [checked, setChecked] = useState('no-checked');
  function clickCheckBox() {
    checked === 'checked' ? setChecked('no-checked') : setChecked('checked');
  }

  return (
    <ListContainer id={checked}>
      <BoxStyle className="list-item">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          <div className="content">{content}</div>
        </div>
        <div>
          <FontAwesomeIcon icon={faPencil} className={`icon small ${checked}`} />
          <FontAwesomeIcon icon={faTrashCan} className="icon small delete" />
        </div>
      </BoxStyle>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  .icon {
    color: ${(props) => props.id === 'checked' && '#91D086'};
  }
  .content {
    color: ${(props) => props.id === 'checked' && props.theme.color.grayTxt};
  }
  .small {
    font-size: ${(props) => props.theme.size.iconRight};
    margin: 0px;
  }
  .checked {
    display: none;
  }
  .delete {
    margin: 0px 20px 0px 20px;
  }
`;

export default ListItem;
