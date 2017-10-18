import React, { Component } from 'react';

class ContentSecurity extends Component {
  render() {
    return (
       <div class="row securityAndPrivacy">
            <h1 class="subHeadingText marginBtm100">We treat your data as if it was our own</h1>
            <div class="col-lg-2"></div>
            <div class="col-lg-4 secutirySection">
                <img src={require('../../../images/Security.png')} align="center" class="img-fluid" />
                <h2 class="subHeading">Security</h2>
                <p class="subPara">We use 128-bit encryption to protect the transmission of your data to our site.</p>
                <a href="" class="learnMore">Learn more.</a>
            </div>
            <div class="col-lg-4 privacySection text-center">
                <img src={require('../../../images/Privacy.png')} align="center" class="img-fluid" />
                <h2 class="subHeading">Privacy</h2>
                <p class="subPara">We won't sell or rent your personal information to third parties for marketing purposes.</p>
                <a href="" class="learnMore">Learn more.</a>
            </div>
            <div class="col-lg-2"></div>
        </div>
    );
  }
}

export default ContentSecurity;
