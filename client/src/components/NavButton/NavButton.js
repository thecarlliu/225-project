import React, {Component} from "react";

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontColor: "#08415C"
        }
    };

    changePage(e, route) {
        e.preventDefault();
        window.location.href = route;
    }

    setFontWhite = () => {
        this.setState({fontColor: "white"});
    };
    setFontBlue = () => {
        this.setState({fontColor: "#08415C"});
    };

    render() {
        return(
            <div style={{fontFamily: "Georgia", fontSize: "xx-large", textAlign: "center"}}
                 onClick={(e)=>{this.changePage(e, this.props.route)}}
                 onMouseEnter={this.setFontWhite}
                 onMouseLeave={this.setFontBlue}>
                <a style={{textDecoration: "none", color: this.state.fontColor}}
                   href={this.props.route}>
                    <b>{this.props.label}</b>
                </a>
            </div>
        )
    }
}

export default NavButton;