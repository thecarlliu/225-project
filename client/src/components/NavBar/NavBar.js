import React, {Component} from "react";
import NavButton from "../NavButton";

class NavBar extends Component {

    render() {
        return (
            <div className="secondaryBg" style={{height:"45px", position: "fixed", left: 0, width: "100%", boxShadow: "0px 0px 1px 0px #08415C"}}>
                <button className="primaryBg" style={{position: "absolute", left:"20px", width: "120px", height:"45px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px"}}>
                    <NavButton label={"About"} route={"/about"}/>
                </button>
                <button className="primaryBg" style={{position: "absolute", left:0, right:0, margin: "auto", width: "120px", height: "45px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px"}}>
                    <NavButton label={"Home"} route={"/home"}/>
                </button>
                <button className="primaryBg" style={{position: "absolute", right:"20px", width: "120px", height:"45px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px"}}>
                    <NavButton label={"Rules"} route={"/rules"}/>
                </button>
            </div>
        )
    }
}

export default NavBar;