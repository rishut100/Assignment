import React from 'react';
import './App.css';
import Nav from './Components/Nav';
import Persons from './Components/Persons';
import Cart from './Components/cart';
import LoggedUser from './Components//LoggedUser';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App-header">
      <Nav/>
      <Switch>
          <Route path="/" exact component={Persons} />
          <Route path="/cart" component={Cart} />
          <Route path="/loggedUser" component={LoggedUser} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;
