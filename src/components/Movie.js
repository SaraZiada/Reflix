import React, { Component } from 'react';
import { FaPlusCircle , FaMinusCircle} from "react-icons/fa";
import { Link } from 'react-router-dom';
import '../styles/Movie.css'

class Movie extends Component {
    
    unrent = () => {
        if(this.props.unrent(this.props.movie.id)){
            this.props.updateCatalog(-1)
        }
    }

    rent = () => {
        if(this.props.budget > 3){
            if(this.props.rent(this.props.movie.id)){
                this.props.updateCatalog(1)
            }
        }else{
            alert("Sorry, you don't have enough budget")
        }
    }

    render(){
        let movie = this.props.movie
        return(
            <div className='movie'>
                 <Link to={`/movies/${movie.id}`}><img src={movie.img} alt={movie.title}></img></Link>
                <div className='icons'>
                    <span onClick={this.rent}><FaPlusCircle /></span>
                    <span onClick={this.unrent}><FaMinusCircle /></span>
                </div>
            </div>
        );
    }
}
export default Movie;