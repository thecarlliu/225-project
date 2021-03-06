import React, {Component} from "react";
import NavButton from "../../components/NavButton";

/**
 * Sets up home page with logo and buttons to practice or play the regular game
 */
class Banner extends Component {
    render() {
        return (
            <div style={{position: "fixed", top: 50, left: 0, right: 0, margin: "auto", width: 600, height:400}}>
                <img src={"images/goatEmLogo.png"} height={400} width={600}/><br/>
                <div style={{position: "fixed", width: 200, height: 200, top: 200, left:125, right:0, margin:"auto"}}>
                    <img src={"images/goatHead.png"} height={160} width={160}/>
                </div>
                <button className="primaryBg" style={{position: "absolute", top:400, left: 0, right: 0, margin: "auto", width: "300px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", height:"45px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight:"40px"}}>
                    <NavButton label={"Practice First!"} route={"/practice"}/>
                </button>
                <button className="primaryBg" style={{position: "absolute", top:450, left: 0, right: 0, margin: "auto", width: "300px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", height:"45px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight:"40px"}}>
                    <NavButton label={"Play Game"} route={"/game"}/>
                </button>
            </div>
        )
    }
}

export default Banner;
