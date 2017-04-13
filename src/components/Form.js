import React from 'react';

import Input from './Input';

export default ({ labels, answer, submitHandler }) => <form onSubmit={e => submitHandler(e)}
            className="quotation-form"
            name="contactForm"
        >
            <p className="form-mandatory">{labels.mandatory}</p>
            <input id="solution"
                name="solution"
                type="hidden"
                value={answer.subtitle && answer.subtitle.length ?
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
