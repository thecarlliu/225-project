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
            <div style={{
                width:"250px",
                display:"flex",
                position:"absolute",
                margin:"auto",
                left:0,
                right:0,
                top:"650px"

            }}>
                <form onSubmit={(e)=>{this.handleSubmit(e)}}>
                    <label>
                        Outs:
                        <input type="text" value={this.state.value} onChange={(e)=>{this.handleChange(e)}} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default Input;