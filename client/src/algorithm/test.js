var assert = require('assert');

/**
 * Checks to see if there is a flush draw in a list of cards
 */
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

/**
 * Returns a dict of frequencies of card values
 */
function cardFreqs(cardVals) {
  var counts = {};
  for (var i = 0; i < cardVals.length; i++) {
    var card = cardVals[i];
    counts[card] = counts[card] ? counts[card] + 1 : 1; //isn't js great
  }
  return counts;
}

/**
 * Reads a dict of cards to see if there's exactly one pair in a hand
 */
function onePair(cardFreqs) {
  var count = 0;
  for (var key in cardFreqs) {
    if (cardFreqs[key] === 2) {
      count++;
    }
  }
  return count === 1;
}

/**
 * Reads a dict of cards to see if there is no pair in a hand
 */
function noPair(cardFreqs) {
  for (var key in cardFreqs) {
    if (cardFreqs[key] != 1) {
      return false;
    }
  }
  return true;
}

/**
 * Reads a dict of cards to see if there's exactly two pairs in a hand
 */
function twoPair(cardFreqs) {
  var count = 0;
  for (var key in cardFreqs) {
    if (cardFreqs[key] === 2) {
      count++;
    }
  }
  return count === 2;
}

/**
 * Reads a dict of cards to see if there's a three of a kind in a hand (but not a full house)
 */
function hasSet(cardFreqs) {
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

//4, 1
//3, 2
//3, 1, 1
//2, 2, 1
//2, 1, 1, 1
//1, 1, 1, 1, 1

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

/**
 * Helper function for straight draw methods; turns an ace high into an ace low
 */
function aceHandler(cardVals) {
  var cardVals2 = [];
  if (cardVals.includes(14)) {
    cardVals2 = cardVals.slice(0);
    cardVals2.unshift(1);
    cardVals2.splice(cardVals2.length - 1);
  }
  return cardVals2;
}

/**
 * Determines whether a list of card values has an outside straight draw (or double inside straight draw)
 */
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

/**
 * Determines whether a list of card values has an in straight draw
 */
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

/**
 * Returns number of outs for a given hand
 */
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

  var freqs = cardFreqs(cardVals);

  var flushDraw = isFlushDraw(cardSuits);
  var insideStraightDraw = isInsideStraightDraw(cardVals);
  var outsideStraightDraw = isOutsideStraightDraw(cardVals);
  if (outsideStraightDraw && flushDraw) {
    return [15, " an outside straight draw (or a double inside straight draw) and flush draw"];
  } else if (insideStraightDraw && flushDraw) {
    return [12, " an inside straight draw and flush draw"];
  } else if (outsideStraightDraw) {
    return [8, " an outside straight draw (or a double inside straight draw)"];
  } else if (insideStraightDraw) {
    return [4, " an inside straight draw"];
  } else if (flushDraw){
    return [9, "a flush draw"];
  } else if (hasSet(freqs)) {
    return [7, "a set"]; //set to full house or quads
  } else if (twoPair(freqs)) {
    return [4, "two pair"]; //two pair to full house
  } else if (onePair(freqs)) {
    return [5, "one pair"]; //one pair to top two pair or set
  } else if (noPair(freqs)) {
    return [6, "no pair"]; //no pair to pair
  } else {
    return [0, " nothing"];
  }
};

describe('isFlushDraw()', function() {
  it('should return true if flush draw', function() {
    assert.equal(isFlushDraw(['H','C','S','S','S']), false); //not a flush draw
    assert.equal(isFlushDraw(['H','S','S','S','S']), true); //flush draw
    assert.equal(isFlushDraw(['S','H','H','H','H']), true);
    assert.equal(isFlushDraw(['H','D','D','D','D']), true);
    assert.equal(isFlushDraw(['H','C','C','C','C']), true);
    assert.equal(isFlushDraw(['A','B','B','B','B']), true); //flush draw
    assert.equal(isFlushDraw(['B','A','A','A','A']), true); //flush draw
  });
});

