import React from 'react';
import styled from 'styled-components';
import { toDoArrState } from '../atom'; // atom으로 만든 전역상태
import { useRecoilState } from 'recoil'; // 훅 import
import EmptyList from './EmptyList';
import ListItem from 'components/ListItem';

function FullList() {
  const [listArr] = useRecoilState(toDoArrState);

  return (
    <FullListContainer>
      {!listArr.length && <EmptyList />}
      {listArr.map((list) => {
        return <ListItem content={list.content} key={list.idx} idx={list.idx} />;
      })}
    </FullListContainer>
  );
}

const FullListContainer = styled.div`
  height: 520px;
  overflow-y: auto;
`;

export default FullList;
