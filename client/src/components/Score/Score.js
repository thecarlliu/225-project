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
            <div style = {{fontFamily: "Georgia", position: "absolute", top: 50, left: 150}}>
                <h3>
                    Score: {this.props.currentScore}
                </h3>
            </div>
        )
    }
}

export default Score