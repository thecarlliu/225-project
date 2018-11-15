import React, {Component} from "react";

class PlayButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggle:"block"
        }
    };

    handlePlay=(e) =>{
        e.preventDefault();
        this.setState({toggle:'none'});
        this.props.buttonPressed();
    };


    render() {
        return (
            <div onClick={(e) => {this.handlePlay(e)}} className="primaryBg" style={{position: "fixed", top: "270px", width: "150px", height:"80px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", left: 0, right: 0, margin: "auto", display:this.state.toggle, zIndex: 99, textAlign: "center", lineHeight: "80px", fontSize: "large", fontFamily: "Georgia"}}><b>PLAY</b></div>
        )
    }
}

export default PlayButton;