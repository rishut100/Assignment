import React from 'react';
import {useState, useEffect} from 'react';
import { Data, RootObject} from './Interfaces';
import Axios from 'axios';
import PersonList from './PersonList';

const Person : React.FC = () => {
    const [person, setPerson] = useState<Array<Data>>([{id:0,email:'',first_name:'',last_name:'',avatar:''}])

    useEffect( ()=>{
        let result:RootObject;
        Axios.get("https://reqres.in/api/users/")
        .then((response) => {
            result = response.data;
            setPerson(result.data);
        })
        .catch((err) => {
            console.log("Error is"+err);
        })   
    },[]);    

    return (
        <div className="container">
            <PersonList items={person}/>
        </div>
    )
}

export default Person;
