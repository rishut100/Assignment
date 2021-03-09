import React, { Component } from 'react';
import Axios from 'axios';

interface PState{
    personData?: [];
}

export default class Persons extends Component<PState> {
    constructor(props: PState){
        super(props);

        this.state ={
            personData : []
        }

        this.getData = this.getData.bind(this);

    }

    componentDidMount(){
        this.getData()
    }
    // async gettingData(){
    //     let response = await Axios.get('https://reqres.in/api/users/');
    //     let data = response.data;
    //     console.log(data);
    //     console.log(56);
    // }

    async getData(){
        const resApi = await Axios.get("https://reqres.in/api/users/");
        this.setState({
            personData : resApi.data.data
        });
        console.log(resApi.data.data);
        // console.log(this.state.personData);
        const pData = resApi.data.data;
        console.log(pData[0]);
    }

    render() {
        return (
            <div className="container mt-5 ">
                <h1 className="text-lg-dark mt-1">Person Data</h1>
                <section className="person-data">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-lg-4">
                                <div className="card person-data-card">
                                    <div className="card-body">
                                        some text here
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card person-data-card">
                                    <div className="card-body">
                                        some text here
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card person-data-card">
                                    <div className="card-body">
                                        some text here
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-4">
                                <div className="card person-data-card">
                                    <div className="card-body">
                                        some text here
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            
        )
    }
}
