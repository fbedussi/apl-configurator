import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getShowForm, getCurrentAnswer } from '../selectors';
import { submitForm } from '../actions';

import Input from './Input';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    showForm: getShowForm(state),
    answer: getCurrentAnswer(state)
});

const mapDispatchToProps = (dispatch) => ({
    submitForm: (data) => dispatch(submitForm(data))
})

class Form extends React.Component {
    handleSubmit(e) {
        e.preventDefault();

        var form = e.target;
        var data = new FormData(form);

        this.props.submitForm(data);
    }

    render() {
        return <form onSubmit={(e) => this.handleSubmit(e)}
            className={`quotation-form ${this.props.showForm ? 'show' : 'hide'}`}
            name="contactForm"
        >
            <p className="form-mandatory">{this.props.labels.mandatory}</p>
            <input id="solution" name="solution" type="hidden"  value={this.props.answer.subtitle.length? this.props.answer.title + ' - ' + this.props.answer.subtitle : this.props.answer.title}/>
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
                <span className="form-label">{this.props.labels.reason}*</span>
                <fieldset className="form-input form-reason">
                    <span className="form-reason-option">
                        <input required type="radio" name="reason" id="project" value="project"/>
                        <label htmlFor="project">{this.props.labels.project}</label>
                    </span>
                    <span className="form-reason-option">
                        <input required type="radio" name="reason" id="call" value="call"/>
                        <label htmlFor="call">{this.props.labels.call}</label>
                    </span>
                    <span className="form-reason-option">
                        <input required type="radio" name="reason" id="other" value="other"/>
                        <label htmlFor="other">{this.props.labels.other}</label>
                    </span>
                </fieldset>
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
