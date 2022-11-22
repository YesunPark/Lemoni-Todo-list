import React from 'react';
import styled from 'styled-components';

type Box = {
  bgColor?: string;
  className: string;
  children: React.ReactNode;
};

function BoxStyle({ bgColor, className, children }: Box) {
  return (
    <TitleContainer color={bgColor} className={className}>
      {children}
    </TitleContainer>
  );
}

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: ${(props) => props.className === 'make-to-do' && 'absolute'};
  bottom: ${(props) => props.className === 'make-to-do' && '0px'};
  width: inherit;
  height: ${(props) => props.theme.size.listHeight};
  background-color: ${(props) => props.color};
  border-bottom: ${(props) =>
    props.className === 'list-item' && `1px solid ${props.theme.color.main}`};
  color: ${(props) => props.theme.color.txt};
  font-size: ${(props) => props.className === 'title' && '30px'};
  .icon {
    margin: 0 9px 0 18.8px;
    color: ${(props) => props.theme.color.main};
    font-size: ${(props) => props.theme.size.iconLeft};
  }
  div {
    align-items: center;
    display: flex;
  }
`;

export default BoxStyle;
