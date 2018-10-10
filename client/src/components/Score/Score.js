import React, {Component} from "react";

class Score extends Component {

    constructor(props){
        super(props);
        this.state = {
            curScore: this.props.curScore
        }
    }
    render() {
        return(
            <div style = {{fontFamily: "Georgia"}}>
                <h1>
                    Score: {this.state.curScore}
                </h1>
            </div>
        )
    }
}

function updateScore(){
    curScore += 10; // arbitrary
}

export default Score