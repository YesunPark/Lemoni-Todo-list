import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from './Box.Style';
import { theme } from '../assets/styles/theme';

function MakeToDo() {
  const [inputToDo, setInputToDo] = useState('');

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputToDo(e.target.value);
  }

  function clickSaveBtn() {
    return;
  }

  return (
    <MakeToDoContainer>
      <BoxStyle bgColor={theme.color.mainBg} className="make-to-do" content="Todays To Do">
        <div>
          <FontAwesomeIcon icon={faLemon} className="icon" />
          <input placeholder="할일을 입력해주세요" value={inputToDo} onChange={handleInput} />
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
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default MakeToDo;
