import React, { Component } from "react";
import cardBack from "../../images/cardBack.png";
import table from "../../images/table.png";

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
                        this.props.userHand.map((card) => {
                            if (card === "") {
                                return (
                                    <div style={{
                                        display: "block",
                                        margin: "auto",
                                        borderStyle: "solid",
                                        borderColor: "blue",
                                        backgroundColor: "white",
                                        height: 90,
                                        width: 60
                                    }}>
                                        <img src={cardBack} width={60} height={90}/>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div style={{
                                        display: "block",
                                        margin: "auto",
                                        borderStyle: "solid",
                                        borderColor: "blue",
                                        backgroundColor: "white",
                                        height: 90,
                                        width: 60
                                    }}>
                                        <p style={{margin: "auto", textAlign: "center"}}>{card}</p>
                                    </div>
                                )
                            }
                        })
                    }
                    </div>





                <div style={{display:"flex",
                    margin:"auto",
                    height:400,
                    width:600,
                    position:"fixed",
                    top: 100,
                    right: 0,
                    left: 0,
                    borderRadius: "100%"
                }}>
                    <img src={table} width={600} height={400}/>
                    <div style={{display:"flex",
                        margin:"auto",
                        height:400,
                        width:600,
                        position:"fixed",
                        top: 225,
                        right: 0,
                        left: 300,
                        borderRadius: "100%"
                    }}>
                        {
                            this.props.flop.map((card)=>{
                                if (card === "") {
                                    return (
                                        <div style={{
                                            display:"block",
                                            margin:"10px",
                                            backgroundColor:"white",
                                            height:120,
                                            width:80
                                        }}>
                                            <img src={cardBack} width={80} height={120}/>
                                        </div>
                                    )
                                }
                                else {
                                    return (
                                        <div style={{
                                            display:"block",
                                            margin:"10px",
                                            borderStyle:"solid",
                                            borderColor:"blue",
                                            backgroundColor:"white",
                                            height:120,
                                            width:80
                                        }}>
                                            <p style={{margin:"auto", textAlign:"center"}}>{card}</p>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>
            </div>
        )

    }


}




export default Cards;