class Algorithm {
  function isFlushDraw(cardSuits) {
      var maxCount = 0;
      for (var i = 0; i < cardSuits.length; i++) {
        var count = 0;
        for (var j = 0; j < cardSuits.length; i++) {
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
  }

  function isOutsideStraightDraw(cardVals) {
    cardVals.sort;
    var val1 = cardVals[4] - cardVals[0];
    var val2 = cardVals[3] - cardVals[0];
    var val3 = cardVals[4] - cardVals[1];
    if ((val1 === 3 || val2 === 3 || val3 === 3) || ((val1 === 4 && val2 === 4) || (val1 === 4 && val3 === 4) || (val2 === 4 && val3 === 4))) {
      return true;
    }
    return false;
  }

  function isInsideStraightDraw(cardVals) {
    cardVals.sort;
    var val1 = cardVals[4] - cardVals[0];
    var val2 = cardVals[3] - cardVals[0];
    var val3 = cardVals[4] - cardVals[1];
    if (val1 === 4 || val2 === 4 || val3 === 4) {
      return true;
    }
    return false;
  }

}
