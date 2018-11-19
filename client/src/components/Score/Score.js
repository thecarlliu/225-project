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
            <div className="primaryBg" style={{position: "absolute", width: "200px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", top: 50, right: 110, height:"40px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight:"40px"}}>
                <b>Score: {this.props.currentScore}</b>
            </div>
        )
    }
}

export default Score