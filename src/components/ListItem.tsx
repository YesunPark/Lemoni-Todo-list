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
  const [inputContent, setInputContent] = useState('코딩');

  function clickCheckBox() {
    checked === 'checked' ? setChecked('no-checked') : setChecked('checked');
  }
  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  return (
    <ListContainer id={checked}>
      <BoxStyle className="list-item">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          {/* <div className="content">{content}</div> */}
          <input
            type="text"
            id="content"
            className={checked}
            value={inputContent}
            onChange={handleInput}
          ></input>
        </div>
        <div>
          <FontAwesomeIcon icon={faPencil} className={`icon small ${checked}`} />
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
    font-size: 18px;
    &::placeholder {
      color: ${(props) => props.theme.color.txt};
    }
    &.checked {
    }
  }
`;

export default ListItem;
