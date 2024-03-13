// import logo from './logo.svg';
import React from 'react';
import Header from'./components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Footer from'./components/Footer';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/About' component={About} />
        <Route path='/Service' component={Service} />
        <Route path='/Contact' component={Contact} />
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
