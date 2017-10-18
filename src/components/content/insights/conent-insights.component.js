import React, { Component } from 'react';

class ContentInsights extends Component {
  render() {
    return (
       <div className="row insightsSection">
            <div className="col-lg-4 pull-right col-lg-offset-right-1 insightContent">
                <div className="circle">
                    <div className="circle__inner">
                        <div className="circle__wrapper">
                            <div className="circle__content">2</div>
                        </div>
                    </div>
                </div>
                <h2 className="subHeading">Insights</h2>
                <p className="subPara">Learn what affects your credit scores and what you can do to improve them.</p>
            </div>

            <div className="col-lg-4 col-lg-offset-2">
                <img src={require('../../../images/CreditFactors_Card.png')} align="" className="img-fluid" />
            </div>
        </div>
    );
  }
}

export default ContentInsights;
