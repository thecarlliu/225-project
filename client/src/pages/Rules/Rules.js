import React, {Component} from "react";
import NavBar from "../../components/NavBar";

const header = {margin: "auto", textAlign:"center"};
const para = {margin: "auto", textAlign:"left", width:"75%"};
const divvy = {padding: "10px", display: "block", position:"absolute"};

const primary = "#207CA8";
const secondary = "#08415C";



class Rules extends Component {

  constructor(props){
      super(props);
      this.state = {
          flushShowing:"none",
          inStraightShowing:"none",
          outStraightShowing:"none",
          flushFont: secondary,
          inFont: secondary,
          outFont: secondary,
          flushButCol: primary,
          inButCol: primary,
          outButCol: primary
      }
  };

  flushButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'block'});
      this.setState({inStraightShowing:'none'});
      this.setState({outStraightShowing:'none'});

      this.setState({flushButCol: secondary});
      this.setState({inButCol: primary});
      this.setState({ outButCol: primary});

      this.setState({flushFont: primary});
      this.setState({inFont: secondary});
      this.setState({outFont: secondary});
  };

  outsideButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({inStraightShowing:'none'});
      this.setState({outStraightShowing:'block'});

      this.setState({flushButCol: primary});
      this.setState({inButCol: primary});
      this.setState({ outButCol: secondary});

      this.setState({flushFont: secondary});
      this.setState({inFont: secondary});
      this.setState({outFont: primary});
  };

  insideButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({inStraightShowing:'block'});
      this.setState({outStraightShowing:'none'});

      this.setState({flushButCol: primary});
      this.setState({inButCol: secondary});
      this.setState({ outButCol: primary});

      this.setState({flushFont: secondary});
      this.setState({inFont: primary});
      this.setState({outFont: secondary});
  };

  setFlushFontWhite = () => {
    if(this.state.flushButCol === primary){
      this.setState({flushFont: "white"});
    }
  };
  setFlushFontBlue = () => {
    if(this.state.flushButCol === primary){
      this.setState({flushFont: secondary});
    }
    else{
        this.setState({flushFont: primary});
    }

  };

  setInFontWhite = () => {
    if(this.state.inButCol === primary){
      this.setState({inFont: "white"});
    }
  };
  setInFontBlue = () => {
    if(this.state.inButCol === primary){
      this.setState({inFont: secondary});
    }
    else{
        this.setState({inFont: primary});
    }
  };

  setOutFontWhite = () => {
    if(this.state.outButCol === primary){
      this.setState({outFont: "white"});
    }
  };
  setOutFontBlue = () => {
    if(this.state.outButCol === primary){
      this.setState({outFont: secondary});
    }
    else{
        this.setState({outFont: primary});
    }
  };

    render() {
        return (
            <div>

                <div style={{position: "absolute", top: "50px", color: "white"}}>
                    <div style={{padding:"15px"}}>
                        <h1 style={header}>RULES</h1>
                        <p style={para}> You are dealt two cards and shown the flop. Based on the cards in your hand, count the number of outs
                            you have. Enter the number of outs into the input box. If you answered correctly, your score will
                            increase and you will be dealt another hand and shown a different flop. If not, the game ends. The
                            more you answer correctly, the higher your score will get. But be careful -- as you keep answering
                            correctly, you will also have less time to answer.</p>
                    </div>
                    <div style={{padding:"15px"}}>
                        <h2 style={header}>What is an Out?</h2>
                        <br/>
                        <p style={para}>
                            In a poker game with more than one betting round,
                            an out is any unseen card that, if drawn, will improve
                            a player's hand to one that is likely to win. Knowing the
                            number of outs a player has is an important part of poker strategy.
                        </p>
                        <br/>
                        <h2 style={header}>Types of Outs:</h2>
                    </div>

                    <br/><br/>


                    <div  style={{position: "absolute", top: "350px", width:"100%", display:this.state.flushShowing}}>
                        <p style={para}>
                            <h3><i><b>Flush Draw:</b></i></h3> A flush draw
                            is a hand with four cards of the same suit that may improve
                            to a flush. There are 13 cards of a given suit in a deck of cards,
                            but to have a draw you are using 4 of the same suit, therefore you have
                            9 outs. See example below for a flush draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/AH.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/3C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/8H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "350px", width:"100%", display:this.state.inStraightShowing}}>
                        <p style={para}>
                          <h3><i><b>Inside Straight Draw:</b></i></h3> An inside straight draw inspect
                            a hand with four of the five cards needed for a straight,
                            but missing one in the middle. You are missing one possible card to give
                            you a straight, and this card appears in the deck four times, (one per suit)
                            so you have four outs. See example below for an inside straight draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/3H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/4S.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/7C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/JD.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "350px", width: "100%", display:this.state.outStraightShowing}}>
                        <p style={para}>
                            <h3><i><b>Outside Straight Draw:</b></i></h3> An outside straight draw
                            is a hand with four of the five needed cards in sequence
                            (and could be completed on either end) that may improve to a straight.
                            Because you have two different numbers that could complete a straight,
                            and because there are four of each number in a deck, this gives you
                            eight outs. See example below for an outside straight draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/6C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/7C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/8H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/2D.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>
                </div>

                <div style={{left:0, right:0, margin:"auto", position:"absolute", width:"75%", height:"50px"}}>
                    <button style={{left:400, right:0, margin:"auto", position:"fixed", display:"block", top:"350px", width: "150px", height:"80px", lineHeight:"25px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.flushButCol}}>
                        <div onClick={(e) => {this.flushButton(e)}}
                            style={{fontFamily: "Georgia", fontSize: "xx-large", textAlign: "center"}}
                            onMouseEnter={this.setFlushFontWhite}
                            onMouseLeave={this.setFlushFontBlue}>
                            <p style={{textDecoration: "none", color: this.state.flushFont}}><b>Flush</b></p>
                        </div>
                    </button>

                    <button style={{left:0, right:400, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.inButCol}}>
                          <div onClick={(e) => {this.insideButton(e)}}
                              style={{fontFamily: "Georgia", fontSize: "large", textAlign: "center"}}
                              onMouseEnter={this.setInFontWhite}
                              onMouseLeave={this.setInFontBlue}>
                            <p style={{color: this.state.inFont}}><b>Inside Straight</b></p>
                        </div>
                    </button>

                    <button style={{left:0, right:0, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.outButCol}}>
                        <div onClick={(e) => {this.outsideButton(e)}}
                            style={{fontFamily: "Georgia", fontSize: "large", textAlign: "center"}}
                            onMouseEnter={this.setOutFontWhite}
                            onMouseLeave={this.setOutFontBlue}>
                            <p style={{textDecoration: "none", color: this.state.outFont}}><b>Outside Straight</b></p>
                        </div>
                    </button>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default Rules;
