import React, { Component } from "react";

class Popup extends Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: "block"
        }
    };

    // Adapted from https://codepen.io/bastianalbers/pen/PWBYvz
    render() {
        return (
            <div className='popup' style = {{
                position:"fixed", width: "100",
                height: "100", top: 0, left: 0,
                right: 0, bottom: 0, margin: "auto",
                background: "white"
                }}>
                <div className='popup_inner' style = {{
                    position: "absolute", left: "25",
                    right: "25", top: "25",
                    bottom: "25", margin: "auto",
                    background: "white",
                    display: this.state.toggle
                }}>
                    <h3>{this.props.text}</h3>
                    <button onClick={this.props.closePopup}>Continue</button>
                </div>
            </div>
        );
    }
}

export default Popup;