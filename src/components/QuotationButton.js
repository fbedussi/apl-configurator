import React from 'react';

const QuotationButton = ({show, clickHandler}) => {
    if (!show) {
        return null;
    }

    return <div className="quotation">
        <button 
            className={'quotation-btn ctaBtn'}
            onClick={clickHandler}
        >
            scopri quanto costa
        </button>
    </div>
}

export default QuotationButton;