let HandTools = require("../algorithm/algorithm.js");
let outsCounter = HandTools.outsCounter;

  /**
   * Returns an array of five cards that contains a flush draw
   */
  function getFlushDraw(){
    let suits = ['S', 'H', 'D', 'C'],
      nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      handNums = ['','','','',''];

    let suitIndex = getRandomIndex(0, suits.length);
    let suit = suits[suitIndex];

    suits.splice(suitIndex, 1);

    for(var i=0; i < 4; i++){
      let cardIndex = getRandomIndex(0, nums.length);
      handNums[i] = nums[cardIndex] + suit;
      nums.splice(cardIndex, 1);
    }

    handNums[4] = getRandomItem(nums) + getRandomItem(suits);

    if(outsCounter.countOuts(handNums)[0] === 9){
      return handNums;
    }
    else{
      return getFlushDraw();
    }
  }

  /**
   * Returns an array of five cards that contains a set (3oK)
   */
  function getSetDraw(){
    let suits = ['S', 'H', 'D', 'C'],
      nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
      handNums = ['','','','',''];

    let pairIndex = getRandomIndex(0, nums.length),
        suitIndexOne = getRandomIndex(0, suits.length),
        suitsIndexTwo = getDifferentIndex(suitIndexOne, 0, suits.length),
        suitsIndexThree = getDifferentIndex(suitsIndexTwo, 0, suits.length);

    handNums[0] = nums[pairIndex] + suits[suitIndexOne];
    handNums[1] = nums[pairIndex] + suits[suitsIndexTwo];
    handNums[2] = nums[pairIndex] + suits[suitsIndexThree];

    nums.splice(pairIndex, 1);

    for(var i = 3; i < 5; i++){
      let numIndex = getRandomIndex(0, nums.length);
      handNums[i] = nums[numIndex] + getRandomItem(suits);
      nums.splice(numIndex, 1);
    }
    return handNums;

  }

  /**
   * Returns an array of five cards that contains an outside straight draw
   */
  function getOutsideStraightDraw(){
    let suits = ['S', 'H', 'D', 'C'],
      nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'C'],
      handNums = ['','','','',''];

    let cardIndex = getRandomIndex(1, nums.length-6);

    let extraCard = getRandomItem(nums) + getRandomItem(suits);

    for(var i = 0; i < 4; i++){
      let card = nums[cardIndex + i] + getRandomItem(suits);
      if(card === extraCard){
        i--;
      }
      else{
        handNums[i] = card;
      }
    }

    handNums[4] = extraCard;

    if(outsCounter.countOuts(handNums)[0] === 8){
      return handNums;
    }
    else{
      return getOutsideStraightDraw();
    }
  }

  /**
   * Returns an array of five cards that contains an inside straight draw
   */
  function getInsideStraightDraw(){
    let suits = ['S', 'H', 'D', 'C'],
        nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'C'],
        handNums = ['','','','',''];

    let cardIndex = getRandomIndex(0, nums.length-5),
        cardRemovedIndex = getRandomIndex(1, 3);

    let extraCard = getRandomItem(nums) + getRandomItem(suits);


    for(var i = 0; i < 5; i++){
      if(i === cardRemovedIndex){
        handNums[i] = extraCard;
      }
      else{
        let card = nums[cardIndex + i] + getRandomItem(suits);
        if(card===extraCard){
          i--;
        }
        else{
          handNums[i] = card;
        }
      }
    }
    if(outsCounter.countOuts(handNums)[0] === 4){
      return handNums;
    }
    else{
      return getInsideStraightDraw();
    }
  }

  /**
   * Returns an array of five cards that contains a double inside straight draw
   */
  function getDoubleInsideStraightDraw(){
    let suits = ['S', 'H', 'D', 'C'],
        nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'C'],
        handNums = ['','','','',''];

    let cardIndex = getRandomIndex(0, nums.length-7);

    for(var i = 0; i < 5; i++){
      if(i === 1 || i === 4){
        cardIndex++;
      }
      handNums[i] = nums[cardIndex + i] + getRandomItem(suits);
    }

    if(outsCounter.countOuts(handNums)[0] === 8){
      return handNums;
    }
    else{
      return getDoubleInsideStraightDraw();
    }

  }

  /**
   * Returns an array of five cards that contains both a flush draw and an inside straight draw
   */
  function getFlushAndInsideDraw(){
    let suits = ['S', 'H', 'D', 'C'],
        nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'C'],
        handNums = ['','','','',''];

    let suitIndex = getRandomIndex(0, suits.length),
      cardIndex = getRandomIndex(0, nums.length-5),
      cardRemovedIndex = getRandomIndex(1, 3),
      differentIndex = getDifferentIndex(cardRemovedIndex, 0, 5);

    let suit = suits[suitIndex];
    suits.splice(suitIndex, 1);

    for(var i = 0; i < 5; i++){
      if(i === differentIndex){
        handNums[i] = nums[cardIndex  + i] + getRandomItem(suits);
      }
      else{
        handNums[i] = nums[cardIndex + i] + suit;
      }
    }

    nums.splice(cardIndex, 5);
    handNums[cardRemovedIndex] = getRandomItem(nums) + suit;

    if(outsCounter.countOuts(handNums)[0] === 12){
      return handNums;
    }
    else{
      return getFlushAndInsideDraw();
    }
  }

  /**
   * Returns an array of five cards that contains both a flush draw and an outside straight draw
   */
  function getFlushAndOutsideDraw(){
    let suits = ['S', 'H', 'D', 'C'],
        nums = ['C', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'C'],
        handNums = ['','','','',''];

    let suitIndex = getRandomIndex(0, suits.length),
        cardIndex = getRandomIndex(1, nums.length-5),
        randomIndex = getRandomIndex(0, 4);

    let suit = suits[suitIndex];
    suits.splice(suitIndex, 1);


    for(var i = 0; i < 4; i++){
      if(i === randomIndex ){
        handNums[i] = nums[cardIndex  + i] + getRandomItem(suits);
      }
      else{
        handNums[i] = nums[cardIndex + i] + suit;
      }
    }

    nums.splice(cardIndex - 1, 6);
    handNums[4] = getRandomItem(nums) + suit;

    if(outsCounter.countOuts(handNums)[0] === 15){
      return handNums;
    }
    else{
      return getFlushAndOutsideDraw();
    }
  }

  /**
   * gets a random hand of five cards
   */
  function getRandomHand(){
    const deck = ["CH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
        "CS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
        "CD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
        "CC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];

    let hand = new Array(5),
        used = new Array(5),
        len = deck.length,
        handIndex=0;

    while (handIndex < 5) {
        let x = getRandomIndex(0, deck.length);
        hand[handIndex] = deck[x in used ? used[x] : x];
        used[x] = --len in used ? used[len] : len; //https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
        handIndex++;
    }
    return hand;
  }

  /**
   * returns a random number from the min index extended to how many choices there are
   */
  function getRandomIndex(minIndex, numChoices){
    return Math.floor(Math.random() * numChoices) + minIndex;
  }

  /**
   * a random index that is not the index already input into the function
   */
  function getDifferentIndex(usedIndex, min, choices){
    let index = getRandomIndex(min, choices);
    if(index === usedIndex){
      return getDifferentIndex(usedIndex, min, choices);
    }
    else{
      return index;
    }
  }

  /**
   * returns a random item from the input array
   */
  function getRandomItem(array){
    return array[getRandomIndex(0, array.length)];
  }

  /**
   * randomizes array of cards
   */
  function randomizeCards(cards){
    let indecies = [0, 1, 2, 3, 4],
        hand = ['', '', null, '', ''];

    for(var i = 0; i < 5; i++){
      let index = getRandomIndex(0, indecies.length);
      if(indecies[index] === i && i < 4){
        i--;
      }
      else{
        hand[i] = cards[indecies[index]];
        indecies.splice(index, 1);
      }
    }

    return hand;
  }

  /**
   * returns a random draw of five cards to go to the GameWindow
   */
  const hand = function(){
    let handTypeIndex = getRandomIndex(0, 8);
    console.log(handTypeIndex);
    let userHand = [];
    switch(handTypeIndex) {
      case 0:
          userHand = getFlushDraw();
          break;
      case 1:
          userHand = getOutsideStraightDraw();
          break;
      case 2:
          userHand = getInsideStraightDraw();
          break;
      case 3:
          userHand = getDoubleInsideStraightDraw();
          break;
      case 4:
          userHand = getFlushAndInsideDraw();
          break;
      case 5:
          userHand = getFlushAndOutsideDraw();
          break;
      case 6:
          userHand = getSetDraw();
          break;
      default:
          userHand = getRandomHand();
        };

    return randomizeCards(userHand);
  }

export default hand;
