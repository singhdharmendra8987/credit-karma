import React, { Component } from 'react';
import ContentBanner from './banner/conent-banner.component';
import ContentWelcome from './welcome/conent-welcome.component';
import ContentMonitoring from './monitoring/content-monitoring.component';
import ContentInsights from './insights/conent-insights.component';
import ContentDecisions from './decision/conent-decision.component';
import ContentFollow from './follow/content-follow.component';
import ContentSecurity from './security/conent-security.component';

class Content extends Component {
  render() {
    return (
       <div className="container-fluid bodyContainer">
        <ContentBanner/>
        <section className="scoresInfo">
            <div className="container freeCreditContainer">
                <ContentWelcome/>
                <ContentMonitoring/>
                <ContentInsights/>
                <ContentDecisions/>
                <ContentFollow/>
                <ContentSecurity/>
            </div>
        </section>
       </div>
    );
  }
}

export default Content;
