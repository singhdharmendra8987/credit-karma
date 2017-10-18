import React, { Component } from 'react';

class ContentWelcome extends Component {
  render() {
    return (
       <div className="row clearfix margin-top10">
            <div className="col-lg-5 col-lg-offset-1">
                <h1 className="freeCreditHeading">Free credit scores are just the beginning</h1>
                <p className="infoTxt">As a member, you can see your accounts, your last reported balances and what’s affecting your credit scores.</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger customBtn" href="#about">Take a look</a>
            </div>
            <div className="col-lg-5 ">
                <img src={require('../../../images/GetKnowingCards.png')} className="img-fluid" />
            </div>
        </div>
    );
  }
}

export default ContentWelcome;
