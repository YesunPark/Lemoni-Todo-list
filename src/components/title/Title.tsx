import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../styles/Box.Style';
import { theme } from '../../assets/styles/theme';
import styled from 'styled-components';

function Title() {
  const today = new Date(+new Date() + 3240 * 10000).toISOString().split('T')[0];
  const [pickedDate, setPickedDate] = useState(today);
  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickedDate(e.target.value);
  };

  return (
    <BoxStyle bgColor={theme.color.mainBg} className="title">
      <div>
        <FontAwesomeIcon icon={faLemon} className="icon" />
        <div>Lemoni To Do</div>
      </div>
      <DateInput type="date" value={pickedDate} onChange={handleDate} />
    </BoxStyle>
  );
}

const DateInput = styled.input`
  max-width: 110px;
  margin-right: 10px;
  font-size: 15px;
  ::-webkit-calendar-picker-indicator {
    &:hover {
      cursor: pointer;
    }
  }
`;

export default Title;
