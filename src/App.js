import React from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Social from './components/social/Social';
import Event from './components/events/Events';
import Projects from './components/Projects/Project';
import Achievement from './components/achievements/Achievements'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    
      <Social />
      <Home />
      <About />
      {/* <Event /> */}
      <Projects />
      <Achievement />
      <Footer />
    </>
  );
};

export default App;
