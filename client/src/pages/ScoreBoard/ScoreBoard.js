import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Scoreboard from "../../components/Scoreboard";

class ScoreBoard extends Component {

    changePage(e, route) {
        e.preventDefault();
        window.location.href = route;
    }

    render () {
        return (
            <div>
                <NavBar/>
                <Scoreboard/>
                    <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 60, left: 475, margin: "auto"}}
                            onClick={(e) => {this.changePage(e, "/game")}}>Try again
                    </button>
                    <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 60, right: 475, margin: "auto"}}
                            onClick={(e) => {this.changePage(e, "/home")}}>Return Home
                    </button>
            </div>
        )
    }
}

export default ScoreBoard;