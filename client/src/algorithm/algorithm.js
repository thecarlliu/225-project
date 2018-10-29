const Algorithm = {

  isFlushDraw: function isFlushDraw(cardSuits) {
      var maxCount = 0;
      for (var i = 0; i < cardSuits.length; i++) {
        var count = 0;
        for (var j = 0; j < cardSuits.length; j++) {
          if (cardSuits[i] === cardSuits[j]) {
            count++;
          }
        }
        if (count > maxCount){
          maxCount = count;
        }
      }
      if (maxCount >= 4) {
        return true;
      }
      return false;
  },

  hasPair: function hasPair(cards) {
    var counts = [];
    for (var i = 0; i <= cards.length; i++) {
        if (counts[cards[i]] === undefined) {
            counts[cards[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
  },

  isOutsideStraightDraw: function isOutsideStraightDraw(cardVals) {
    var hasAce = false;
    var cardVals2 = [];
    cardVals.sort(function(a, b){return a - b});
    if (cardVals.includes(14)) {
      hasAce = true;
      cardVals2 = cardVals;
      cardVals2.unshift(1);
      cardVals2.splice(cardVals2.length - 1);
    }
    var val1 = cardVals[4] - cardVals[0];
    var val2 = cardVals[3] - cardVals[0];
    var val3 = cardVals[4] - cardVals[1];
    var val4 = cardVals2[4] - cardVals2[0];
    var val5 = cardVals2[3] - cardVals2[0];
    var val6 = cardVals2[4] - cardVals2[1];
    if (((val1 === 3 && !hasAce) || (val2 === 3 && !hasAce) || val3 === 3 || (val4 === 3 && !hasAce) || (val5 === 3 && !hasAce) || val6 === 3) || ((val1 === 4 && val2 === 4) || (val1 === 4 && val3 === 4) || (val2 === 4 && val3 === 4)) ||
  ((val4 === 4 && val5 === 4) || (val4 === 4 && val6 === 4) || (val5 === 4 && val6 === 4))) {
      return true;
    }
    return false;
  },

  isInsideStraightDraw: function isInsideStraightDraw(cardVals) {
      var hasAce = false;
      var cardVals2 = [];
    cardVals.sort(function(a, b){return a - b});
    if (cardVals.includes(14)) {
        hasAce = true;
        cardVals2 = cardVals;
      cardVals2.unshift(1);
      cardVals2.splice(cardVals2.length - 1);
    }
    var val1 = cardVals[4] - cardVals[0];
    var val2 = cardVals[3] - cardVals[0];
    var val3 = cardVals[4] - cardVals[1];
    var val4 = cardVals2[4] - cardVals2[0];
    var val5 = cardVals2[3] - cardVals2[0];
    var val6 = cardVals2[4] - cardVals2[1];
    if (val1 === 4 || val2 === 4 || val3 === 4 || val4 === 4 || val5 === 4 || val6 === 4 || (val1 === 3 && hasAce) || (val2 === 3 && hasAce) || (val4 === 3 && !hasAce) || (val5 === 3 && !hasAce)) {
      return true;
    }
    return false;
  },

  countOuts: function countOuts(cards) {
    var cardVals = [];
    var cardSuits = [];
    for (var i = 0; i < cards.length; i++) {
      var cardRank = cards[i].slice(0,1);
      var cardSuit = cards[i].slice(1);
      cardSuits.push(cardSuit);
      if (cardRank === "A") {
        cardVals.push(14);
      } else if (cardRank === "K") {
        cardVals.push(13);
      } else if (cardRank === "Q") {
        cardVals.push(12);
      } else if (cardRank === "J") {
        cardVals.push(11);
      } else {
        cardVals.push(Number(cardRank));
      }
    }

    var flushDraw = this.isFlushDraw(cardSuits);
    var insideStraightDraw = this.isInsideStraightDraw(cardVals);
    var outsideStraightDraw = this.isOutsideStraightDraw(cardVals);
    if (outsideStraightDraw && flushDraw) {
      return 15;
    } else if (insideStraightDraw && flushDraw) {
      return 12;
    } else if (outsideStraightDraw) {
      return 8;
    } else if (insideStraightDraw) {
      return 4;
    } else if (flushDraw){
      return 9;
    } else {
      return 0;
    }
  }

};

export default Algorithm
