const listHands = [
    [
        {//flush draws
            cards: ["CH", "4H", "3C", "QH", "8H"],
            importantCards: [0,1,3,4],
            drawName: "a flush draw",
            reason: "There are four hearts that can finish our flush.",
            outs: "9"
        },
        {
            cards: ["KS", "9S", "5S", "2C", "JS"],
            importantCards: [0, 1, 2, 4],
            drawName: "a flush draw",
            reason: "There are four spades that can form a flush.",
            outs: "9"
        },
        {
            cards: ["6H", "7C", "10C", "2C", "CC"],
            importantCards: [1, 2, 3, 4],
            drawName: "a flush draw",
            reason: "There are four clubs that can form a flush.",
            outs: "9"
        }
    ],
    [
        {//outside straight draws
            cards: ["3C", "5S", "2H", "4S", "JC"],
            importantCards: [0, 1, 2, 3],
            drawName: "an outside straight draw",
            reason: "We just need an ace or a six to form a straight.",
            outs: "8"
        },
        {
            cards: ["KD", "10D", "7H", "JS", "QC"],
            importantCards: [0, 1, 3, 4],
            drawName: "an outside straight draw",
            reason: "We just need an ace or a six to form a straight.",
            outs: "8"
        },
        {
            cards: ["9H", "10H", "7D", "2D", "8D"],
            importantCards: [0, 1, 2, 4],
            drawName: "an outside straight draw",
            reason: "We just need a jack or a six to form a straight.",
            outs: "8"
        }
    ],
    [
        {//inside straight draws
            cards: ["CS", "2D", "3C", "10C", "4D"],
            importantCards: [0, 1, 2, 4],
            drawName: "an inside straight draw",
            reason: "We just need a five to form a straight.",
            outs: "4"
        },
        {
            cards: ["6H", "KD", "9H", "5C", "8S"],
            importantCards: [0, 2, 3, 4],
            drawName: "an inside straight draw",
            reason: "We just need a seven to form a straight.",
            outs: "4"
        },
        {
            cards: ["QC", "KD", "5H", "10C", "9D"],
            importantCards: [0, 1, 3, 4],
            drawName: "an inside straight draw",
            reason: "We just need a jack to form a straight.",
            outs: "4"
        }
    ],
    [
        {//double inside straight draws
            cards: ["CH", "5S", "3D", "6D", "4S"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a double inside straight draw",
            reason: "We just need a seven or a two to form a straight.",
            outs: "8"
        },
        {
            cards: ["7D", "9S", "5H", "8C", "JD"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a double inside straight draw",
            reason: "We just need a ten or a six to form a straight.",
            outs: "8"
        },
        {
            cards: ["JC", "QD", "CH", "10C", "8D"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a double inside straight draw",
            reason: "We need just need a king or a nine to form a straight.",
            outs: "8"
        }
    ],
    [
        {//flush and outside draw
            cards: ["2C", "3C", "4D", "QC", "5C"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a flush and outside straight draw",
            reason: "There are nine clubs that can finish our flush, and an ace or a six forms a straight.",
            outs: "15"
        },
        {
            cards: ["9S", "KH", "4H", "10H", "JH"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a flush and inside straight draw",
            reason: "There are nine hearts that can finish our flush, and a queen forms a straight.",
            outs: "12"
        },
        {
            cards: ["7H", "10D", "8D", "2D", "6D"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a flush and inside straight draw",
            reason: "There are nine diamonds that can finish our flush, and a nine forms a straight.",
            outs: "12"
        }
    ],
    [
        {//flush and outside draw
            cards: ["7H", "9D", "8D", "2D", "6D"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a flush and outside straight draw",
            reason: "There are 9 diamonds that can finish our flush, and a ten or a five forms a straight.",
            outs: "15"
        },
        {
            cards: ["9S", "QH", "4H", "10H", "JH"],
            importantCards: [0, 1, 2, 3, 4],
            drawName: "a flush and outside straight draw",
            reason: "There are nine hearts that can finish our flush, and a king or an eight forms a straight.",
            outs: "15"
        }
    ],
    [
        {//one to two pair/set
            cards: ["CC", "QD", "CD", "10C", "3S"],
            outs: "5",
            importantCards: [0,2],
            drawName: "a pair",
            reason: "You already have a pair of aces, and you only need another ace or a queen to get top two pair or a set."
        },
        {
            cards: ["KS", "10S", "10H", "7S", "2D"],
            outs: "5",
            importantCards: [1,2],
            drawName: "a pair",
            reason: "You already have a pair of 10s, and you only need another king or a ten to get top two pair or a set."
        },
        {
            cards: ["CH", "9S", "7H", "CD", "4C"],
            outs: "5",
            importantCards: [0,3],
            drawName: "a pair",
            reason: "You already have a pair of aces, and you only need another ace or a nine to get top two pair or a set."
        }
    ],
    [
        {//two pair to full house
            cards: ["KH", "QS", "KC", "QD", "5S"],
            outs: "4",
            importantCards: [0,2,1,3],
            drawName: "two pair",
            reason: "You already have two pair (kings and queens), and you only need one more king or queen to form a full house."
        },
        {
            cards: ["8H", "JD", "JH", "8S", "2C"],
            outs: "4",
            importantCards: [0,2,1,3],
            drawName: "two pair",
            reason: "You already have two pair (jacks and eights), and you only need one more jack or 8 to form a full house."
        },
        {
            cards: ["7H", "KD", "7C", "KH", "3C"],
            outs: "4",
            importantCards: [0,2,1,3],
            drawName: "two pair",
            reason: "You already have two pair (kings and sevens), and you only need one more king or seven to form a full house."
        }
    ],
    [
        {//set to fullhouse/quads
            cards: ["6C", "6D", "6S", "7H", "JC"],
            outs: "7",
            importantCards: [0,1,2],
            drawName: "a set",
            reason: "You have a set of sixes, and you need a jack or seven for a full house or a six for quads."
        },
        {
            cards: ["8H", "8D", "8S", "9C", "KC"],
            outs: "7",
            importantCards: [0,1,2],
            drawName: "a set",
            reason: "You have a set of eights, and you need a king or nine for a full house or an eight for quads."
        },
        {
            cards: ["CC", "CH", "CD", "5H", "QS"],
            outs: "7",
            importantCards: [0,1,2],
            drawName: "a set",
            reason: "You have a set of aces, and you need a queen or five for a full hosue or an ace for quads."
        }
    ],
    [
        {//no pair to pair
            cards: ["9C", "7D", "2S", "3D", "JC"],
            outs: "6",
            importantCards: [0,1],
            drawName: "no pair",
            reason: "We consider the cards in our hand and count the outs for a pair, looking for a nine or seven."
        },
        {
            cards: ["CD", "8S", "5H", "2D", "6C"],
            outs: "6",
            importantCards: [0,1],
            drawName: "no pair",
            reason: "We consider the cards in our hand and count the outs for a pair, looking for an ace or eight."
        },
        {
            cards: ["JC", "9S", "2H", "5D", "7S"],
            outs: "6",
            importantCards: [0,1],
            drawName: "no pair",
            reason: "We consider the cards in our hand and count the outs for a pair, looking for a jack or nine."
        }
    ]
];

export default listHands;
