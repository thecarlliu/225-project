import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
    render() {
        return (
            <div className={"app-container"} style={{backgroundColor:"#98FFBA", height:"700px", width:"100%"}}>
                <Routes />
            </div>
        )
    }
}

export default App;