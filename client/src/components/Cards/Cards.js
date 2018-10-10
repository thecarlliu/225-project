import React, { Component } from "react";

//The Cards class is responsible for rendering the community cards and the hole cards.
class Cards extends Component {

    constructor(props){
        super(props);
        this.state= {
            userHand: this.props.userHand,
            flop: this.props.flop
        };

    }

    render (){
        return (
            <div>
                <div style={{display:"flex",
                    margin:"auto",
                    borderStyle:"dashed",
                    borderColor:"blue",
                    backgroundColor:"grey",
                    position:"absolute",
                    height:120,
                    width:180,
                    bottom: 30,
                    right: 0,
                    left: 0}}>
                    {
                        this.state.userHand.map((card)=>(
                            <div style={{display:"flex",
                                margin:"auto",
                                borderStyle:"solid",
                                borderColor:"blue",
                                backgroundColor:"white",
                                height:90,
                                width:60}}>
                                <p style={{margin:"auto", textAlign:"center"}}>{card}</p>
                            </div>
                        ))
                    }
                </div>
                <div style={{display:"flex",
                    margin:"auto",
                    borderStyle:"dashed",
                    borderColor:"blue",
                    backgroundColor:"grey",
                    height:150,
                    width:300,
                    position:"absolute",
                    bottom: "40%",
                    right: 0,
                    left: 0
                }}>
                    {
                        this.state.flop.map((card)=>(
                            <div style={{display:"flex",
                                margin:"auto",
                                borderStyle:"solid",
                                borderColor:"blue",
                                backgroundColor:"white",
                                height:120,
                                width:80}}>
                                <p style={{margin:"auto", textAlign:"center"}}>{card}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default Cards;