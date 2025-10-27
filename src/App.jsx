import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import WhyChoose from './components/WhyChoose';
import Impact from './components/Impact';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Clients />
      <WhyChoose />
      <Impact />
      <Contact />
    </div>
  );
}

export default App;