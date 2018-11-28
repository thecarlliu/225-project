import React, { Component } from "react";

//The Timer class gives the user a limited amount of time to give their answer.
class Timer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
      if(this.props.time < 10){
        return (
            <div style = {{height: 20,
                width: 160,
                fontFamily: "Georgia",
                fontSize:"xx-large",
                position: "fixed",
                textAlign:"center",
                top: 50,
                left: 0,
                right: 0,
                margin: "auto"}}>
                <b>00:0{this.props.time}</b>
            </div>
        )
      }
      else{
        return (
            <div style = {{height: 20,
                width: 160,
                fontFamily: "Georgia",
                fontSize:"xx-large",
                position: "fixed",
                textAlign:"center",
                top: 50,
                left: 0,
                right: 0,
                margin: "auto"}}>
                <b>00:{this.props.time}</b>
            </div>
        )
      }
    }
}

export default Timer;
