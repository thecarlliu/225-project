var assert = require('assert');

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

function isOutsideStraightDraw(cardVals) {
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
}

function isInsideStraightDraw(cardVals) {
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
}

function countOuts(cards) {
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

  var flushDraw = isFlushDraw(cardSuits);
  var insideStraightDraw = isInsideStraightDraw(cardVals);
  var outsideStraightDraw = isOutsideStraightDraw(cardVals);
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
    assert.equal(countOuts(['AH','2C','3D','4S','9S']), 4);
    assert.equal(countOuts(['9H','2S','3S','4S','5C']), 8);
    assert.equal(countOuts(['4H','AS','7S','10S','2S']), 9);
    assert.equal(countOuts(['AH','2S','3S','4S','9S']), 12);
    assert.equal(countOuts(['9H','2S','3S','4S','5S']), 15);
    assert.equal(countOuts(['AH','2S','3D','7C','11S']), 0);
  });
});
