import React, { Component } from "react";
import NavBar from "../../components/NavBar";
import Banner from "../../components/Banner";

class Home extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <Banner />
            </div>
        )
    }
}

export default Home;