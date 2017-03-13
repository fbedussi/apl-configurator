import React from 'react';

import Form from './Form';

const Quotation = ({show, clickHandler, showForm}) => {
    if (!show) {
        return null;
    }

    return <div className="quotation">
        <button 
            className={`quotation-btn ctaBtn ${showForm? 'hide' : 'show'}`}
            onClick={clickHandler}
        >
            scopri quanto costa
        </button>
        <Form
            showForm={showForm} 
        />
    </div>
}

export default Quotation;