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
            <div style = {{fontFamily: "Georgia", fontSize:"large", position: "absolute", top: 100, right: 150, margin:"auto"}}>
                <h3>
                    <b>Score: {this.props.currentScore}</b>
                </h3>
            </div>
        )
    }
}

export default Score