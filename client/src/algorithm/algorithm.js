
  function isFlushDraw(cardSuits) {
    cardSuits.sort();
    var maxCount = 1;
    for (var i = 0; i < cardSuits.length; i++) {
      cardSuits[i] === cardSuits[i - 1] ? maxCount++ : maxCount = 1;
      if (maxCount === 4) {
        return true;
      }
    }
    return false;
  }

//thanks internet for this one (mostly)
  function removeDups(cardVals) {
    cardVals.sort()
    var unique = {};
    cardVals.forEach(function(i) {
      if(!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  function aceHandler(cardVals) {
    var cardVals2 = [];
    if (cardVals.includes(14)) {
      cardVals2 = cardVals.slice(0);
      cardVals2.unshift(1);
      cardVals2.splice(cardVals2.length - 1);
    }
    return cardVals2;
  }

  function isOutsideStraightDraw(cardVals) {
    cardVals.sort(function(a, b){return a - b});
    var hasAce = false;
    var cardVals2 = aceHandler(cardVals);

    if (cardVals2.length !== 0) {
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
  }

  function isInsideStraightDraw(cardVals) {
    cardVals.sort(function(a, b){return a - b});
    var hasAce = false;
    var cardVals2 = aceHandler(cardVals);

    if (cardVals2.length !== 0) {
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
  }

  const countOuts = function(cards) {
    var cardVals = [];
    var cardSuits = [];
    for (var i = 0; i < cards.length; i++) {
      var cardRank = cards[i].slice(0,cards[i].length - 1);
      cardSuits.push(cards[i].slice(cards[i].length - 1, cards[i].length));
      if (cardRank === "C") {
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

    var flushDraw = isFlushDraw(cardSuits);
    var insideStraightDraw = isInsideStraightDraw(cardVals);
    var outsideStraightDraw = isOutsideStraightDraw(cardVals);
    if (outsideStraightDraw && flushDraw) {
      return [15, " an outside straight draw and flush draw"];
    } else if (insideStraightDraw && flushDraw) {
      return [12, " an inside straight draw and flush draw"];
    } else if (outsideStraightDraw) {
      return [8, " an outside straight draw"];
    } else if (insideStraightDraw) {
      return [4, " an inside straight draw"];
    } else if (flushDraw){
      return [9, " a flush draw"];
    } else {
      return [0, " nothing"];
    }
  };

const testCount = function(nothig) {
    return "1";
};

export default countOuts;
