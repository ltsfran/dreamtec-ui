import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './styled';

interface Props {
  children?: any
}

export const Button: React.FC<Props> = ({children}) => (
  <ButtonStyled>{children}</ButtonStyled>
);

Button.propTypes = {
  children: PropTypes.any
}

Button.displayName = 'Button';
