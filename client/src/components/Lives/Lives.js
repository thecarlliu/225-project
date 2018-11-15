import React, { Component } from "react";

//  Gives the user 3 lives
class Lives extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="primaryBg" style={{position: "absolute", width: "120px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", top: 50, left: 160, height:"40px", lineHeight:"40px", fontFamily: "Georgia", fontSize: "large", textAlign: "center"}}>
                <b>Lives: {this.props.lives}</b>
            </div>
        )
    }
}

export default Lives;