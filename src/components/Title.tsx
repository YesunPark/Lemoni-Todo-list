import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from './Box.Style';
import { theme } from '../assets/styles/theme';

function Title() {
  return (
    <BoxStyle bgColor={theme.color.mainBg} className="title" content="Todays To Do">
      <FontAwesomeIcon icon={faLemon} className="icon" />
      <div>Todays To Do</div>
    </BoxStyle>
  );
}

export default Title;
