import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      text: "Hello Pakistan",
      condition: true

    }

  }

  ChangeState() {
    this.setState({
      
      text: this.state.condition ? 'Hello World' : 'Hello Pakistan',
      condition: !this.state.condition
    })
  }

  


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.state.text}</h1>
          <button onClick={() => this.ChangeState()}>Change The Text</button>
          <h1></h1>
        </header>
   
      </div>
    );
  }
}

export default App;
