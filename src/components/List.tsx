import React from 'react';
import BoxStyle from './Box.Style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';

function List() {
  return (
    <BoxStyle className="list" content="설거지하기">
      <FontAwesomeIcon icon={faSquareCheck} className="icon" />
      <div>설거지하기</div>
    </BoxStyle>
  );
}

export default List;