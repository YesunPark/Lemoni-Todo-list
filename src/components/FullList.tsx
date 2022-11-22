import React from 'react';
import { toDoArrState } from '../atom'; // atom으로 만든 전역상태
import { useRecoilState } from 'recoil'; // 훅 import
import EmptyList from './EmptyList';
import ListItem from 'components/ListItem';

function FullList() {
  const [listArr] = useRecoilState(toDoArrState);

  return (
    <>
      {!listArr.length && <EmptyList />}
      {listArr.map((list) => {
        return <ListItem content={list.content} key={list.idx} idx={list.idx} />;
      })}
    </>
  );
}

export default FullList;
