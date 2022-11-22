import { atom } from 'recoil';

export const toDoArrState = atom<{ idx: number; content: string }[]>({
  key: 'toDoArrState',
  default: [],
});
