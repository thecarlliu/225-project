import React, { Component } from "react";

//The Timer class gives the user a limited amount of time to give their answer.
class Timer extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div style = {{fontFamily: "Georgia", position: "fixed", bottom: 550, left: 550}}>
                Time Left: {this.props.time} Seconds
            </div>
        )
    }
}

export default Timer;