import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './screens/index';
import SignInPage from './screens/signin';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={SignInPage} exact />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
