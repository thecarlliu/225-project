import React, {Component} from "react";
import NavButton from "../NavButton";

class NavBar extends Component {
    render() {
        return (
            <div style={{backgroundColor:"#FFE6BA", height:"30px", width:"100%"}}>
                <NavButton left={"5%"} label={"About"} route={"/about"}/>
                <NavButton left={"95%"} label={"Rules"} route={"/rules"}/>
            </div>
        )
    }
}

export default NavBar;