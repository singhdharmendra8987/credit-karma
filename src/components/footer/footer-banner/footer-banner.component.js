import React, { Component } from 'react';

class FooterBanner extends Component {
  render() {
    return (
        <section className="foothead">
            <div className="footer-content">
                <div className="footer-content-inner">
                    <h1 id="footerHeading">It never hurts to check.</h1>
                    <p>Check your credit reports as often as you  want, it won’t affect your scores.</p>
                    <div className="footBtnWrap"><a className="btn btn-primary btn-xl js-scroll-trigger customBtn" href="#about">Show me my scores</a></div>
                </div>
            </div>
        </section>
    );
  }
}

export default FooterBanner;
