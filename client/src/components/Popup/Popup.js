import React, { Component } from "react";

class Popup extends Component {
    constructor(props){
        super(props);
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
                zIndex: 99
            }}>
                you lost! try again?
                <div style={{width: 100, height:80, backgroundColor: "red"}}>
                    No
                </div>
                <div onClick={} style={{width: 100, height:80, backgroundColor: "red"}}>
                    try again
                </div>
            </div>
        )
    }
}

export default Popup;