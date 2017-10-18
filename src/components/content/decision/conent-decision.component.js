import React, { Component } from 'react';

class ContentDecisions extends Component {
  render() {
    return (
       <div className="row betterDecisionsSection">
            <div className="col-lg-4  col-lg-offset-2 betterDecisionsContent">
                <div className="circle">
                    <div className="circle__inner">
                        <div className="circle__wrapper">
                            <div className="circle__content">3</div>
                        </div>
                    </div>
                </div>
                <h2 className="subHeading">Better Decisions</h2>
                <p className="subPara">See personalized recommendations for ways to use your credit more wisely.</p>
            </div>
            <div className="col-lg-4  col-lg-offset-1">
                <img src={require('../../../images/BetterDecisions_Card.png')} align="" className="img-fluid" />
            </div>
        </div>
    );
  }
}

export default ContentDecisions;
