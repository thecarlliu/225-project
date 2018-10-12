import React, {Component} from "react";

/**
 * Renders the current score
 */
class Score extends Component {

    constructor(props){
        super(props);
        this.state = {
            curScore: this.props.curScore
        }
    }

    render() {
        return(
            <div style = {{fontFamily: "Georgia", position: "fixed", bottom: 550, left: 150}}>
                <h3>
                    Score: {this.state.curScore}
                </h3>
            </div>
        )
    }
}

export default Score