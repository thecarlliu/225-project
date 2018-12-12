const listHands = [
    [
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
        }
    ],
    [
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
        }
    ],
    [
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
        }
    ],
    [
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
        }
    ],
    [
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
        }
    ],
    [
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
        }
    ],
    [
        {//one to two pair/set
            cards: ["CC", "QD", "CD", "10C", "3S"],
            outs: "5",
            importantCards: [0,2],
            drawName: "One pair to a Two Pair/Set",
            reason: "There are two Aces already for a pair, and you only need another Ace or Q for a two pair/set."
        },
        {
            cards: ["KS", "10S", "10H", "7S", "2D"],
            outs: "5",
            importantCards: [1,2],
            drawName: "One pair to a Two Pair/Set",
            reason: "There are two 10s already for a pair, and you only need another K or 10 for a two pair/set."
        },
        {
            cards: ["CH", "9S", "7H", "CD", "4C"],
            outs: "5",
            importantCards: [0,3],
            drawName: "One pair to a Two Pair/Set",
            reason: "There are two Aces already for a pair, and you only need another Ace or 9 for a two pair/set."
        }
    ],
    [
        {//two pair to full house
            cards: ["KH", "QS", "KC", "QD", "5S"],
            outs: "4",
            importantCards: [0,2,1,3],
            drawName: "Two pair to a Full House",
            reason: "There are two pairs: Ks and Qs, and you only need one more K or Q for a full house."
        },
        {
            cards: ["8H", "JD", "JH", "8S", "2C"],
            outs: "4",
            importantCards: [0,2,1,3],
            drawName: "Two pair to a Full House",
            reason: "There are two pairs: Js and 8s, and you only need one more J or 8 for a full house."
        },
        {
            cards: ["7H", "KD", "7C", "KH", "3C"],
            outs: "4",
            importantCards: [0,2,1,3],
            drawName: "Two pair to a Full House",
            reason: "There are two pairs: Ks and 7s, and you only need one more K or 7 for a full house."
        }
    ],
    [
        {//set to fullhouse/quads
            cards: ["6C", "6D", "6S", "7H", "JC"],
            outs: "7",
            importantCards: [0,1,2],
            drawName: "Set to a Full House/Quads",
            reason: "We have a set of 6s, and you only need a 6, 7, or J for a full house/quad."
        },
        {
            cards: ["8H", "8D", "8S", "9C", "KC"],
            outs: "7",
            importantCards: [0,1,2],
            drawName: "Set to a Full House/Quads",
            reason: "We have a set of 8s, and you only need a 8, 9, or K for a full house/quad."
        },
        {
            cards: ["CC", "CH", "CD", "5H", "QS"],
            outs: "7",
            importantCards: [0,1,2],
            drawName: "Set to a Full House/Quads",
            reason: "We have a set of Aces, and you only need a 5, Q, or an Ace for a full house/quad."
        }
    ],
    [
        {//no pair to pair
            cards: ["9C", "7D", "2S", "3D", "JC"],
            outs: "6",
            importantCards: [0,1],
            drawName: "No pair to a Pair",
            reason: "We consider the cards in our hand and count the outs for a pair, looking for a 9 or 7."
        },
        {
            cards: ["CD", "8S", "5H", "2D", "6C"],
            outs: "6",
            importantCards: [0,1],
            drawName: "No pair to a Pair",
            reason: "We consider the cards in our hand and count the outs for a pair, looking for an Ace or 8."
        },
        {
            cards: ["JC", "9S", "2H", "5D", "7S"],
            outs: "6",
            importantCards: [0,1],
            drawName: "No pair to a Pair",
            reason: "We consider the cards in our hand and count the outs for a pair, looking for a J or 9."
        }
    ]
];

export default listHands;
