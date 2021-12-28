import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router,Link,Route} from 'react-router-dom'
import Landing from './components/Landing';


class App extends Component {
  constructor() {
    super()
    this.state = {
     
    }
  }
  
  render() {
    const state = this.state
    return (
      <Router>
      <div className="App">
        <Link to="/">Home</Link>

        <Route path="/" exact component={Landing}/>
       </div>
      </Router>
    );
  }
}

export default App;
