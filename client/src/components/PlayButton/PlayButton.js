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
    };


    render() {
        return (
            <div>
                <div onClick={(e) => {this.handlePlay(e)}} style={{
                    height:'20px',
                    width:'100px',
                    borderRadius:'15%',
                    backgroundColor:'blue',
                    textAlign:'center',
                    margin:'auto',
                    top:100,
                    display:this.state.toggle
                }}>PLAY</div>
            </div>
        )
    }
}

export default PlayButton;