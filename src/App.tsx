import React from 'react';
import './App.css';
import Navbar from './Components/Nav';
import Persons from './Components/Persons';
import Cart from './Components/cart';
import LoggedUser from './Components/LoggedUser';
import Gifts from './Components/Gifts';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Persons} />
          <Route path="/cart" component={Cart} />
          <Route path="/loggedUser" component={LoggedUser} />
          <Route path="/gifts" component={Gifts} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
