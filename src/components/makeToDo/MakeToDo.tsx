import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { toDoArrState } from '../../atom';
import { useRecoilState } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import EmptyInputModal from 'components/modals/EmptyInputModal';
import BoxStyle from '../styles/Box.Style';
import { theme } from '../../assets/styles/theme';

function MakeToDo() {
  const [listArr, setListArr] = useRecoilState(toDoArrState);
  const [inputToDo, setInputToDo] = useState('');
  const [showEmptyInputModal, setShowEmptyInputModal] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputToDo(e.target.value);
  }

  function clickSaveBtn() {
    if (listArr.length) {
      setListArr([...listArr, { idx: listArr[listArr.length - 1].idx + 1, content: inputToDo }]);
    } else if (!listArr.length) {
      setListArr([...listArr, { idx: 0, content: inputToDo }]);
    }
    setInputToDo('');
  }

  function handleEmptyInputModal() {
    setShowEmptyInputModal(true);
  }

  return (
    <MakeToDoContainer>
      <BoxStyle bgColor={theme.color.mainBg} className="make-to-do">
        <div>
          <FontAwesomeIcon icon={faLemon} className="icon" />
          <input
            ref={inputRef}
            placeholder="할 일을 입력해주세요"
            value={inputToDo}
            onChange={handleInput}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                inputToDo !== '' ? clickSaveBtn() : handleEmptyInputModal();
              }
            }}
            size={20}
            maxLength={12}
            spellCheck="false"
          />
        </div>
        <button
          onClick={() => {
            inputToDo !== '' ? clickSaveBtn() : handleEmptyInputModal();
            if (inputRef.current !== null) inputRef.current.focus();
          }}
        >
          저장
        </button>
      </BoxStyle>
      <EmptyInputModal show={showEmptyInputModal} onHide={() => setShowEmptyInputModal(false)} />
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
