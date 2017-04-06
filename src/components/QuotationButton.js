const QuotationButton = ({ show, text, clickHandler }) => {
    if (!show) {
        return null;
    }

    return <button 
            className={'quotation-btn ctaBtn ctaBtn--inverse'}
            onClick={clickHandler}
        >
            {text}
        </button>;
};

export default QuotationButton;
