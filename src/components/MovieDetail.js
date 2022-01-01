import React, { Component } from 'react';
import '../styles/MovieDetail.css'

class MovieDetail extends Component {
    render(){
        let catalog = this.props.catalog
        let id = this.props.match.params.id
        let movie = catalog.find(m => m.id == id)
        
        return(
            <div className='movieDetails'>
                <div className='title'>{movie.title} ({movie.year})</div>
                <div className='img'><img src={movie.img} alt={movie.title}></img></div>
                <div>{movie.descrShort}</div>
            </div>
        );
    }
}
export default MovieDetail;