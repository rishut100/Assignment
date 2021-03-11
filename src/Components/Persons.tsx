import React from 'react';
import {useState, useEffect} from 'react';
import { Data, RootObject} from './Model/Interfaces';
import Axios from 'axios';
import PersonList from './PersonList';
import InfiniteScroll from 'react-infinite-scroll-component';


const Person : React.FC= () => {
    const [person, setPerson] = useState<Array<Data>>([{id:0,email:'',first_name:'',last_name:'',avatar:''}]);
    const [page, setPage] = useState(1);

    useEffect( ()=>{
        let result:RootObject;
        Axios.get(`https://reqres.in/api/users?page=${page}`)
        .then((response) => {
            result = response.data;
            if(page === 1 && result.data.length >= 6 ){
                setPerson(result.data);    
            }
            if( page >= 2 && result.data.length >= 6){
                setPerson((prev) => {return [...prev, ...result.data];});
            }
            else {
                setPage(prev => prev + 1);
            }
        })
        .catch((err) => {
            console.log("Error is"+err);
        })   
    },[page]);    

    return (
        <>
        <InfiniteScroll
        dataLength = {person.length}
        next= {() => {setPage(prev => prev + 1)}}
        hasMore ={true}
        loader = {<h4>Loading...</h4>}
        >
            <div className="container">
                <PersonList items={person}/>
            </div>
        </InfiniteScroll>
        </>
    )
}

export default Person;