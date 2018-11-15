import React, {Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            submitHandler: this.props.submitHandler,
            changeHandler: this.props.changeHandler
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.state.submitHandler(event);
        this.setState({value: ""});

    };

    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.state.changeHandler(event.target.value);
    };

    render() {
        return (
            <div className="primaryBg" style={{position: "absolute", width: "250px", boxShadow: "1px 1px 1px 1px #08415C", display: "flex", left: 0, right: 0, margin: "auto", top: "520px", borderRadius: "10px", height:"80px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight: "40px"}}>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <label>
                        <b>Outs: </b><input type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Input;