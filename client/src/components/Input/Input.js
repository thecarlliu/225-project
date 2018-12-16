import React, {Component} from "react";

/**
 * Renders input box
 */
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            submitHandler: this.props.submitHandler,
            changeHandler: this.props.changeHandler,
            label: "",
            topPos: "0px",
            shadow: null,
            width: ""
        }
    }

    /**
     * Calls specific submit handler when user has entered a value
     * Resets the input value
     * @param event
     */
    handleSubmit = (event) => {
        event.preventDefault();
        this.state.submitHandler(event);
        this.setState({value: ""});

    };

    /**
     * Sets the input value to what the user has entered
     * Calls specific change handler
     * @param event
     */
    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.state.changeHandler(event.target.value);
    };

    render() {
        return (
            <div className="primaryBg" style={{position: "absolute", width: this.props.width, boxShadow: this.props.shadow, display: "flex", left: 0, right: 0, margin: "auto", top: this.props.topPos, borderRadius: "10px", height:"80px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight: "40px"}}>
                <form onSubmit={(e)=>{this.handleSubmit(e)}} autoComplete="off">
                    <label>
                        <b>{this.props.label} </b><input id="input-box" type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}} />
                    </label>
                    <input autoComplete="false" type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Input;
