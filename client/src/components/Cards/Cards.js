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
                        <div style={{display:"flex",
                            margin:"auto",
                            borderStyle:"solid",
                            borderColor:"blue",
                            height:75,
                            width:50}}>
                            <p style={{margin:"auto", textAlign:"center"}}>{card}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}


export default Cards;