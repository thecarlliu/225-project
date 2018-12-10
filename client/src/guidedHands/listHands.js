const listHands = [
    {//flush draws
        cards: ["CH", "4H", "3C", "QH", "8H"],
        importantCards: [0,1,3,4],
        drawName: "Flush Draw",
        outs: "9"
    },
    {
        cards: ["KS", "9S", "5S", "2C", "JS"],
        importantCards: [0, 1, 2, 4],
        drawName: "Flush Draw",
        outs: "9"
    },
    {
        cards: ["6H", "7C", "10C", "2C", "CC"],
        importantCards: [1, 2, 3, 4],
        drawName: "Flush Draw",
        outs: "9"
    },
    {//outside straight draws
        cards: ["3C", "5S", "2H", "4S", "JC"],
        importantCards: [0, 1, 2, 3],
        drawName: "Outside Straight Draw",
        outs: "8"
    },
    {
      cards: ["KD", "10D", "7H", "JS", "QC"],
      importantCards: [0, 1, 3, 4],
      drawName: "Outside Straight Draw",
      outs: "8"
    },
    {
        cards: ["9H", "10H", "7D", "2D", "8D"],
        importantCards: [0, 1, 2, 4],
        drawName: "Outside Straight Draw",
        outs: "8"
    },
    {//inside straight draws
        cards: ["CS", "2D", "3C", "10C", "4D"],
        importantCards: [0, 1, 2, 4],
        drawName: "Inside Straight Draw",
        outs: "4"
    },
    {
        cards: ["6H", "KD", "9H", "5C", "8S"],
        importantCards: [0, 2, 3, 4],
        drawName: "Inside Straight Draw",
        outs: "4"
    },
    {
        cards: ["QC", "KD", "5H", "10C", "9D"],
        importantCards: [0, 1, 3, 4],
        drawName: "Inside Straight Draw",
        outs: "4"
    },
    {//double inside straight draws
      cards: ["CH", "5S", "3D", "6D", "4S"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Double Inside Straight Draw",
      outs: "8"
  },
  {
      cards: ["7D", "9S", "5H", "8C", "JD"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Double Inside Straight Draw",
      outs: "8"
  },
  {
      cards: ["JC", "QD", "CH", "10C", "8D"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Double Inside Straight Draw",
      outs: "8"
  },
    {//flush and inside draw
      cards: ["2C", "3C", "4D", "QC", "5C"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Inside Straight Draw",
      outs: "12"
  },
  {
      cards: ["9S", "KH", "4H", "10H", "JH"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Inside Straight Draw",
      outs: "12"
  },
  {
      cards: ["7H", "10D", "8D", "2D", "6D"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Inside Straight Draw",
      outs: "12"
  },
    {//flush and outside draw
      cards: ["7H", "9D", "8D", "2D", "6D"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Outside Straight Draw",
      outs: "15"
    },
    {
      cards: ["9S", "QH", "4H", "10H", "JH"],
      importantCards: [0, 1, 2, 3, 4],
      drawName: "Flush and Outside Straight Draw",
      outs: "15"
    },
    {
      cards: ["9S", "QH", "4H", "10H", "JH"],
      importantCards: [0, 1, 2, 4, 5],
      drawName: "Flush and Outside Straight Draw",
      outs: "15"
    },
];

export default listHands;
