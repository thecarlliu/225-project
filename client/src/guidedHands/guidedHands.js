import listHands from "./listHands";

const guidedHands = function() {
    return listHands[Math.floor(Math.random()*listHands.length)];
};

export default guidedHands;