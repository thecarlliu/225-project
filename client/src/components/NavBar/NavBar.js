import React, {Component} from "react";
import NavButton from "../NavButton";

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavButton label={"About"} route={"/about"}/>
                <NavButton label={"Rules"} route={"/rules"}/>
            </div>
        )
    }
}

export default NavBar;