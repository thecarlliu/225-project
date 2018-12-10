import React, {Component} from "react";

/**
 * Navigates back to a page
 * @param e event triggering page change
 * @param route page going to
 */
export const changePage = (e, route) => {
    e.preventDefault();
    window.location.href = route;
};

class NavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontColor: "#08415C"
        }
    };

    setFontWhite = () => {
        this.setState({fontColor: "white"});
    };
    setFontBlue = () => {
        this.setState({fontColor: "#08415C"});
    };

    render() {
        return(
            <div style={{fontFamily: "Georgia", fontSize: "xx-large", textAlign: "center"}}
                 onClick={(e)=>{changePage(e, this.props.route)}}
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