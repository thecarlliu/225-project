import React, {Component} from "react";

class NavButton extends Component {
    constructor(props) {
        super(props);
    };

    changePage(e, route) {
        e.preventDefault();
        window.location.href = route;
    }

    render() {
        return(
            <div style={{fontFamily: "Georgia", fontSize: "xx-large", textAlign: "center"}} onClick={(e)=>{this.changePage(e, this.props.route)}}>
                <a className="secondaryFont" style={{textDecoration: "none"}} href={this.props.route}><b>{this.props.label}</b></a>
            </div>
        )
    }
}

export default NavButton;