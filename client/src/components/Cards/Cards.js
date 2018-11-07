import React, { Component } from "react";

//The Cards class is responsible for rendering the community cards and the hole cards.
class Cards extends Component {

    constructor(props){
        super(props);

    }

    render (){
        return (
            <div>
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
                    <img src={"images/table.png"} width={600} height={400}/>
                    <div style={{display:"flex",
                        margin:"auto",
                        height:400,
                        width:600,
                        position:"fixed",
                        top: 200,
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
                                            height:120,
                                            width:80
                                        }}>
                                            <img src={"/images/cardBack.png"} width={80} height={120}/>
                                        </div>
                                    )
                                }
                                else {

                                    return (
                                        <div style={{
                                            display:"block",
                                            margin:"10px",
                                            height:120,
                                            width:80
                                        }}>
                                            <img src={"images/"+card+".png"} width={80} height={120}/>
                                        </div>
                                    )
                                }
                            })
                        }
                    </div>
                </div>


                <div style={{
                    display:"flex",
                    margin:"auto",
                    position:"fixed",
                    right: 0,
                    left: 0,
                    height: 120,
                    width: 180,
                    top: 360
                }}>
                    {
                        this.props.userHand.map((card) => {
                            if (card === "") {
                                return (
                                    <div style={{
                                        display: "block",
                                        margin: "auto",
                                        height: 90,
                                        width: 60
                                    }}>
                                        <img src={"/images/cardBack.png"} width={60} height={90}/>
                                    </div>
                                )
                            }
                            else {
                                return (
                                    <div style={{
                                        display: "block",
                                        margin: "auto",
                                        height: 90,
                                        width: 60
                                    }}>
                                        <img src={"/images/"+card+".png"} width={60} height={90}/>
                                    </div>
                                )
                            }
                        })
                    }
                </div>
            </div>
        )

    }


}




export default Cards;