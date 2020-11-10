import React, { MouseEvent, useState } from 'react';
import PropTypes from 'prop-types';
import { InputStyled } from './styled';

interface Props {
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Input: React.FC<Props> = ({
  placeholder,
  onChange,
  value
}) => {
  const [ val, setVal ] = useState(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = e.target.value;
    onChange && onChange(e);
    setVal(inputValue);
  };

  return(
    <div>
      <InputStyled
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
        value={val} />
    </div>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

Input.displayName = 'Input';
