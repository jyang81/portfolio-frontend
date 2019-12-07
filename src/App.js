import React from 'react';
// import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tech from './components/Tech';


function App() {
  return (
    <div>
      <Nav />
      <div className="top-spacer"><a name="home"></a></div>
      <Home />
      <About />
      <Projects />
      <Tech />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
