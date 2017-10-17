import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/header/header.component'
import Footer from './components/footer/footer.component'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid bodyContainer">
          <Header/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
