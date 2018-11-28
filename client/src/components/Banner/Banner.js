import React, {Component} from "react";
import NavButton from "../../components/NavButton";

class Banner extends Component {
    render() {
        return (
            <div style={{position: "fixed", top: 50, left: 0, right: 0, margin: "auto", width: 600, height:400}}>
                <img src={"images/goatEmLogo.png"} height={400} width={600}/><br/>
                <div style={{position: "fixed", width: 200, height: 200, top: 180, left:480, right:0, margin:"auto"}}>
                    <img src={"images/goatHead.png"} height={200} width={200}/>
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