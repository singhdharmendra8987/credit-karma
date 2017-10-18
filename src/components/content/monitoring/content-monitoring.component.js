import React, { Component } from 'react';

class ContentMonitoring extends Component {
  render() {
    return (
       <div className="row moreThenScoresSection">
            <h1 className="subHeadingText">More than scores</h1>
            <div className="col-lg-4 col-lg-offset-2 monitoringContent">
                <div className="circle">
                    <div className="circle__inner">
                        <div className="circle__wrapper">
                            <div className="circle__content">1</div>
                        </div>
                    </div>
                </div>
                <h2 className="subHeading">Monitoring</h2>
                <p className="subPara">Get alerted when there’s an important change on your reports.</p>
            </div>
            <div className="col-lg-4 col-lg-offset-1">
                <img src={require('../../../images/Monitoring_Card.png')} align="" className="img-fluid monitoringImg" />
            </div>
        </div>
    );
  }
}

export default ContentMonitoring;
