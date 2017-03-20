import React from 'react';
import { connect } from 'react-redux';

import { getShowForm } from '../selectors';
import { requestSent } from '../actions';

import Input from './Input';

const mapStateToProps = (state) => ({
    showForm: getShowForm(state)
});

const mapDispatchToProps = (dispatch) => ({
    requestSent: () => dispatch(requestSent())
})

class Form extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        console.log(e);
        var form = e.target;
        var data = new FormData(form);

        //https://github.com/dwyl/html-form-send-email-via-google-script-without-server
        fetch('https://script.google.com/macros/s/AKfycbx4vjw-Pgwb8C4-W046IS20B8N0yWVwbdQl5JNlMiH14L1fcSm5/exec', {
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
            className={`quotation-form ${this.props.showForm ? 'show' : 'hide'}`}
            name="contactForm"
        >
            <p class="form-mandatory">* campi obbligatori</p>
            {[{
                labelText: 'Nome',
                name: 'name',
                minLength: 2
            }, {
                labelText: 'Cognome',
                name: 'surname',
                minLength: 2
            }, {
                labelText: 'Società (ragione sociale)',
                name: 'company',
                required: true,
                minLength: 2
            }, {
                labelText: 'Indirizzo',
                name: 'address',
                minLength: 5,
                required: true
            }, {
                labelText: 'e-mail',
                name: 'email',
                type: 'email',
                required: true
            }, {
                labelText: 'Telefono',
                name: 'phone',
                minLength: 5,
                type: 'tel'
            }, {
                labelText: 'Sito',
                name: 'website'
            }].map(input => <Input
                labelText={input.labelText}
                name={input.name}
                minLength={input.minLength}
                required={input.required}
                type={input.type}
            />)}

            <div className="form-field">
                <span className="form-label">Motivo della richiesta:</span>
                <span className="form-input form-reason">
                    <input type="radio" name="reason" id="project" />
                    <label htmlFor="project">Elaborazione progetto</label>
                    <input type="radio" name="reason" id="call" />
                    <label htmlFor="call">Miglioria per gara d'appalto</label>
                    <input type="radio" name="reason" id="other" />
                    <label htmlFor="other">Altro</label>
                </span>
            </div>
            <label className="form-field">
                <span className="form-label">Eventuali informazioni aggiuntive:</span>
                <textarea className="form-msg form-input" id="msg" name="msg"></textarea>
            </label>

            <button className="ctaBtn form-submit" type="submit">Invia</button>
        </form>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
