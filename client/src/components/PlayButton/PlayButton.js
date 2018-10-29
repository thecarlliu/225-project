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
            <div onClick={(e) => {this.handlePlay(e)}} style={{
                height:'30px',
                width:'150px',
                borderRadius:'15%',
                backgroundColor:'blue',
                textAlign:'center',
                position: "fixed",
                margin:'auto',
                right: "0",
                left: "0",
                top: 340,
                display:this.state.toggle
            }}>PLAY</div>
        )
    }
}

export default PlayButton;