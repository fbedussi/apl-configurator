import React from 'react';

const QuotationButton = ({show, text, clickHandler}) => {
    if (!show) {
        return null;
    }

    return <div className="quotation">
        <button 
            className={'quotation-btn ctaBtn'}
            onClick={clickHandler}
        >
            {text}
        </button>
    </div>
}

export default QuotationButton;