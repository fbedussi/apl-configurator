import React from 'react';
import { connect } from 'react-redux';

import { getLabels, getRequestStatus, getCurrentLanguage } from '../selectors';

import Main from './Main';
import LinkHome from './LinkHome';
import RequestNotification from './RequestNotification';

const mapStateToProps = (state) => ({
    labels: getLabels(state),
    currentLanguage: getCurrentLanguage(state),
    requestStatus: getRequestStatus(state)
});

const mapDispatchToProps = () => ({
});

class App extends React.Component {
    render() {
        const { currentLanguage, labels, requestStatus } = this.props;
        return (
            <div className="appInner" lang={currentLanguage}>
                <header className="header">
                    <div className="wrapper header-wrapper">
                        <a className="logoLink" href={labels.homeUrl}>
                            <img src="images/logo_apl-02.png" alt={labels.logoAlt} />
                        </a>
                        <LinkHome
                            text={labels.linkHome}
                            url={labels.homeUrl}
                        />
                    </div>
                </header>

                <Main />
                <RequestNotification labels={labels} requestStatus={requestStatus} />

                <footer className="footer">
                    <div className="wrapper footer-wrapper">
                        <div className="footer-logoAndLink">
                            <img src="images/d-power-logo_70.png" alt={labels.logoDpowerAlt} />
                            <LinkHome
                                text={labels.linkHome}
                                url={labels.homeUrl}
                            />
                        </div>
                        <small className="copyright">&copy; Detas.com - All rights reserved</small>
                    </div>
                </footer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
