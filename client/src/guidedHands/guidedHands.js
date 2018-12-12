import listHands from "./listHands";

const guidedHands = function() {
    let list = listHands[Math.floor(Math.random()*listHands.length)];
    let hand = list[Math.floor(Math.random()*3)];
    return hand;
};

export default guidedHands;