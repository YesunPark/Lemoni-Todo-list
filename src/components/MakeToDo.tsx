import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import { toDoArrState } from '../atom'; // atom으로 만든 전역상태
import { useRecoilState } from 'recoil'; // 훅 import
import BoxStyle from './Box.Style';
import { theme } from '../assets/styles/theme';

function MakeToDo() {
  const [listArr, setListArr] = useRecoilState(toDoArrState);
  const [inputToDo, setInputToDo] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputToDo(e.target.value);
  }

  function clickSaveBtn() {
    setListArr([...listArr, { idx: listArr.length, content: inputToDo }]);
    setInputToDo('');
  }

  return (
    <MakeToDoContainer>
      <BoxStyle bgColor={theme.color.mainBg} className="make-to-do">
        <div>
          <FontAwesomeIcon icon={faLemon} className="icon" />
          <input
            placeholder="할일을 입력해주세요"
            value={inputToDo}
            onChange={handleInput}
            size={20}
            maxLength={12}
          />
        </div>
        <button onClick={clickSaveBtn}>저장</button>
      </BoxStyle>
    </MakeToDoContainer>
  );
}

const MakeToDoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  input,
  button {
    font-size: 18px;
  }
  button {
    padding: 0px;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default MakeToDo;
