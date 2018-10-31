import React, {Component} from "react";

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: this.props.route,
            label: this.props.label,
            left: this.props.left
        }
    }

    changePage(e, route) {
        e.preventDefault();
        window.location.href = route;
    }

    render() {
        return(
            <div style={{
                width:"50px",
                display:"inline-block",
                position:"absolute",
                left: this.state.left,
                top: "15px"
            }} onClick={(e)=>{this.changePage(e, this.state.route)}}>
                {this.state.label}
            </div>
        )
    }
}

export default NavButton;