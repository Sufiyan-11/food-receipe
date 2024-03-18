// import logo from './logo.svg';
import React from 'react';
import Header from'./components/Header';
import Home from './pages/Home';
import News from './pages/News';
import Quiz from './pages/Quiz';
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
        <Route path='/News' component={News} />
        <Route path='/Quiz' component={Quiz} />
        {/* <Route path='/Contact' component={Contact} /> */}
      </Switch>
      <Footer/>
    </Router>
    
  );
}

export default App;
