import React, { Component } from "react";

//The Timer class gives the user a limited amount of time to give their answer.
class Timer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div style = {{height: 20,
                width: 160,
                fontFamily: "Georgia",
                position: "absolute",
                top: 50,
                left: 0,
                right: 0,
                margin: "auto"}}>
                Time Left: {this.props.time} Seconds
            </div>
        )
    }
}

export default Timer;