import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getShowForm } from '../selectors';
import { requestSent } from '../actions';

import Input from './Input';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
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
            <p className="form-mandatory">{this.props.labels.mandatory}</p>
            {[{
                labelText: this.props.labels.name,
                name: 'name',
                minLength: 2
            }, {
                labelText: this.props.labels.surname,
                name: 'surname',
                minLength: 2
            }, {
                labelText: this.props.labels.company,
                name: 'company',
                required: true,
                minLength: 2
            }, {
                labelText: this.props.labels.address,
                name: 'address',
                minLength: 5,
                required: true
            }, {
                labelText: this.props.labels.email,
                name: 'email',
                type: 'email',
                required: true
            }, {
                labelText: this.props.labels.phone,
                name: 'phone',
                minLength: 5,
                type: 'tel'
            }, {
                labelText: this.props.labels.website,
                name: 'website'
            }].map((input, i) => <Input
                labelText={input.labelText}
                name={input.name}
                minLength={input.minLength}
                required={input.required}
                type={input.type}
                key={i}
            />)}

            <div className="form-field">
                <span className="form-label">{this.props.labels.reason}</span>
                <span className="form-input form-reason">
                    <span className="form-reason-option">
                        <input type="radio" name="reason" id="project" />
                        <label htmlFor="project">{this.props.labels.project}</label>
                    </span>
                    <span className="form-reason-option">
                        <input type="radio" name="reason" id="call" />
                        <label htmlFor="call">{this.props.labels.call}</label>
                    </span>
                    <span className="form-reason-option">
                        <input type="radio" name="reason" id="other" />
                        <label htmlFor="other">{this.props.labels.other}</label>
                    </span>
                </span>
            </div>
            <label className="form-field">
                <span className="form-label">{this.props.labels.msg}</span>
                <textarea className="form-msg form-input" id="msg" name="msg"></textarea>
            </label>

            <button className="ctaBtn form-submit" type="submit">{this.props.labels.submit}</button>
        </form>
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
