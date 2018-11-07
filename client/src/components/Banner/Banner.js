import React, {Component} from "react";

class Banner extends Component {
    render() {
        return (
            <div style={{position: "fixed", top: 200, left: 0, right: 0, margin: "auto", width: 200}}>
                Welcome to Texas Goat'Em!<br/>
                <a href={"/game"} >Play Game</a><br/>
                <a href={"/practice"} >Practice!</a>
            </div>
        )
    }
}

export default Banner;