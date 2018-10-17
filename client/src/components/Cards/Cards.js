import React, { Component } from "react";


const cardStyle = {
    display:"flex",
    margin:"auto",
    borderStyle:"dashed",
    borderColor:"blue",
    backgroundColor:"grey",
    position:"absolute",
    right: 0,
    left: 0
};

//The Cards class is responsible for rendering the community cards and the hole cards.
class Cards extends Component {

    constructor(props){
        super(props);

    }

    render (){
        return (
            <div>
                <div style={{
                    display:"flex",
                    margin:"auto",
                    borderStyle:"dashed",
                    borderColor:"blue",
                    backgroundColor:"grey",
                    position:"fixed",
                    right: 0,
                    left: 0,
                    height: 120,
                    width: 180,
                    top: 550
                }}>
                    {
                        this.props.userHand.map((card)=>(
                            <div style={{display:"block",
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
                    borderStyle:"solid",
                    borderColor:"black",
                    backgroundColor:"green",
                    height:275,
                    width:400,
                    position:"fixed",
                    top: 250,
                    right: 0,
                    left: 0,
                    borderRadius: "100%"
                }}>
                    {
                        this.props.flop.map((card)=>(
                            <div style={{display:"block",
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