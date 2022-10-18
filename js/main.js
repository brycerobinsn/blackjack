console.log('hello world')
// select elements

// variable declarations
const player = {
    hand: [],
    chipCount: 0
}
const dealerHand = []
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
// random number to find card value
function randomCard () {
    const card =  Math.floor(Math.random() * (deckArr.length))
    console.log(card)
    return deckArr[card]
    
}
// assign cards to each player alternating 
function dealCards () {
    player.hand.push(randomCard())
    console.log(`Player hand: ${player.hand[0].value},`)
    console.log(`Dealer has: `)
    dealerHand.push(randomCard())
    console.log(`Player hand: ${player.hand[0].value}, `)
    console.log(`Dealer has: ${dealerHand[0].value},`)
    player.hand.push(randomCard())
    console.log(`Player hand: ${player.hand[0].value}, ${player.hand[1].value}`)
    console.log(`Dealer has: ${dealerHand[0].value},`)
    dealerHand.push(randomCard())
    console.log(`Player hand: ${player.hand[0].value}, ${player.hand[1].value}`)
    console.log(`Dealer has: ${dealerHand[0].value}, ${dealerHand[1].value}`)
}
dealCards()

// event listeners
