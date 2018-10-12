import React, {Component} from "react";

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: this.props.route,
            label: this.props.label
        }
    }

    changePage(e, route) {
        e.preventDefault();
        window.location.href = route;
    }

    render() {
        return(
            <div onClick={(e)=>{this.changePage(e, this.state.route)}}>
                {this.state.label}
            </div>
        )
    }
}

export default NavButton;