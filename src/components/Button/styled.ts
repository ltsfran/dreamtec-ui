import styled from 'styled-components';

export const ButtonStyled = styled.button`
  border: none;
  background-color: #FFFFFF;
  color: #5B656E;
  padding: 5px 20px;
  border: 1px solid #D8DDE1;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  font-weight: bold;
  font-size: 16px;

  &:hover {
    background-color: #D8DDE1;
  }
`;

ButtonStyled.displayName = 'ButtonStyled';