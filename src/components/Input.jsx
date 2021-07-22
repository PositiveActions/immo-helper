import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    display: block;
    box-sizing: border-box;
    width:100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    font-size: 14px;
  `

function Input({ type = "text", placeholder = "", name = "", registerFn, errors = {}, ...props }) {
    const [inputType] = useState(type);
    const [inputPlaceholder] = useState(placeholder);
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        setInputValue(event.target.value);
        if (props.onChange) props.onChange(inputValue);
    }

    return (
        <div>
            <InputStyled {...registerFn} placeholder={inputPlaceholder} type={inputType} onChange={handleChange} />
        </div>
    );
}
export default Input;