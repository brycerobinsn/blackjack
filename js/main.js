console.log('hello world')
// select elements



// variable declarations
const player = {
    hand: [],
    chipCount: 0
}
const dealerHand = []


// functions
// random number to find card value
function randomCard (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function dealCards () {
    player.hand.push(randomCard(1,13))
    dealerHand.push(randomCard(1,13))
    player.hand.push(randomCard(1,13))
    dealerHand.push(randomCard(1,13))
    console.log(`Player hand: ${player.hand}`)
    console.log(`Dealer has: ${dealerHand}`)
}
dealCards()
// event listeners
