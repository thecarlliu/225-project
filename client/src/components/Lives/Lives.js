import React, { Component } from "react";

//  Gives the user 3 lives
class Lives extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style = {{border:"5px solid black", fontFamily: "Georgia", fontSize:"large", position: "absolute", top: 50, left: 150, height:"40px", lineHeight:"40px"}}>
                <b>Lives: {this.props.lives}</b>
            </div>
        )
    }
}

export default Lives;