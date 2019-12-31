import styled, { css, keyframes  } from 'styled-components';

interface Props {
  width?: number;
  fullWidth?: boolean;
  isLoading?: boolean;
  isDisabled?: boolean;
  size?: string;
  variant?: string;
}

const COLORS = {
  default: {
    background: '#FFFFFF',
    border: '#D8DDE1',
    hover: '#D8DDE1',
    text: '#5B656E'
  },
  primary: {
    background: '#007BFF',
    border: '#007BFF',
    hover: '#0060C7',
    text: '#FFFFFF',
  },
  secondary: {
    background: '#5B656E',
    border: '#5B656E',
    hover: '#495158',
    text: '#FFFFFF'
  },
  success: {
    background: '#28A745',
    border: '#28A745',
    hover: '#1F7D35',
    text: '#FFFFFF'
  },
  danger: {
    background: '#DC3545',
    border: '#DC3545',
    hover: '#B92C39',
    text: '#FFFFFF'
  },
  warning: {
    background: '#F2A227',
    border: '#F2A227',
    hover: '#D08B21',
    text: '#000000'
  }
};

const SIZES = {
  small: '0.75rem',
  normal: '1rem',
  medium: '1.25rem',
  large: '1.5rem'
}

export const ButtonGroups = styled.div`
  button {
    margin: 5px;
  }
`;

export const ButtonStyled = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0 25px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  min-height: 2.5em;
  width: ${(props: Props) => props.fullWidth && '100%'};
  width: ${(props: Props) => props.width && `${props.width}px`};
  font-size: ${(props: Props) => props.size
    && SIZES[props.size]};

  ${(props: Props) => props.variant && css`
    background-color: ${COLORS[props.variant].background};
    border: 1px solid ${COLORS[props.variant].border};
    color: ${COLORS[props.variant].text};

    &:hover {
      background-color: ${COLORS[props.variant].hover};
      transition: linear .4s;
    }
  `}

  ${(props: Props) => props.isLoading && css`
    pointer-events: none;
    user-select: none;
  `}

  ${(props: Props) => props.isDisabled && css`
    opacity: 0.5;
    pointer-events: none;
    user-select: none;
  `}
`;

const animationLoading = keyframes`
  to {transform: rotate(360deg);}
`;

export const Loading = styled.div`
  display: inline-block;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid black;
  border-top: 2px solid white;
  animation: ${animationLoading} .6s linear infinite;

  ${(props: Props) => props.variant && css`
    border: 2px solid ${COLORS[props.variant].text};
    border-top: 2px solid ${COLORS[props.variant].background};
  `}
`;

ButtonGroups.displayName = 'ButtonGroups';
ButtonStyled.displayName = 'ButtonStyled';
Loading.displayName = 'Loading';