import React, { Component } from "react";
import Footer from '../Layout/Footer/Footer.component'
import Header from "../Layout/Header/Header";

class Home extends Component {
  render() {
    return (
      <div className='main-page'>
        {/* Header */}
        <Header/>

        {/* Body */}

        {/* Footer */}
        <Footer/>
      </div>
    )
  }
}

export default Home;
