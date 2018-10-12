import React, {Component} from "react";

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: this.props.route,
            label: this.props.label
        }
    }
    render() {
        return(
            <div onClick={(e)=>{
                this.preventDefault(e);
                this.props.history.push(this.state.route)
            }}>
                {this.state.label}
            </div>
        )
    }
}

export default NavButton;