import React from 'react';

const Input = ({ labelText, name, minLenght, required, type }) => {
    type = type? type : 'text';

    if (required) {
        labelText+='*';
    }

    return <div className="form-field">
            <label className="form-label" htmlFor={name}>{labelText}</label>
            <input className="form-input" id={name} name={name} type={type} minLength={minLenght} required={Boolean(required)}/>
    </div>
}

export default Input;