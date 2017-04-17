import React from 'react';

import LinkHome from './LinkHome';

const RequestNotification = ({labels, requestStatus}) => {
    if (requestStatus === 'unsent') {
        return null;
    }

    return (
        <div className="wrapper requestNotification">
            <div className={`requestNotification-sentWrapper ${requestStatus === 'sent' ? 'show' : 'hide'}`}>
                <p className="requestNotification-success">
                    {labels.requestSent}
                </p>
            </div>
            <div className={`requestNotification-successWrapper ${requestStatus === 'success' ? 'show' : 'hide'}`}>
                <p className="requestNotification-thanks">
                    {labels.thanks}
                </p>
                <p className="requestNotification-success">
                    {labels.requestSuccess}
                </p>
                <p className="requestNotification-followUp">
                    {labels.followUp}
                </p>
            </div>
            <div className={`requestNotification-errorWrapper ${requestStatus === 'error' ? 'show' : 'hide'}`}>
                <p className="requestNotification-error" dangerouslySetInnerHTML={{__html: labels.requestError}}>
                </p>
            </div>
            <LinkHome text={labels.linkHome} />
        </div>
    );
};

export default RequestNotification;
