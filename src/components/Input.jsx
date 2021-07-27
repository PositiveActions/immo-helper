import React, { useState } from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 1px solid black;
    outline: 0;
    font-size: 1.3rem;
    color: black;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
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
        <div><InputStyled {...registerFn} placeholder={inputPlaceholder} type={inputType} onChange={handleChange} /></div>
    );
}
export default Input;