
  isFlushDraw: function isFlushDraw(cardSuits) {
    cardSuits.sort();
    var maxCount = 1;
    for (var i = 0; i < cardSuits.length; i++) {
      cardSuits[i] === cardSuits[i - 1] ? maxCount++ : maxCount = 1;
    }
    return (maxCount >= 4 ? true : false);
  },

//thanks internet for this one (mostly)
  removeDups: function removeDups(cardVals) {
    cardVals.sort()
    var unique = {};
    cardVals.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  aceHandler: function aceHandler(cardVals) {
    var hasAce = false;
    var cardVals2 = [];
    if (cardVals.includes(14)) {
      hasAce = true;
      cardVals2 = cardVals.slice(0);
      cardVals2.unshift(1);
      cardVals2.splice(cardVals2.length - 1);
    }
    return cardVals2;
  }

  isOutsideStraightDraw: function isOutsideStraightDraw(cardVals) {
    cardVals.sort(function(a, b){return a - b});
    var hasAce = false;
    var cardVals2 = aceHandler(cardVals);

    if (cardVals2.length != 0) {
      hasAce = true;
    }

    cardVals = removeDups(cardVals);
    cardVals2 = removeDups(cardVals2);

    if (cardVals.length < 4) {
      return false;
    } else if (cardVals.length === 4) {
      return ((!hasAce && cardVals[3] - cardVals[0] === 3) || (!hasAce && cardVals2[3] - cardVals2[0] === 4));
    }

    var val1 = cardVals[4] - cardVals[0];
    var val2 = cardVals[3] - cardVals[0];
    var val3 = cardVals[4] - cardVals[1];
    var val4 = cardVals2[4] - cardVals2[0];
    var val5 = cardVals2[3] - cardVals2[0];
    var val6 = cardVals2[4] - cardVals2[1];

    return (((val1 === 3 && !hasAce) || (val2 === 3) || (val3 === 3 && !hasAce) || (val4 === 3 && !hasAce) || (val5 === 3 && !hasAce) || val6 === 3) || ((val1 === 4 && val2 === 4) || (val1 === 4 && val3 === 4) || (val2 === 4 && val3 === 4)) ||
  ((val4 === 4 && val5 === 4) || (val4 === 4 && val6 === 4) || (val5 === 4 && val6 === 4)));
  },

  isInsideStraightDraw: function isInsideStraightDraw(cardVals) {
    cardVals.sort(function(a, b){return a - b});
    var hasAce = false;
    var cardVals2 = aceHandler(cardVals);

    if (cardVals2.length != 0) {
      hasAce = true;
    }

    cardVals = removeDups(cardVals);
    cardVals2 = removeDups(cardVals2);

    if (cardVals.length < 4) {
      return false;
    } else if (cardVals.length === 4) {
      return (cardVals[3] - cardVals[0] === 4 || cardVals2[3] - cardVals2[0] === 4 ||
              hasAce && cardVals[3] - cardVals[0] === 3 || hasAce && cardVals2[3] - cardVals2[0] === 3);
    }

    var val1 = cardVals[4] - cardVals[0];
    var val2 = cardVals[3] - cardVals[0];
    var val3 = cardVals[4] - cardVals[1];
    var val4 = cardVals2[4] - cardVals2[0];
    var val5 = cardVals2[3] - cardVals2[0];
    var val6 = cardVals2[4] - cardVals2[1];
    return (val1 === 4 || val2 === 4 || val3 === 4 || val4 === 4 || val5 === 4 || val6 === 4 || (val2 === 3 && hasAce) || (val3 === 3 && hasAce) || (val4 === 3 && hasAce) || (val5 === 3 && hasAce));
  },

  const countOuts = function(cards) {
    console.log("countOUts called");
    var cardVals = [];
    var cardSuits = [];
    for (var i = 0; i < cards.length; i++) {
      var cardRank = cards[i].slice(0,cards[i].length - 1);
      cardSuits.push(cards[i].slice(cards[i].length - 1, cards[i].length));
      if (cardRank === "A") {
        cardVals.push(14);
      } else if (cardRank === "K") {
        cardVals.push(13);
      } else if (cardRank === "Q") {
        cardVals.push(12);
      } else if (cardRank === "J") {
        cardVals.push(11);
      } else if (cardRank === 1){
        cardVals.push(10);
      } else {
        cardVals.push(Number(cardRank));
      }
    }

    console.log("before helper functions");
    console.log(cardSuits);
    console.log(cardVals);
    var flushDraw = isFlushDraw(cardSuits);
    var insideStraightDraw = isInsideStraightDraw(cardVals);
    var outsideStraightDraw = isOutsideStraightDraw(cardVals);
    console.log("other helper functions called");
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
  };

const testCount = function(nothig) {
    return "1";
};

export default countOuts;
