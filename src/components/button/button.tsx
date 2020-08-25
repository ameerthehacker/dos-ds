import React from 'react';
import styled from 'styled-components';

type ButtonSizes = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  bg?: 'green' | 'white' | 'red';
  size?: ButtonSizes;
  label?: string;
  children?: string;
  showArrows?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const getPadding = (size: ButtonSizes) => {
  switch (size) {
    case 'sm': {
      return '2px 20px';
    }
    case 'md': {
      return '4px 40px';
    }
    case 'lg': {
      return '8px 60px';
    }
  }
};

const ButtonStyle = styled.button<ButtonProps>`
  border: 0;
  padding: ${({ size = 'md' }) => getPadding(size)};
  background: ${({ bg }) => bg};
  box-shadow: 10px 10px #000;
  color: ${({ bg = 'white' }) => (bg === 'white' ? 'black' : 'white')};
  &:focus {
    outline: none;
  }
  &:hover {
    background: yellow;
    color: black;
  }
  &:active {
    margin-top: 10px;
    margin-left: 10px;
    box-shadow: none;
  }
`;

export const Button = ({
  label = '',
  children = '',
  showArrows,
  ...rest
}: ButtonProps) => (
  <ButtonStyle {...rest}>{`${showArrows ? '< ' : ''}${label || children}${
    showArrows ? ' >' : ''
  }`}</ButtonStyle>
);
