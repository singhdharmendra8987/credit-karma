import React, { Component } from 'react';

class ContentFollow extends Component {
  render() {
    return (
       <div className="row followTheMoney">
            <h1 className="subHeadingText marginBtm100">Follow the money</h1>
            <div className="col-lg-2"></div>
            <div className="col-lg-3 hidden-xs followTheMoneyAlign">
                <img src={require('../../../images/ClaimDog.png')} align="" className="img-fluid claimDog" />
            </div>
            <div className="col-lg-4">
                <h2 className="subHeading">Is there unclaimed money in your name?</h2>
                <p className="subPara">There’s an easy way to find out.</p>
                <a className="btn btn-primary btn-xl flt-none customBtn margin-top40" href="#about">Let’s do it</a>
            </div>
        </div>
    );
  }
}

export default ContentFollow;
