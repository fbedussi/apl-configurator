import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getShowForm, getCurrentAnswer } from '../selectors';
import { submitForm } from '../actions';

import Input from './Input';

const mapStateToProps = state => ({
    labels: getLabels(state),
    showForm: getShowForm(state),
    answer: getCurrentAnswer(state)
});

const mapDispatchToProps = dispatch => ({
    submitForm: data => dispatch(submitForm(data))
});

class Form extends React.Component {
    handleSubmit(e) {
        var form;
        var data;

        e.preventDefault();

        form = e.target;
        data = new FormData(form);

        this.props.submitForm(data);
    }

    render() {
        const { showForm, labels, answer } = this.props;

        return <form onSubmit={e => this.handleSubmit(e)}
            className={`quotation-form ${showForm ? 'show' : 'hide'}`}
            name="contactForm"
        >
            <p className="form-mandatory">{labels.mandatory}</p>
            <input id="solution"
                name="solution"
                type="hidden"
                value={answer.subtitle.length ?
                    answer.title + ' - ' + answer.subtitle
                    : answer.title}
            />
            {[{
                labelText: labels.name,
                name: 'name',
                minLength: 2
            }, {
                labelText: labels.surname,
                name: 'surname',
                minLength: 2
            }, {
                labelText: labels.company,
                name: 'company',
                required: true,
                minLength: 2
            }, {
                labelText: labels.address,
                name: 'address',
                minLength: 5,
                required: true
            }, {
                labelText: labels.email,
                name: 'email',
                type: 'email',
                required: true
            }, {
                labelText: labels.phone,
                name: 'phone',
                minLength: 5,
                type: 'tel'
            }, {
                labelText: labels.website,
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
                <span className="form-label">{labels.reason}*</span>
                <fieldset className="form-input form-reason">
                    <span className="form-reason-option">
                        <input required type="radio" name="reason" id="project" value="project"/>
                        <label htmlFor="project">{labels.project}</label>
                    </span>
                    <span className="form-reason-option">
                        <input required type="radio" name="reason" id="call" value="call"/>
                        <label htmlFor="call">{labels.call}</label>
                    </span>
                    <span className="form-reason-option">
                        <input required type="radio" name="reason" id="other" value="other"/>
                        <label htmlFor="other">{labels.other}</label>
                    </span>
                </fieldset>
            </div>
            <label className="form-field">
                <span className="form-label">{labels.msg}</span>
                <textarea className="form-msg form-input" id="msg" name="msg"></textarea>
            </label>

            <button className="ctaBtn form-submit" type="submit">{labels.submit}</button>
        </form>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
