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
        return (
            <div className="appInner" lang={this.props.currentLanguage}>
                <header className="header">
                    <div className="wrapper header-wrapper">
                        <a className="logoLink" href="http://www.attraversamentipedonali.it/">
                            <img src="images/logo_apl-02.png" alt={this.props.labels.logoAlt} />
                        </a>
                        <LinkHome text={this.props.labels.linkHome} />
                    </div>
                </header>

                <Main />
                <RequestNotification labels={this.props.labels} requestStatus={this.props.requestStatus} />

                <footer className="footer">
                    <div className="wrapper footer-wrapper">
                        <div className="footer-logoAndLink">
                            <img src="images/d-power-logo_70.png" alt={this.props.labels.logoDpowerAlt} />
                            <LinkHome text={this.props.labels.linkHome} />
                        </div>
                        <small className="copyright">&copy; Detas.com - All rights reserved</small>
                    </div>
                </footer>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
