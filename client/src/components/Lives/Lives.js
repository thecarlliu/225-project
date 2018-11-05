import React, { Component } from "react";

//  Gives the user 3 lives
class Lives extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style = {{fontFamily: "Georgia", fontSize:"large", position: "absolute", top: 75, left: 150}}>
                <b>Lives: {this.props.lives}</b>
            </div>
        )
    }
}

export default Lives;