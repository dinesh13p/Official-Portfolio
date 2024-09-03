import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
