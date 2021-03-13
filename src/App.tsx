import React, {createContext, useState , useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { Data, RootObject} from './Components/Model/IndividualPersonModel';
import Navbar from './Components/NavComponent/Nav';
import Persons from './Components/Persons';
import Cart from './Components/cart';
import LoggedUser from './Components/LoggedUser';
import Gifts from './Components/Gifts';
import SignIn from './Components/SignIn';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


export const personContext = createContext({id:0,email:'',first_name:'',last_name:'',avatar:''});

const App:React.FC = () => {
  const [personTwo, setPersonTwo] = useState<Data>({id:0,email:'',first_name:'',last_name:'',avatar:''});
  
  useEffect( () => {
      let result:RootObject;
      Axios.get(`https://reqres.in/api/users/2`)
      .then((response) => {
        result = response.data;
        setPersonTwo(result.data);  
      })
      .catch((err) => {
        console.log("Error is"+err);
      })
  },[])

  return (
    <Router>
    <personContext.Provider value = {personTwo}>
    <div className="App">
      <Navbar/>
      <Switch>
          <Route path="/" exact component={Persons} />
          <Route path="/cart" component={Cart} />
          <Route path="/loggedUser" component={LoggedUser} />
          <Route path="/gifts" component={Gifts} />
          <Route path="/signIn" component={SignIn} />
      </Switch>
    </div>
    </personContext.Provider>
    </Router>
  );
}

export default App;
