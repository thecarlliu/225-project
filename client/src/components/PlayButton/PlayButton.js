import React, {Component} from "react";

class PlayButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggle:"inline-block",
            value:"",
            isPressed:this.props.buttonPressed
        }
    };

    handlePlay=(e) =>{
        e.preventDefault();
        this.setState({value: e.target.value});
        this.setState({toggle:'none'});
        this.state.isPressed(e.target.value);
    };


    render() {
        return (
            <div onClick={(e) => {this.handlePlay(e)}} style={{
                height:'20px',
                width:'100px',
                borderRadius:'15%',
                backgroundColor:'blue',
                textAlign:'center',
                position: 'fixed',
                margin:'auto',
                right: "0",
                left: "0",
                bottom:200,
                display:this.state.toggle
            }}>PLAY</div>
        )
    }
}

export default PlayButton;