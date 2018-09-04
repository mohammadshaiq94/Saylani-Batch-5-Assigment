import React, { Component } from 'react';
import '../../App.css';
import SwitchOn from '../Button/SwitchOn';
import SWitchOff from '../Button/SwitchOff';
import BreakBulk from '../Button/BreakBulb';

class BulbImages extends Component {
  constructor(props) {
    super(props);

    this.state = {
        bulb : 'https://www.industrytap.com/wp-content/uploads/2016/02/incandescent-e1456179151174.jpg',
        breakBulb : 'https://media.istockphoto.com/vectors/brokendown-light-bulb-vector-id164446736',
        lightbulb : 'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn',
        swicthOn:false,
        break:false,
     
    }
    setInterval(()=>{
      if(this.state.swicthOn === true){
          console.log('Run',this.state.swicthOn)
          this.setState({
              swicthOn:true,
              break:false,
          })
      }else{
        console.log('NotRun',this.state.swicthOn)
          this.setState({
              
              swicthOn:false,
           
          })
      }
    },500)

  }

//  Images() {

//       this.props.Image({SwitchoN: this.state.lightbulb, break: this.state.breakBulb})
 

//   }

  render() {

    return (
      <div>

      
        {/* {
            (this.state.swicthOn === true)? 
            <div>
            <img src={this.state.lightbulb} />
            </div>
            :
            <div>
            <img src={this.state.bulb} />
            {
                ()
            }
            </div>
        } */}
        {
           (this.state.break === true)?
        <div>
             <img src={this.state.breakBulb} />
        </div>
           :
           <div>
           {
             (this.state.swicthOn === true)?
                <img src={this.state.lightbulb} />
             :
             
             <img src={this.state.bulb} />
             

           }
</div>
        }





 
        <SwitchOn mylightbulb={this.state}/>
        <SWitchOff switchoff = {this.state}/>
       <BreakBulk breakbulb = {this.state}/>
      </div>
    );
  }
}

export default BulbImages;