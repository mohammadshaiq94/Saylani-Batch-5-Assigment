import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BulbImages from  './Component/Button/BulkImages';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      
        <BulbImages/>
        {/* <SwitchOn/> */}
        {/* <SWitchOff/>
        <BreakBulk/> */}


       </div>




    );
  }
}

export default App;
