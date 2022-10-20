console.log('hello world')
// select elements
const dealBttn = document.getElementById('dealCards')
const hitBttn = document.getElementById('hit')
const standBttn = document.getElementById('stand')
const dealScore = document.getElementById('dealerScore')
const playScore = document.getElementById('playerScore')

// variable declarations 
const player = {
    hand: [],
    chipCount: 0
}
const dealerHand = []
const gameDeck = []
const deckArr = [{
    value: 11,
    suit: 'Spade',
    img: 'url here'

},
{
    value: 2,
    suit:'Spade',
    img: 'url here'
},
{
    value: 3,
    suit:'Spade',
    img: 'url here'
},
{
    value: 4,
    suit:'Spade',
    img: 'url here'
},
{
    value: 5,
    suit:'Spade',
    img: 'url here'
},
{
    value: 6,
    suit:'Spade',
    img: 'url here'
},
{
    value: 7,
    suit:'Spade',
    img: 'url here'
},
{
    value: 8,
    suit:'Spade',
    img: 'url here'
},
{
    value: 9,
    suit:'Spade',
    img: 'url here'
},
{
    value: 10,
    suit:'Spade',
    img: 'url here'
},
{
    value: 10,
    suit:'Spade',
    img: 'url here'
},
{
    value: 10,
    suit:'Spade',
    img: 'url here'
},
{
    value: 10,
    suit:'Spade',
    img: 'url here'
},
{
    value: 11,
    suit: 'Club',
    img: 'url here'
},
{
    value: 2,
    suit: 'Club',
    img: 'url here'
},
{
    value: 3,
    suit: 'Club',
    img: 'url here'
},
{
    value: 4,
    suit: 'Club',
    img: 'url here'
},
{
    value: 5,
    suit: 'Club',
    img: 'url here'
},
{
    value: 6,
    suit: 'Club',
    img: 'url here'
},
{
    value: 7,
    suit: 'Club',
    img: 'url here'
},
{
    value: 8,
    suit: 'Club',
    img: 'url here'
},
{
    value: 9,
    suit: 'Club',
    img: 'url here'
},
{
    value: 10,
    suit: 'Club',
    img: 'url here'
},
{
    value: 10,
    suit: 'Club',
    img: 'url here'
},
{
    value: 10,
    suit: 'Club',
    img: 'url here'
},
{
    value: 10,
    suit: 'Club',
    img: 'url here'
},
{
    value: 1,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 2,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 3,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 4,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 5,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 6,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 7,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 8,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 9,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'url here'
},
{
    value: 1,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 2,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 3,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 4,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 5,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 6,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 7,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 8,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 9,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 10,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 10,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 10,
    suit: 'Heart',
    img: 'url here'
},
{
    value: 10,
    suit: 'Heart',
    img: 'url here'
},
]

// functions
// multiple decks
function multiDeck (numDeck) {
    for (idx = 0; idx < numDeck; idx++){
       for (i = 0; i < deckArr.length; i++){
            gameDeck.push(deckArr[i])
            // console.log(`added card ${i}`)
        }
        // console.log(`Added Deck ${idx + 1}`)
    }
}
multiDeck(1)
// random number to find card value
function randomCard () {
    const card =  Math.floor(Math.random() * (gameDeck.length))
    // console.log(card)
    gameDeck.splice(card,1)
    return gameDeck[card]

}
// score calculator
function handScore (cards, message) {
    cards.reduce(function(acc,current){
        return current.value + acc
    },0)
    message.innerHTML = cards.reduce(function(acc,current){
        return current.value + acc
    },0)

}

// assign cards to each player alternating 
function dealCards () {
    player.hand.push(randomCard())
    // console.log(`Player hand: ${player.hand[0].value},`)
    // console.log(`Dealer has: `)
    handScore(player.hand, playScore)
    dealerHand.push(randomCard())
    handScore(dealerHand, dealScore)
    // console.log(`Player hand: ${player.hand[0].value}, `)
    // console.log(`Dealer has: ${dealerHand[0].value},`)
    player.hand.push(randomCard())
    handScore(player.hand, playScore)
    // console.log(`Player hand: ${player.hand[0].value}, ${player.hand[1].value}`)
    // console.log(`Dealer has: ${dealerHand[0].value},`)
    dealerHand.push(randomCard())
    console.log(`Player hand: ${player.hand[0].value}, ${player.hand[1].value}`)
    console.log(`Dealer has: ${dealerHand[0].value}, ${dealerHand[1].value}`)
}
// bust function
function bust(cards, message) {
    const sumHand = cards.reduce(function(acc,current){
        return current.value + acc
    }, 0)
    if (sumHand > 21) {
        console.log(`busted with ${sumHand}`)
        message.innerHTML = `${sumHand} BUST`
        message.classList.add('bust')
    }
}

// hit function
function hit(){
    player.hand.push(randomCard())
    handScore(player.hand, playScore)
    bust(player.hand, playScore)
}

// event listeners
dealBttn.addEventListener('click',dealCards)
hitBttn.addEventListener('click',hit)