import React from 'react';
import { connect } from 'react-redux';

import { getShowForm } from '../selectors';
import { requestSent } from '../actions';

const mapStateToProps = (state) => ({
    showForm: getShowForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestSent: () => dispatch(requestSent())
})

class Form extends React.Component {
    handleSubmit(e) {
        console.log(e);
        var form = e.target;
        var data = new FormData(form);
        fetch('send_form.php', {
            method: 'post',
            body: data
        })
        .then(response => {
            console.log(response);
            this.props.requestSent();
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)}
            className={`quotation-form ${this.props.showForm? 'show' : 'hide' }`}
            name="contactForm"
        >
            <label className="quotation-field" htmlFor="name">
                Nome
            </label>
                <input type="text" id="name" name="name"/>
            <label className="quotation-field">
                Cognome
                <input type="text" id="surname" name="surname"/>
            </label>
            <label className="quotation-field">
                Società* (ragione sociale)
                <input type="text" id="company" name="company"/>
            </label>
            <label className="quotation-field">
                Indirizzo*
                <input type="text" id="address" name="address"/>
            </label>
            <label className="quotation-field">
                Posizione
                <input type="text" id="role" name="role"/>
            </label>
            <label className="quotation-field">
                e-mail*
                <input type="email" id="email" name="email"/>
            </label>
            <label className="quotation-field">
                Telefono
                <input type="tel" id="tel" name="tel"/>
            </label>
            <label className="quotation-field">
                Sito
                <input type="text" id="website" name="website"/>
            </label>
            <fieldset className="quotation-field">
                Motivo della richiesta:
                <label>
                    <input type="radio" name="reason" id="peoject"/>
                    Elaborazione progetto
                </label>
                <label>
                    <input type="radio" name="reason" id="call"/>
                    Miglioria per gara d'appalto
                </label>
                <label>
                    <input type="radio" name="reason" id="other"/>
                    Altro
                </label>
            </fieldset>
            <label className="quotation-field">
                Eventuali informazioni aggiuntive:
                <textarea className="quotation-msg" id="msg" name="msg"></textarea>
            </label>

            <button className="ctaBtn" type="submit">Invia</button>
        </form>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
