import React, { Component } from "react";

class Popup extends Component {
    constructor(props){
        super(props);
        // this.state = {
        //     isOpen: false,
        //     text: ""
        // }
    };

    // style from https://www.sitepoint.com/community/t/creating-an-overlaying-floating-div/2827/2
    render(){
        return(
            <div style = {{
                position: "absolute",
                top: 0,
                left: 5,
                height: 500,
                width: 500,
                zindex: 99
            }}>
            </div>
        )
    }
}

export default Popup;