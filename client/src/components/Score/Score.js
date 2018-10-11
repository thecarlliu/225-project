import React, {Component} from "react";

/**
 * Renders the current score
 */
class Score extends Component {

    constructor(props){
        super(props);
        this.state = {
            curScore: this.props.curScore,
            incr: this.props.incr
        }
    }

    updateScore(){
        let newState = this.state;
        newState.curScore += newState.incr;
        this.setState(newState);
    }

    resetScore(){
        let newState = this.state;
        newState.curScore = 0;
        this.setState(newState);
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