import React, { useState } from 'react';
import ListItem from 'components/ListItem';

function FullList() {
  const [listArr, setListArr] = useState([1, 2, 3]);

  return (
    <>
      {listArr.map((list) => {
        return <ListItem content={'코딩하기'} key={list} />;
      })}
    </>
  );
}

export default FullList;
