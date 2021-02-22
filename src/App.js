import React, { Component } from 'react';
import Header from './components/layout/header/Header';
import Home from './components/pages/home/Home'
import Projects from './components/pages/projects/Projects'
import Services from './components/pages/services/Services'
import Process from './components/pages/process/Process'
import About from './components/pages/about/About'
import Contact from './components/pages/contact/Contact'
import Footer from './components/layout/footer/Footer';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        Hello World
        <Header />
        <Home />
        <Projects />
        <Services />
        <Process />
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
