let handHandler = {};
let outsCounter = {};

/**
 * Takes a list of suits and checks to see if four of them match
 * @param {object} cardSuits an array of suits of a hand of cards
 *
 * @returns {boolean} true if there are four of the same type, else false
 */
handHandler.isFlushDraw = function(cardSuits) {
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

/**
 * Takes a list of cards and returns a dict with their frequencies
 * @param {object} cardVals an array of card values
 *
 * @returns {object} a dict of the frequencies of the input cards
 */
handHandler.cardFreqs = function(cardVals) {
  var counts = {};
  for (var i = 0; i < cardVals.length; i++) {
    var card = cardVals[i];
    counts[card] = counts[card] ? counts[card] + 1 : 1; //isn't js great
  }
  return counts;
}

/**
 * Reads a dict of card frequencies to see if exactly one pair is present
 * @param {object} cardFreqs a dict of card frequencies
 *
 * @returns {boolean} true if there is a pair in the represented hand, else false
 */
handHandler.onePair = function(cardFreqs) {
  var count = 0;
  for (var key in cardFreqs) {
    if (cardFreqs[key] === 2) {
      count++;
    }
  }
  return count === 1;
}

/**
 * Reads a dict of card frequencies to see if no pair is present
 * @param {object} cardFreqs a dict of card frequencies
 *
 * @returns {boolean} true if there is no pair in the represented hand, else false
 */
handHandler.noPair = function(cardFreqs) {
  for (var key in cardFreqs) {
    if (cardFreqs[key] != 1) {
      return false;
    }
  }
  return true;
}

/**
 * Reads a dict of card frequencies to see if two pairs are present
 * @param {object} cardFreqs a dict of card frequencies
 *
 * @returns {boolean} true if there are two pairs in the represented hand, else false
 */
handHandler.twoPair = function(cardFreqs) {
  var count = 0;
  for (var key in cardFreqs) {
    if (cardFreqs[key] === 2) {
      count++;
    }
  }
  return count === 2;
}

/**
 * Reads a dict of card frequencies to see if a set is present
 * @param {object} cardFreqs a dict of card frequencies
 *
 * @returns {boolean} true if there is a set in the represented hand, else false
 */
handHandler.hasSet = function(cardFreqs) {
  var foundSet = false;
  for (var key in cardFreqs) {
    if (cardFreqs[key] != 3 && cardFreqs[key] != 1) {
      return false;
    }
    if (cardFreqs[key] == 3) {
      foundSet = true;
    }
  }
  return foundSet;
}

/**
 * Removes duplicates from an array - {@link https://wsvincent.com/javascript-remove-duplicates-array|Source}
 * @param {object} cardVals an array of card values
 *
 * @returns {object} the array stripped of duplicates
 */
handHandler.removeDups = function(cardVals) {
  var unique = {};
  cardVals.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}

/**
 * Checks if a hand contains a straight (consecutive values)
 * @param {object} cardVals an array of card values
 *
 * @returns {boolean} true if the cards form a straight, else false
 */
handHandler.isStraight = function(cardVals) {
  if (cardVals == [14,2,3,4,5]) {
    return true;
  }
  for (var i = 1; i < cardVals.length; i++) {
    if ((cardVals[i] - cardVals[i-1]) !== 1) {
      return false;
    }
  }
  return true;
}

/**
 * Takes a list of cards and changes any ace high to an ace low
 * @param {object} cardVals an array of cards
 *
 * @returns {object} an array of cards with a shifted ace, or empty
 */
handHandler.aceHandler = function(cardVals) {
  var cardVals2 = [];
  if (cardVals.includes(14)) {
    cardVals2 = cardVals.slice(0);
    cardVals2.unshift(1);
    cardVals2.splice(cardVals2.length - 1);
  }
  return cardVals2;
}

/**
 * Checks if a hand contains an outside straight draw
 * @param {object} cardVals an array of card values
 *
 * @returns {boolean} true if the cards have an outside straight draw, else false
 */
handHandler.isOutsideStraightDraw = function(cardVals, cardVals2) {
  var hasAce = false;

  if (cardVals2.length !== 0) {
    hasAce = true;
  }

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

  return (((val1 === 3 && !hasAce) || (val2 === 3) || (val3 === 3 && !hasAce) || (val4 === 3 && !hasAce) || (val5 === 3 && !hasAce) || val6 === 3) || ((val1 === 4 && val2 === 4) || (val1 === 4 && val3 === 4) || (val2 === 4 && val3 === 4)) || ((val4 === 4 && val5 === 4) || (val4 === 4 && val6 === 4) || (val5 === 4 && val6 === 4)));
}

/**
 * Checks if a hand contains an inside straight draw
 * @param {object} cardVals an array of card values
 *
 * @returns {boolean} true if the cards have an inside straight draw, else false
 */
handHandler.isInsideStraightDraw = function(cardVals, cardVals2) {
  var hasAce = false;

  if (cardVals2.length != 0) {
    hasAce = true;
  }

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

/**
 * Gets lists of the values and suits of a hand of cards
 * @param {object} cards an array of cards
 *
 * @returns {object} an array of cards values and an array of card suits
 */
handHandler.getValSuits = function(cards) {
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
  return [cardVals, cardSuits];
}

/**
 * Counts the outs for a hand of cards
 * @param {object} cards an array of cards
 *
 * @returns {object} the number of outs and some flavor text
 */
 outsCounter.countOuts = function(cards) {

  var valSuits = handHandler.getValSuits(cards);
  var cardVals = valSuits[0];
  var cardSuits = valSuits[1];

  var freqs = handHandler.cardFreqs(cardVals);

  cardVals.sort(function(a, b){return a - b});
  var cardVals2 = handHandler.aceHandler(cardVals);

  cardVals = handHandler.removeDups(cardVals);
  cardVals2 = handHandler.removeDups(cardVals2);

  var flushDraw = handHandler.isFlushDraw(cardSuits);
  var straight = handHandler.isStraight(cardVals);
  var insideStraightDraw = handHandler.isInsideStraightDraw(cardVals, cardVals2) && !straight;
  var outsideStraightDraw = handHandler.isOutsideStraightDraw(cardVals, cardVals2) && !straight;
  if (outsideStraightDraw && flushDraw) {
    return [15, " you had an outside straight draw (or a double inside straight draw) and a flush draw."];
  } else if (insideStraightDraw && flushDraw) {
    return [12, " you had an inside straight draw and a flush draw."];
  } else if (outsideStraightDraw) {
    return [8, " you had an outside straight draw (or a double inside straight draw)."];
  } else if (insideStraightDraw) {
    return [4, " you had an inside straight draw."];
  } else if (flushDraw){
    return [9, " you had a flush draw."];
  } else if (handHandler.hasSet(freqs)) {
    return [7, " you had a set."]; //set to full house or quads
  } else if (handHandler.twoPair(freqs)) {
    return [4, " you had two pair."]; //two pair to full house
  } else if (handHandler.onePair(freqs)) {
    return [5, " you had one pair."]; //one pair to top two pair or set
  } else if (handHandler.noPair(freqs) && !straight) {
    return [6, " you had no pair."]; //no pair to pair
  } else {
    return [0, " you had the best hand!"];
  }
};

module.exports = {
    handHandler,
    outsCounter
}
