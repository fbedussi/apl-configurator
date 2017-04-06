const Input = ({ labelText, name, minLenght, required, type }) => {
    var t = type ? type : 'text';

    if (required) {
        labelText += '*';
    }

    return <div className="form-field">
            <label className="form-label" htmlFor={name}>{labelText}</label>
            <input className="form-input" id={name} name={name} type={t} minLength={minLenght} required={Boolean(required)}/>
    </div>;
};

export default Input;
