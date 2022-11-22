import React, { useState } from 'react';
import ListItem from 'components/ListItem';

function FullList() {
  const [listArr, setListArr] = useState([1, 2, 3]);

  return (
    <>
      {listArr.map((list) => {
        return <ListItem key={list} />;
      })}
    </>
  );
}

export default FullList;
