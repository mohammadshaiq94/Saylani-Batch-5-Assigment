import React, { Component } from 'react';
import '../../App.css';

class SWitchOff extends Component {
  constructor(props) {
    super(props);

 

    this.TurnOff = this.TurnOff.bind(this);
  }

  TurnOff() {


    this.props.switchoff.swicthOn = false



  }

  render() {

    return (
      <div>
        <button onClick={this.TurnOff}>Switch OF Bulb</button>
      </div>
    );
  }
}

export default SWitchOff;