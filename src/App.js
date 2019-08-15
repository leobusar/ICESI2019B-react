import React from 'react';
import './App.css';
import Header from './Header'

function App() {
  var  empresa="NaN"

  return (
    <div className="App">
        <Header corporation={empresa}></Header>
    </div>
  );
}

export default App;
