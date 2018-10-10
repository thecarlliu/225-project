import React, { Component } from "react";

//The Cards class is responsible for rendering the community cards and the hole cards.
class Cards extends Component {

    constructor(props){
        super(props);
        this.state= {
            userHand: this.props.userHand
        };
    }


    render (){
        return (
            <div>
                {
                    this.state.userHand.map((card)=>(
                        <div style={}> {card} </div>
                    ))
                }
            </div>
        )
    }
}

export default Cards;