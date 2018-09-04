import React, { Component } from 'react';
import '../../App.css';

class BreakBulk extends Component {
  constructor(props) {
    super(props);

    this.break = this.break.bind(this);
  }

  break() {


    this.props.breakbulb.break = true

  }

  render() {

    return (
      <div>
        <button onClick={this.break}>Break Bulb</button>
      </div>
    );
  }
}

export default BreakBulk;