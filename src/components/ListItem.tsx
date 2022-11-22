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
  const [beingModify, setBeingModify] = useState(false);
  const [inputContent, setInputContent] = useState(content);

  function clickCheckBox() {
    if (!beingModify) {
      checked === 'checked' ? setChecked('no-checked') : setChecked('checked');
    }
  }

  function clickModify() {
    beingModify ? setBeingModify(false) : setBeingModify(true);
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  return (
    <ListContainer id={checked}>
      <BoxStyle className="list-item">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          <input
            type="text"
            id="content"
            className={`${checked} ${beingModify && 'modifying'}`}
            value={inputContent}
            onChange={handleInput}
            disabled={beingModify ? false : true}
            autoComplete="off"
            size={20}
          />
        </div>
        <div>
          <FontAwesomeIcon
            onClick={clickModify}
            icon={faPencil}
            className={`icon small ${checked}`}
          />
          <FontAwesomeIcon icon={faTrashCan} className="icon small" />
        </div>
      </BoxStyle>
    </ListContainer>
  );
}

const ListContainer = styled.div`
  .icon {
    color: ${(props) => props.id === 'checked' && '#91D086'};
    &.checked {
      display: none;
    }
  }
  .content {
    color: ${(props) => props.id === 'checked' && props.theme.color.grayTxt};
    text-decoration: ${(props) => props.id === 'checked' && 'line-through'};
  }
  .small {
    font-size: ${(props) => props.theme.size.iconRight};
    margin: 0px 20px 0px 0px;
  }
  input {
    color: ${(props) => props.theme.color.txt};
    font-size: 18px;
    &.checked {
    }
  }
`;

export default ListItem;
