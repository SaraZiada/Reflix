import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Landing.css'

class Landing extends Component {
    constructor(){
        super()
        this.state={
            name : "",
            backgroundColor : "black"
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className='header'>WHO'S WATCHING?</h1>
                <div className='users'>
                <Link to="/catalog" ><div className='user'>Sara</div></Link>
                <Link to="/catalog" ><div className='user'>Mahmood</div></Link>
                <Link to="/catalog" ><div className='user'>Salma</div></Link>
                <Link to="/catalog" ><div className='user'>Jaber</div></Link>
                </div>
            </div>
        );
    }
}

export default Landing;