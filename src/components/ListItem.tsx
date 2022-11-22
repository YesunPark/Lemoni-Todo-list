import React, { useEffect, useRef, useState } from 'react';
import { toDoArrState } from '../atom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from './Box.Style';

type ListItem = {
  content: string;
  idx: number;
};

function ListItem({ content, idx }: ListItem) {
  const [listArr, setListArr] = useRecoilState(toDoArrState);
  const [checked, setChecked] = useState('no-checked');
  const [beingModify, setBeingModify] = useState(false);
  const [inputContent, setInputContent] = useState(content);
  const inputRef = useRef<HTMLInputElement>(null);

  function clickCheckBox() {
    if (!beingModify) {
      checked === 'checked' ? setChecked('no-checked') : setChecked('checked');
    }
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputContent(e.target.value);
  }

  function clickModify() {
    beingModify ? setBeingModify(false) : setBeingModify(true);
  }

  function clickDelete() {
    setListArr(listArr.filter((list) => list.idx !== idx));
  }

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, [beingModify]);

  return (
    <ListContainer id={checked}>
      <BoxStyle className="list-item">
        <div className="checkbox" onClick={clickCheckBox}>
          <FontAwesomeIcon icon={faSquareCheck} className="icon" />
          <input
            ref={inputRef}
            type="text"
            className={`content ${checked} ${beingModify && 'modifying'}`}
            value={inputContent}
            onChange={handleInput}
            onKeyDown={(e) => e.key === 'Enter' && setBeingModify(false)}
            disabled={beingModify ? false : true}
            autoComplete="off"
            size={20}
            maxLength={12}
          />
        </div>
        <div>
          <FontAwesomeIcon
            onClick={clickModify}
            icon={faPencil}
            className={`icon small ${checked}`}
          />
          <FontAwesomeIcon onClick={clickDelete} icon={faTrashCan} className="icon small" />
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
    &:hover {
      cursor: pointer;
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
  }
`;

export default ListItem;
