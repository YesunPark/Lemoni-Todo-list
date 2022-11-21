import React from 'react';
import styled from 'styled-components';

type Box = {
  bgColor?: string;
  className?: string;
  content: string;
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
  align-items: center;
  height: ${(props) => props.theme.size.listHeight};
  background-color: ${(props) => props.color};
  border-bottom: ${(props) => props.className === 'list' && `1px solid ${props.theme.color.main}`};
  font-size: ${(props) => props.className === 'title' && '30px'};
  .icon {
    margin: 0 9px 0 18.8px;
    color: ${(props) => props.theme.color.main};
    font-size: ${(props) => props.theme.size.iconLeft};
  }
`;

export default BoxStyle;
