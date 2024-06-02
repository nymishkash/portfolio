import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <About />
        <Resume />
        <Portfolio />
        <Testimonials />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default App;