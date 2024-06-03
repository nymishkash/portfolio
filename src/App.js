import React, { Component } from 'react';
import Header from './components/Header';
import Progress from './components/Progress';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Testimonials from  './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Progress />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;