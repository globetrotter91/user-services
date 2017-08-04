import React, { Component } from 'react'; 

export default class HomeComponent extends Component{
    constructor(props){
        super(props);
        this.state={
            names: 'Name' 
        };
    }
    render(){
        return(
            <div className='jumbotron'>
                <h1>Hello {this.state.names}</h1>
                <h2>Start your work here </h2>
            </div>
        )
    }
}