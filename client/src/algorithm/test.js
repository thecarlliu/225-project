var assert = require('assert');
let HandTools = require("../algorithm/algorithm.js");
let handHandler = HandTools.handHandler;
let outsCounter = HandTools.outsCounter;

describe('Tools', function() {
  describe('removeDups()', function() {
    it('should return an array with no duplicates', function() {
      assert.equal(handHandler.aceHandler([5,6,7,8,1]).members, [1,5,6,7,8].members);
      assert.equal(handHandler.aceHandler([14,6,7,8,14]).members, [6,7,8,14].members);
      assert.equal(handHandler.aceHandler([5,6,13,13,13]).members, [5,6,13].members);
      assert.equal(handHandler.aceHandler([6,6,13,13,13]).members, [6,13].members);
    });
  });

  describe('aceHandler()', function() {
    it('should return a hand that had an ace high to one with an ace low', function() {
      assert.equal(handHandler.aceHandler([5,6,7,8,14]).members, [1,5,6,7,8].members);
      assert.equal(handHandler.aceHandler([14,6,7,8,14]).members, [1,6,7,8,14].members);
      assert.equal(handHandler.aceHandler([5,6,7,8,13]).members, [].members);
    });
  });
});

describe('Draws', function() {
  describe('isFlushDraw()', function() {
    it('should return true if flush draw', function() {
      assert.equal(handHandler.isFlushDraw(['H','C','S','S','S']), false); //not a flush draw
      assert.equal(handHandler.isFlushDraw(['H','S','S','S','S']), true); //flush draw
      assert.equal(handHandler.isFlushDraw(['S','H','H','H','H']), true);
      assert.equal(handHandler.isFlushDraw(['H','D','D','D','D']), true);
      assert.equal(handHandler.isFlushDraw(['H','C','C','C','C']), true);
      assert.equal(handHandler.isFlushDraw(['A','B','B','B','B']), true); //flush draw
      assert.equal(handHandler.isFlushDraw(['B','A','A','A','A']), true); //flush draw
    });
  });

  describe('isOutsideStraightDraw()', function() {
    it('should return true if outside straight', function() {
      assert.equal(handHandler.isOutsideStraightDraw([2,3,4,5,9], []), true); //standard outside straight
      assert.equal(handHandler.isOutsideStraightDraw([2,4,7,10,13], []), false); //clearly not an outside straight
      assert.equal(handHandler.isOutsideStraightDraw([14,2,3,4,10], [1,2,3,4,10]), false); //ace at the low end
      assert.equal(handHandler.isOutsideStraightDraw([2,11,12,13,14], [1,2,11,12,13]), false); //ace at the high end
      assert.equal(handHandler.isOutsideStraightDraw([2,3,5,9], []), false); //has a pair
      assert.equal(handHandler.isOutsideStraightDraw([2,3,4,5], []), true); //has a pair
      assert.equal(handHandler.isOutsideStraightDraw([14,2,3,4], [1,2,3,4,14]), false); //pair of aces at the low end
      assert.equal(handHandler.isOutsideStraightDraw([14,11,12,13], [1,11,12,13]), false); //pair of aces at the high end
      assert.equal(handHandler.isOutsideStraightDraw([3,5,6,7,9], []), true);
    });
  });

  describe('isInsideStraightDraw()', function() {
    it('should return true if inside straight', function() {
      assert.equal(handHandler.isInsideStraightDraw([2,3,4,6,10], []), true);
      assert.equal(handHandler.isInsideStraightDraw([2,3,4,5,9], []), false);
      assert.equal(handHandler.isInsideStraightDraw([2,3,4,10,14], [1,2,3,4,10]), true);
      assert.equal(handHandler.isInsideStraightDraw([2,11,12,13,14], [1,2,22,12,13]), true);
      assert.equal(handHandler.isInsideStraightDraw([2,4,6,9], []), false);
      assert.equal(handHandler.isInsideStraightDraw([2,3,4,6], []), true);
      assert.equal(handHandler.isInsideStraightDraw([14,2,3,4], [1,2,3,4]), true);
      assert.equal(handHandler.isInsideStraightDraw([11,12,13,14], [1,11,12,13]), true);
    });
  });

  describe('noPair()', function() {
    it('should return true if there\'s no pair', function() {
      assert.equal(handHandler.noPair(handHandler.cardFreqs([1,2,3,4,5])), true);
      assert.equal(handHandler.noPair(handHandler.cardFreqs([1,2,3,3,5])), false);
      assert.equal(handHandler.noPair(handHandler.cardFreqs([3,3,3,4,5])), false);
    });
  });

  describe('twoPair()', function() {
    it('should return true if there\'s two pairs', function() {
      assert.equal(handHandler.twoPair(handHandler.cardFreqs([1,2,3,4,5])), false);
      assert.equal(handHandler.twoPair(handHandler.cardFreqs([1,2,3,3,5])), false);
      assert.equal(handHandler.twoPair(handHandler.cardFreqs([3,3,3,4,5])), false);
      assert.equal(handHandler.twoPair(handHandler.cardFreqs([3,3,3,4,4])), false);
      assert.equal(handHandler.twoPair(handHandler.cardFreqs([3,3,4,4,5])), true);
    });
  });

  describe('onePair()', function() {
    it('should return true if there\'s just one pair', function() {
      assert.equal(handHandler.onePair(handHandler.cardFreqs([1,2,3,4,5])), false);
      assert.equal(handHandler.onePair(handHandler.cardFreqs([1,2,3,3,5])), true);
      assert.equal(handHandler.onePair(handHandler.cardFreqs([3,3,3,4,5])), false);
      assert.equal(handHandler.onePair(handHandler.cardFreqs([3,3,3,4,4])), true);
      assert.equal(handHandler.onePair(handHandler.cardFreqs([3,3,4,4,5])), false);
    });
  });

  describe('hasSet()', function() {
    it('should return true if there\'s a set', function() {
      assert.equal(handHandler.hasSet(handHandler.cardFreqs([3,3,3,4,5])), true);
      assert.equal(handHandler.hasSet(handHandler.cardFreqs([1,2,3,3,5])), false);
      assert.equal(handHandler.hasSet(handHandler.cardFreqs([3,3,3,4,4])), false);
      assert.equal(handHandler.hasSet(handHandler.cardFreqs([14,2,3,7,11])), false);
    });
  });

  describe('isStraight()', function() {
    it('should return true if there\'s a straight', function() {
      assert.equal(handHandler.isStraight([3,3,3,4,5]), false);
      assert.equal(handHandler.isStraight([1,2,3,4,5]), true);
      assert.equal(handHandler.isStraight([3,3,3,4,5]), false);
      assert.equal(handHandler.isStraight([3,4,5,6,7]), true);
    });
  });
});

describe('Outs Counter', function() {
  describe('countOuts()', function() {
    it('should return correct number of outs', function() {
      assert.equal(outsCounter.countOuts(['CH','2C','3D','4S','9S'])[0], 4);
      assert.equal(outsCounter.countOuts(['9H','2S','3S','4S','5C'])[0], 8);
      assert.equal(outsCounter.countOuts(['4H','CS','7S','10S','2S'])[0], 9);
      assert.equal(outsCounter.countOuts(['CH','2S','3S','4S','9S'])[0], 12);
      assert.equal(outsCounter.countOuts(['9H','2S','3S','4S','5S'])[0], 15);
      assert.equal(outsCounter.countOuts(['CH','2S','3D','7C','11S'])[0], 6);
      assert.equal(outsCounter.countOuts(['CH','CS','CD','7C','11S'])[0], 7);
      assert.equal(outsCounter.countOuts(['2H','3D','4C','6S','10H'])[0], 4);
    });
  });
});