describe('isOutsideStraightDraw()', function() {
  it('should return true if outside straight', function() {
    assert.equal(isOutsideStraightDraw([2,3,4,5,9]), true); //standard outside straight
    assert.equal(isOutsideStraightDraw([2,4,7,10,13]), false); //clearly not an outside straight
    assert.equal(isOutsideStraightDraw([14,2,3,4,10]), false); //ace at the low end
    assert.equal(isOutsideStraightDraw([2,11,12,13,14]), false); //ace at the high end
    assert.equal(isOutsideStraightDraw([2,2,3,5,9]), false); //has a pair
    assert.equal(isOutsideStraightDraw([2,2,3,4,5]), true); //has a pair
    assert.equal(isOutsideStraightDraw([14,2,3,4,14]), false); //pair of aces at the low end
    assert.equal(isOutsideStraightDraw([14,11,12,13,14]), false); //pair of aces at the high end
    assert.equal(isOutsideStraightDraw([3,5,6,7,9]), true); //double gut shot
  });
});

describe('isInsideStraightDraw()', function() {
  it('should return true if inside straight', function() {
    assert.equal(isInsideStraightDraw([2,3,4,6,10]), true); //standard inside straight
    assert.equal(isInsideStraightDraw([5,2,3,4,9]), false); //clearly not an inside straight
    assert.equal(isInsideStraightDraw([14,2,3,4,10]), true); //ace at the low end
    assert.equal(isInsideStraightDraw([2,11,12,13,14]), true); //ace at the high end
    assert.equal(isInsideStraightDraw([2,2,4,6,9]), false); //has a pair
    assert.equal(isInsideStraightDraw([2,2,3,4,6]), true); //has a pair
    assert.equal(isInsideStraightDraw([14,2,3,4,14]), true); //pair of aces at the low end
    assert.equal(isInsideStraightDraw([14,11,12,13,14]), true); //pair of aces at the high end
  });
});

describe('countOuts()', function() {
  it('should return correct number of outs', function() {
    assert.equal(countOuts(['CH','2C','3D','4S','9S'])[0], 4);
    assert.equal(countOuts(['9H','2S','3S','4S','5C'])[0], 8);
    assert.equal(countOuts(['4H','CS','7S','10S','2S'])[0], 9);
    assert.equal(countOuts(['CH','2S','3S','4S','9S'])[0], 12);
    assert.equal(countOuts(['9H','2S','3S','4S','5S'])[0], 15);
    assert.equal(countOuts(['CH','2S','3D','7C','11S'])[0], 6);
    assert.equal(countOuts(['CH','CS','CD','7C','11S'])[0], 7);
  });
});

describe('noPair()', function() {
  it('should return true if there\'s no pair', function() {
    assert.equal(noPair(cardFreqs([1,2,3,4,5])), true);
    assert.equal(noPair(cardFreqs([1,2,3,3,5])), false);
    assert.equal(noPair(cardFreqs([3,3,3,4,5])), false);
  });
});

describe('twoPair()', function() {
  it('should return true if there\'s two pairs', function() {
    assert.equal(twoPair(cardFreqs([1,2,3,4,5])), false);
    assert.equal(twoPair(cardFreqs([1,2,3,3,5])), false);
    assert.equal(twoPair(cardFreqs([3,3,3,4,5])), false);
    assert.equal(twoPair(cardFreqs([3,3,3,4,4])), false);
    assert.equal(twoPair(cardFreqs([3,3,4,4,5])), true);
  });
});

describe('onePair()', function() {
  it('should return true if there\'s just one pair', function() {
    assert.equal(onePair(cardFreqs([1,2,3,4,5])), false);
    assert.equal(onePair(cardFreqs([1,2,3,3,5])), true);
    assert.equal(onePair(cardFreqs([3,3,3,4,5])), false);
    assert.equal(onePair(cardFreqs([3,3,3,4,4])), true);
    assert.equal(onePair(cardFreqs([3,3,4,4,5])), false);
  });
});

describe('hasSet()', function() {
  it('should return true if there\'s a set', function() {
    assert.equal(hasSet(cardFreqs([3,3,3,4,5])), true);
    assert.equal(hasSet(cardFreqs([1,2,3,3,5])), false);
    assert.equal(hasSet(cardFreqs([3,3,3,4,4])), false);
    assert.equal(hasSet(cardFreqs([14,2,3,7,11])), false);
  });
});
