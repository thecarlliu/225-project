import React, { Component } from "react";

//  Gives the user 3 lives
class Lives extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div style = {{fontFamily: "Georgia", position: "fixed", top: 200, right: 150, margin: "auto"}}>
                Lives: {this.props.lives}
            </div>
        )
    }
}

export default Lives;