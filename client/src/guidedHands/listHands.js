const listHands = [
    {//flush draws
        cards: ["CH", "4H", "3C", "QH", "8H"],
        importantCards: [0,1,3,4],
        drawName: "Flush Draw",
        reason: "There are 4 hearts for a flush",
        outs: "9"
    },
    {
        cards: ["KS", "9S", "5S", "2C", "JS"],
        importantCards: [0, 1, 2, 4],
        drawName: "Flush Draw",
        reason: "There are 4 spades for a flush",
        outs: "9"
    },
    {
        cards: ["6H", "7C", "10C", "2C", "CC"],
        importantCards: [1, 2, 3, 4],
        drawName: "Flush Draw",
        reason: "There are 4 clubs for a flush.",
        outs: "9"
    },
    {//outside straight draws
        cards: ["3C", "5S", "2H", "4S", "JC"],
        importantCards: [0, 1, 2, 3],
        drawName: "Outside Straight Draw",
        reason: "We just need a 6 or an Ace for an outside straight.",
        outs: "8"
    },
    {
      cards: ["KD", "10D", "7H", "JS", "QC"],
      importantCards: [0, 1, 3, 4],
      drawName: "Outside Straight Draw",
        reason: "We just need a 9 or an Ace for an outside straight.",
      outs: "8"
    },
    {
        cards: ["9H", "10H", "7D", "2D", "8D"],
        importantCards: [0, 1, 2, 4],
        drawName: "Outside Straight Draw",
        reason: "We just need a 6 or a J for an outside straight.",
        outs: "8"
    },
    {//inside straight draws
        cards: ["CS", "2D", "3C", "10C", "4D"],
        importantCards: [0, 1, 2, 4],
        drawName: "Inside Straight Draw",
        reason: "We just need a 5 for an inside straight.",
        outs: "4"
    },
    {
        cards: ["6H", "KD", "9H", "5C", "8S"],
        importantCards: [0, 2, 3, 4],
        drawName: "Inside Straight Draw",
        reason: "We just need a 7 for an inside straight.",
        outs: "4"
    },
    {
        cards: ["QC", "KD", "5H", "10C", "9D"],
        importantCards: [0, 1, 3, 4],
        drawName: "Inside Straight Draw",
        reason: "We just need a J for an inside straight.",
        outs: "4"
    },
    {//double inside straight draws
      cards: ["CH", "5S", "3D", "6D", "4S"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Double Inside Straight Draw",
        reason: "We just need a 2 or a 7 for an inside straight.",
      outs: "8"
  },
  {
      cards: ["7D", "9S", "5H", "8C", "JD"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Double Inside Straight Draw",
      reason: "We just need a 6 or a 10 for an inside straight.",
      outs: "8"
  },
  {
      cards: ["JC", "QD", "CH", "10C", "8D"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Double Inside Straight Draw",
      reason: "We need just need a 9 or K for an outside straight.",
      outs: "8"
  },
    {//flush and inside draw
      cards: ["2C", "3C", "4D", "QC", "5C"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Inside Straight Draw",
        reason: "There are 4 clubs for a flush and the 2,3,4,5 make an outside straight draw.",
      outs: "12"
  },
  {
      cards: ["9S", "KH", "4H", "10H", "JH"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Inside Straight Draw",
      reason: "There are 4 hearts for a flush and the 9,10,J,K make an outside straight draw.",
      outs: "12"
  },
  {
      cards: ["7H", "10D", "8D", "2D", "6D"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Inside Straight Draw",
      reason: "There are 4 diamonds for a flush and the 6,7,8,9 make an outside straight draw.",
      outs: "12"
  },
    {//flush and outside draw
      cards: ["7H", "9D", "8D", "2D", "6D"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Outside Straight Draw",
        reason: "There are 4 diamonds for a flush and the 6,7,8,9 make an outside straight draw.",
      outs: "15"
    },
    {
      cards: ["9S", "QH", "4H", "10H", "JH"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Outside Straight Draw",
        reason: "There are 4 hearts for a flush and the 9,10,J,Q make an outside straight draw.",
      outs: "15"
    },
    {
      cards: ["9S", "QH", "4H", "10H", "JH"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Outside Straight Draw",
        reason: "There are 4 hearts for a flush and the 9,10,J,Q make an outside straight draw.",
      outs: "15"
    },
];

export default listHands;
