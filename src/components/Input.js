import React from 'react';

const Input = ({ labelText, name, minLenght, required, type }) => {
    var t = type || 'text';
    var labelTxt = required ? labelText + '*' : labelText;

    return <div className="form-field">
            <label className="form-label" htmlFor={name}>{labelTxt}</label>
            <input className="form-input" id={name} name={name} type={t} minLength={minLenght} required={Boolean(required)}/>
    </div>;
};

export default Input;
