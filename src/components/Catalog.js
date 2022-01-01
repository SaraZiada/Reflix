import React, { Component } from 'react';
import Movie from './Movie';
import '../styles/Catalog.css'

class Catalog extends Component {
    constructor(){
        super();
        this.state = {
            search:"",
            budget: 10,
            catalog: []
        }
    }
    handleSearch = (event) => {
        let searchValue = event.target.value
        let catalogCopy = this.props.catalog
        catalogCopy = catalogCopy.filter(m => m.title.toLowerCase().includes(searchValue.toLowerCase()))
        this.setState({search: searchValue, catalog: catalogCopy})
    }
    updateCatalog = (num) =>{
        let newBudget = this.state.budget - 3*num
        this.setState({budget : newBudget})
        this.render()
    }
    initCatalog = () => {
        this.setState({catalog : this.props.catalog})
    }
    render(){
        if(this.state.catalog.length === 0 && this.state.search.length === 0){
            this.initCatalog()
        }
        return(
            <div>
                <nav className='secondNav'>
                <input id="search-input" onChange={this.handleSearch} value={this.props.search}/>
                <span>Budget: ${this.state.budget}</span>
                </nav>
                {this.props.showRented ? 
                <div className='rentedContainer'>
                    <h5>Rented:</h5>
                    <div className='rented'>
                        {this.state.catalog.filter(m => m.isRented===true).map(m => {
                            return(
                            <div className='movie'>
                                <img src={m.img} alt={m.title}></img>
                            </div>
                            )
                        })}
                    </div>
                    <hr />
                </div> : null
                }
                <div className='catalogContainer'></div>
                <h5>Catalog:</h5>
                <div className='catalog'>
                    {this.state.catalog.map(m =>{
                        return(          
                            <Movie key={m.id} movie={m} updateCatalog={this.updateCatalog} rent={this.props.rent} budget={this.state.budget} unrent={this.props.unrent} />
                        )
                    })}
                </div>
            </div>
        );
    }
}
export default Catalog;