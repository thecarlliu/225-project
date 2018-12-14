import React, {Component} from "react";
import NavBar from "../../components/NavBar";

const header = {margin: "auto", textAlign:"center", fontFamily: "Georgia"};
const para = {margin: "auto", textAlign:"left", width:"75%",fontFamily: "Georgia"};
const divvy = {padding: "10px", display: "block", position:"absolute"};

const primary = "#207CA8";
const secondary = "#08415C";



class Rules extends Component {

  constructor(props){
      super(props);
      this.state = {
          flushShowing:"none",
          flushFont: secondary,
          flushButCol: primary,

          inStraightShowing:"none",
          inFont: secondary,
          inButCol: primary,

          outStraightShowing:"none",
          outFont: secondary,
          outButCol: primary,

          setShowing:"none",
          setFont: secondary,
          setButCol: primary,

          twoPairShowing:"none",
          twoPairFont: secondary,
          twoPairButCol: primary,

          onePairShowing:"none",
          onePairFont: secondary,
          onePairButCol: primary,

          noPairShowing:"none",
          noPairFont: secondary,
          noPairButCol: primary,
      }
  };

  flushButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'block'});
      this.setState({flushButCol: secondary});
      this.setState({flushFont: primary});

      this.setState({outStraightShowing:'none'});
      this.setState({ outButCol: primary});
      this.setState({outFont: secondary});

      this.setState({inStraightShowing:'none'});
      this.setState({inButCol: primary});
      this.setState({inFont: secondary});

      this.setState({setShowing:'none'});
      this.setState({setButCol: primary});
      this.setState({setFont: secondary});

      this.setState({twoPairShowing:"none"});
      this.setState({twoPairFont: secondary});
      this.setState({twoPairButCol: primary});

      this.setState({onePairShowing:"none"});
      this.setState({onePairFont: secondary});
      this.setState({onePairButCol: primary});

      this.setState({noPairShowing:"none"});
      this.setState({noPairFont: secondary});
      this.setState({noPairButCol: primary});
  };

  outsideButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({flushButCol: primary});
      this.setState({flushFont: secondary});

      this.setState({inStraightShowing:'none'});
      this.setState({inButCol: primary});
      this.setState({inFont: secondary});

      this.setState({outStraightShowing:'block'});
      this.setState({ outButCol: secondary});
      this.setState({outFont: primary});

      this.setState({setShowing:'none'});
      this.setState({setButCol: primary});
      this.setState({setFont: secondary});

      this.setState({twoPairShowing:"none"});
      this.setState({twoPairFont: secondary});
      this.setState({twoPairButCol: primary});

      this.setState({onePairShowing:"none"});
      this.setState({onePairFont: secondary});
      this.setState({onePairButCol: primary});

      this.setState({noPairShowing:"none"});
      this.setState({noPairFont: secondary});
      this.setState({noPairButCol: primary});
  };

  insideButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({flushButCol: primary});
      this.setState({flushFont: secondary});

      this.setState({inStraightShowing:'block'});
      this.setState({inButCol: secondary});
      this.setState({inFont: primary});

      this.setState({outStraightShowing:'none'});
      this.setState({ outButCol: primary});
      this.setState({outFont: secondary});

      this.setState({setShowing:'none'});
      this.setState({setButCol: primary});
      this.setState({setFont: secondary});

      this.setState({twoPairShowing:"none"});
      this.setState({twoPairFont: secondary});
      this.setState({twoPairButCol: primary});

      this.setState({onePairShowing:"none"});
      this.setState({onePairFont: secondary});
      this.setState({onePairButCol: primary});

      this.setState({noPairShowing:"none"});
      this.setState({noPairFont: secondary});
      this.setState({noPairButCol: primary});
  };


  setButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({flushButCol: primary});
      this.setState({flushFont: secondary});

      this.setState({inStraightShowing:'none'});
      this.setState({inButCol: primary});
      this.setState({inFont: secondary});

      this.setState({outStraightShowing:'none'});
      this.setState({outButCol: primary});
      this.setState({outFont: secondary});

      this.setState({setShowing:'block'});
      this.setState({setButCol: secondary});
      this.setState({setFont: primary});

      this.setState({twoPairShowing:"none"});
      this.setState({twoPairFont: secondary});
      this.setState({twoPairButCol: primary});

      this.setState({onePairShowing:"none"});
      this.setState({onePairFont: secondary});
      this.setState({onePairButCol: primary});

      this.setState({noPairShowing:"none"});
      this.setState({noPairFont: secondary});
      this.setState({noPairButCol: primary});
  };

  twoPairButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({flushButCol: primary});
      this.setState({flushFont: secondary});

      this.setState({inStraightShowing:'none'});
      this.setState({inButCol: primary});
      this.setState({inFont: secondary});

      this.setState({outStraightShowing:'none'});
      this.setState({outButCol: primary});
      this.setState({outFont: secondary});

      this.setState({setShowing:'none'});
      this.setState({setButCol: primary});
      this.setState({setFont: secondary});

      this.setState({twoPairShowing:"block"});
      this.setState({twoPairFont: primary});
      this.setState({twoPairButCol: secondary});

      this.setState({onePairShowing:"none"});
      this.setState({onePairFont: secondary});
      this.setState({onePairButCol: primary});

      this.setState({noPairShowing:"none"});
      this.setState({noPairFont: secondary});
      this.setState({noPairButCol: primary});
  };

  onePairButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({flushButCol: primary});
      this.setState({flushFont: secondary});

      this.setState({inStraightShowing:'none'});
      this.setState({inButCol: primary});
      this.setState({inFont: secondary});

      this.setState({outStraightShowing:'none'});
      this.setState({outButCol: primary});
      this.setState({outFont: secondary});

      this.setState({setShowing:'none'});
      this.setState({setButCol: primary});
      this.setState({setFont: secondary});

      this.setState({twoPairShowing:"none"});
      this.setState({twoPairFont: secondary});
      this.setState({twoPairButCol: primary});

      this.setState({onePairShowing:"block"});
      this.setState({onePairFont: primary});
      this.setState({onePairButCol: secondary});

      this.setState({noPairShowing:"none"});
      this.setState({noPairFont: secondary});
      this.setState({noPairButCol: primary});
  };

  noPairButton=(e) =>{
      e.preventDefault();
      this.setState({flushShowing:'none'});
      this.setState({flushButCol: primary});
      this.setState({flushFont: secondary});

      this.setState({inStraightShowing:'none'});
      this.setState({inButCol: primary});
      this.setState({inFont: secondary});

      this.setState({outStraightShowing:'none'});
      this.setState({outButCol: primary});
      this.setState({outFont: secondary});

      this.setState({setShowing:'none'});
      this.setState({setButCol: primary});
      this.setState({setFont: secondary});

      this.setState({twoPairShowing:"none"});
      this.setState({twoPairFont: secondary});
      this.setState({twoPairButCol: primary});

      this.setState({onePairShowing:"none"});
      this.setState({onePairFont: secondary});
      this.setState({onePairButCol: primary});

      this.setState({noPairShowing:"block"});
      this.setState({noPairFont: primary});
      this.setState({noPairButCol: secondary});
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



  setSetFontWhite = () => {
    if(this.state.setButCol === primary){
      this.setState({setFont: "white"});
    }
  };
  setSetFontBlue = () => {
    if(this.state.setButCol === primary){
      this.setState({setFont: secondary});
    }
    else{
        this.setState({setFont: primary});
    }
  };



  setTwoPairFontWhite = () => {
    if(this.state.twoPairButCol === primary){
      this.setState({twoPairFont: "white"});
    }
  };
  setTwoPairFontBlue = () => {
    if(this.state.twoPairButCol === primary){
      this.setState({twoPairFont: secondary});
    }
    else{
        this.setState({twoPairFont: primary});
    }
  };



  setOnePairFontWhite = () => {
    if(this.state.onePairButCol === primary){
      this.setState({onePairFont: "white"});
    }
  };
  setOnePairFontBlue = () => {
    if(this.state.onePairButCol === primary){
      this.setState({onePairFont: secondary});
    }
    else{
        this.setState({onePairFont: primary});
    }
  };



  setNoPairFontWhite = () => {
    if(this.state.noPairButCol === primary){
      this.setState({noPairFont: "white"});
    }
  };
  setNoPairFontBlue = () => {
    if(this.state.noPairButCol === primary){
      this.setState({noPairFont: secondary});
    }
    else{
        this.setState({noPairFont: primary});
    }
  };

    render() {
        return (
            <div>
                <div style={{position: "absolute", top: "50px", color: "white"}}>
                    <div style={{padding:"15px"}}>
                        <h1 style={header}>Rules</h1>
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

                    <div  style={{position: "absolute", top: "400px", width:"100%", display:this.state.flushShowing}}>
                        <p style={para}>
                            <h3><i><b>Flush Draw:</b></i></h3> A flush draw
                            is a hand with four cards of the same suit that may improve
                            to a flush. There are 13 cards of a given suit in a deck of cards,
                            but to have a draw you are using 4 of the same suit, therefore you have
                            9 outs. See example below for a flush draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/CH.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/3C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/8H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "400px", width:"100%", display:this.state.inStraightShowing}}>
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

                    <div style={{position: "absolute", top: "400px", width: "100%", display:this.state.outStraightShowing}}>
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

                    <div style={{position: "absolute", top: "400px", width: "100%", display:this.state.setShowing}}>
                        <p style={para}>
                            <h3><i><b>Set:</b></i></h3>
                            If a player has 3-of-a-kind, there will be possibilities to get either a full house or a four-of-a-kind
                            on the next card. There are six full house outs (three for each card that isn't in the set) and
                            one four-of-a-kind out, making seven outs when you have a set.
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/CC.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5D.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "400px", width: "100%", display:this.state.twoPairShowing}}>
                        <p style={para}>
                            <h3><i><b>Two Pair:</b></i></h3>
                            If a player has 2 pair, there will be possibilities to get a full house
                            on the next card. There are 4 full house outs (2 for each card that isn't in the set),
                            making six outs when you have two pair.
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/CC.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/CD.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "400px", width: "100%", display:this.state.onePairShowing}}>
                        <p style={para}>
                            <h3><i><b>One Pair:</b></i></h3>
                            If a player has one pair, there will be possibilities to get two pairs
                            on the next card. There are 6 outs to get a 2 Pair (3 for top two cards not in the pair)
                            and 2 outs for a set, making eight outs when you have one pair.
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/CC.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10S.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/KS.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "400px", width: "100%", display:this.state.noPairShowing}}>
                        <p style={para}>
                            <h3><i><b>No Pair:</b></i></h3>
                            If a player has no pair, there will be possibilities to get one pair
                            on the next card (for the top two available cards). There are 6 outs to get a pair (3 for top two cards),
                            making six outs when you have no pair.
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/4H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/CC.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10S.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/KS.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>
                </div>

                <div style={{left:0, right:0, margin:"auto", position:"absolute", width:"100%", height:"50px"}}>
                    //flush button
                    <button style={{left:400, right:0, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", lineHeight:"25px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.flushButCol}}
                            onClick={(e) => {this.flushButton(e)}}
                            onMouseEnter={this.setFlushFontWhite}
                            onMouseLeave={this.setFlushFontBlue}>
                        <div style={{fontFamily: "Georgia", fontSize: "xx-large", textAlign: "center"}}>
                            <p style={{textDecoration: "none", color: this.state.flushFont}}><b>Flush</b></p>
                        </div>
                    </button>

                    //inside straight button
                    <button style={{left:0, right:400, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.inButCol}}
                            onClick={(e) => {this.insideButton(e)}}
                            onMouseEnter={this.setInFontWhite}
                            onMouseLeave={this.setInFontBlue}>
                          <div style={{fontFamily: "Georgia", fontSize: "large", textAlign: "center"}}>
                            <p style={{color: this.state.inFont}}><b>Inside Straight</b></p>
                        </div>
                    </button>

                    //outside straight button
                    <button onMouseEnter={this.setOutFontWhite}  onMouseLeave={this.setOutFontBlue}
                            style={{left:0, right:0, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.outButCol}}
                            onClick={(e) => {this.outsideButton(e)}}>
                        <div style={{fontFamily: "Georgia", fontSize: "large", textAlign: "center"}}>
                            <p style={{textDecoration: "none", color: this.state.outFont}}><b>Outside Straight</b></p>
                        </div>
                    </button>

                    //set draw button
                    <button onMouseEnter={this.setSetFontWhite}  onMouseLeave={this.setSetFontBlue}
                            style={{left:800, right:0, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", lineHeight:"25px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.setButCol}}
                            onClick={(e) => {this.setButton(e)}}>
                        <div style={{fontFamily: "Georgia", fontSize: "xx-large", textAlign: "center"}}>
                            <p style={{textDecoration: "none", color: this.state.setFont}}><b>Set</b></p>
                        </div>
                    </button>

                    //two pair button
                    <button onMouseEnter={this.setTwoPairFontWhite}  onMouseLeave={this.setTwoPairFontBlue}
                            style={{left:0, right:800, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", lineHeight:"25px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.twoPairButCol}}
                            onClick={(e) => {this.twoPairButton(e)}}>
                        <div style={{fontFamily: "Georgia", fontSize: "x-large", textAlign: "center"}}>
                            <p style={{textDecoration: "none", color: this.state.twoPairFont}}><b>Two Pair</b></p>
                        </div>
                    </button>

                    //one pair button
                    <button onMouseEnter={this.setOnePairFontWhite}  onMouseLeave={this.setOnePairFontBlue}
                            style={{left:1200, right:0, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", lineHeight:"25px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.onePairButCol}}
                            onClick={(e) => {this.onePairButton(e)}}>
                        <div style={{fontFamily: "Georgia", fontSize: "x-large", textAlign: "center"}}>
                            <p style={{textDecoration: "none", color: this.state.onePairFont}}><b>One Pair</b></p>
                        </div>
                    </button>

                    //no pair button
                    <button onMouseEnter={this.setNoPairFontWhite}  onMouseLeave={this.setNoPairFontBlue}
                            style={{left:0, right:1200, margin:"auto", position:"absolute", display:"block", top:"350px", width: "150px", height:"80px", lineHeight:"25px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", backgroundColor:this.state.noPairButCol}}
                            onClick={(e) => {this.noPairButton(e)}}>
                        <div style={{fontFamily: "Georgia", fontSize: "x-large", textAlign: "center"}}>
                            <p style={{textDecoration: "none", color: this.state.noPairFont}}><b>No Pair</b></p>
                        </div>
                    </button>
                </div>
                <NavBar />
            </div>
        )
    }
}

export default Rules;
