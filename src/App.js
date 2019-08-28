import React, {Component} from 'react';
import './App.css';
import Header from './Header'
import Users from './components/User/Users';

class App extends Component {

  constructor(){
    super();
  }
  
  render() {

    var  empresa="NaN"

    return (
      <div className="container">
          <Header corporation={empresa}></Header>
          <Users></Users>
      </div>
    );
  }
}

export default App;
