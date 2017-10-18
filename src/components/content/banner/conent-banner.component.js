import React, { Component } from 'react';

class ContentBanner extends Component {
  render() {
    return (
       <header className="masthead">
            <div className="header-content">
                <div className="header-content-inner">
                    <h1 id="homeHeading">Your credit scores should be free. And now they are.</h1>
                    <p>Check your scores anytime, anywhere, and never pay for it.</p>
                    <a className="btn btn-primary btn-xl flt-none customBtn" href="#about">See my scores</a>
                </div>
            </div>
        </header>
    );
  }
}

export default ContentBanner;
