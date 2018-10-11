import React, {Component} from "react";

class HighScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            highScore: this.props.highScore
        }
    }
    render() {
        return (
            <div>
                <div style = {{fontFamily: "Georgia", }}></div>
            </div>
        )
    }
}

export default HighScore;