import React, { Component } from 'react';
import '../../App.css';

class SwitchOn extends Component {
  constructor(props) {
    super(props);
    
   

    this.Switch = this.Switch.bind(this);

  }

  Switch() {

  this.props.mylightbulb.swicthOn = true

  

  }

  render() {

    return (
      <div>
        <button onClick={this.Switch}>Switch On Bulb</button>
      </div>
    );
  }
}

export default SwitchOn;