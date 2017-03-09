import React from 'react';

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
        <form 
            className={`quotation-form ${showForm? 'show' : 'hide' }`}
        >
            <label className="quotation-field">
                Nome
                <input type="text"/>
            </label>
            <label className="quotation-field">
                e-main
                <input type="email"/>
            </label>
            <label className="quotation-field">
                Telefono
                <input type="tel"/>
            </label>
            <fieldset className="quotation-field">
                Sono un:
                <label>
                    <input type="radio" name="iam"/>
                    Progettista
                </label>
                <label>
                    <input type="radio" name="iam"/>
                    Rivenditore
                </label>
            </fieldset>
            <label className="quotation-field">
                Eventuali informazioni aggiuntive:
                <textarea className="quotation-msg"></textarea>
            </label>

            <button className="ctaBtn">Invia</button>
        </form>
    </div>
}

export default Quotation;