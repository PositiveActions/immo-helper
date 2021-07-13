import React, { useState } from 'react';


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
            <input {...registerFn} placeholder={inputPlaceholder} type={inputType} onChange={handleChange} />
        </div>
    );
}

export default Input;