import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled, Loading } from './styled';

interface Props {
  width?: number;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: string;
  variant?: string;
  children?: any;
}

export const Button: React.FC<Props> = ({
  width,
  fullWidth,
  isLoading,
  isDisabled,
  size,
  variant, 
  children 
}) => {

  if(isLoading) {
    return(
      <ButtonStyled
        width={width}
        fullWidth={fullWidth}
        isLoading={isLoading}
        size={size}
        variant={variant}
      >
        <Loading variant={variant} />
      </ButtonStyled>
    );
  }
  
  return(
    <ButtonStyled
      width={width}
      fullWidth={fullWidth}
      size={size}
      variant={variant}
      isDisabled={isDisabled}
    >
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'normal',
    'medium',
    'large'
  ]),
  variant: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'success',
    'danger',
    'warning'
  ]),
  children: PropTypes.any
}

Button.defaultProps = {
  size: 'normal',
  variant: 'default'
};

Button.displayName = 'Button';
