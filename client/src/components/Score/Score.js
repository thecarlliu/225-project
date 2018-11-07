import React, {Component} from "react";

/**
 * Renders the current score
 */
class Score extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
            <div style = {{border:"5px solid black", fontFamily: "Georgia", fontSize:"large", position: "absolute", top: 50, right: 150, margin:"auto", height:"40px", lineHeight:"0px"}}>
                <h3>
                    <b>Score: {this.props.currentScore}</b>
                </h3>
            </div>
        )
    }
}

export default Score