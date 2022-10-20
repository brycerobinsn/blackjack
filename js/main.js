console.log('hello world')
// select elements
const dealBttn = document.getElementById('dealCards')
const hitBttn = document.getElementById('hit')
const standBttn = document.getElementById('stand')
const dealScore = document.getElementById('dealerScore')
const playScore = document.getElementById('playerScore')
// const hiddenCard = document.querySelector('.hiddenCard')
const pFirstCard = document.getElementById('playerFirst')
const pSecondCard = document.getElementById('playerSecond')
const dFirstCard = document.getElementById('dealerFirst')
const dSecondCard = document.getElementById('dealerSecond')

// variable declarations 
const player = {
    hand: [],
    chipCount: 0,
    score: 0
}
const dealer = {
    hand:[],
    chipCount: 0,
    score: 0
}
const gameDeck = []
const deckArr = [{
    value: 11,
    suit: 'Spade',
    img: `/img/SVG-cards-1.3/ace_of_spades.svg`

},
{
    value: 2,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/2_of_spades.svg'
},
{
    value: 3,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/3_of_spades.svg'
},
{
    value: 4,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/4_of_spades.svg'
},
{
    value: 5,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/5_of_spades.svg'
},
{
    value: 6,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/6_of_spades.svg'
},
{
    value: 7,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/7_of_spades.svg'
},
{
    value: 8,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/8_of_spades.svg'
},
{
    value: 9,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/9_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/10_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/jack_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/queen_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: '/img/SVG-cards-1.3/king_of_spades.svg'
},
{
    value: 11,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/ace_of_clubs.svg'
},
{
    value: 2,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/2_of_clubs.svg'
},
{
    value: 3,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/3_of_clubs.svg'
},
{
    value: 4,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/4_of_clubs.svg'
},
{
    value: 5,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/5_of_clubs.svg'
},
{
    value: 6,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/6_of_clubs.svg'
},
{
    value: 7,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/7_of_clubs.svg'
},
{
    value: 8,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/8_of_clubs.svg'
},
{
    value: 9,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/9_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/10_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/jack_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/queen_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: '/img/SVG-cards-1.3/king_of_clubs.svg'
},
{
    value: 11,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/ace_of_diamonds.svg'
},
{
    value: 2,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/2_of_diamonds.svg'
},
{
    value: 3,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/3_of_diamonds.svg'
},
{
    value: 4,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/4_of_diamonds.svg'
},
{
    value: 5,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/5_of_diamonds.svg'
},
{
    value: 6,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/6_of_diamonds.svg'
},
{
    value: 7,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/7_of_diamonds.svg'
},
{
    value: 8,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/8_of_diamonds.svg'
},
{
    value: 9,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/9_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/10_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/jack_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/queen_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: '/img/SVG-cards-1.3/king_of_diamonds.svg'
},
{
    value: 11,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/ace_of_hearts.svg'
},
{
    value: 2,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/2_of_hearts.svg'
},
{
    value: 3,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/3_of_hearts.svg'
},
{
    value: 4,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/4_of_hearts.svg'
},
{
    value: 5,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/5_of_hearts.svg'
},
{
    value: 6,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/6_of_hearts.svg'
},
{
    value: 7,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/7_of_hearts.svg'
},
{
    value: 8,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/8_of_hearts.svg'
},
{
    value: 9,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/9_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/10_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/jack_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/queen_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: '/img/SVG-cards-1.3/king_of_hearts.svg'
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
function handScore (cards) {
    // for(let i = 0; i < cards.hand.length; i++){
    //     cards.score += cards.hand[i].value
    // }
    // return cards.score
    const score = cards.hand.reduce(function(acc,current){
        console.log(`current value ${current.value}`)
        cards.score += current.value
        return current.value + acc
    },0)
    console.log(cards.score)
    return cards.score = score
}
function scoreCard (cards, message) {
    message.innerHTML = cards.score
}

// assign cards to each player alternating 
function dealCards () {
    // Reset the game
    player.hand.length = 0
    player.score = 0
    dealer.hand.length = 0
    dealer.score = 0
    dSecondCard.src = ''
    dSecondCard.classList.add('.hiddenCard')
    // Start deal
    player.hand.push(randomCard())
    pFirstCard.src = player.hand[0].img
    handScore(player)
    scoreCard(player, playScore)
    dealer.hand.push(randomCard())
    // handScore(dealer)
    // scoreCard(dealer,dealScore)
    // console.log(`Player hand: ${player.hand[0].value}, `)
    // console.log(`Dealer has: ${dealerHand[0].value},`)
    player.hand.push(randomCard())
    pSecondCard.src = player.hand[1].img
    handScore(player)
    scoreCard(player, playScore)
    // console.log(`Player hand: ${player.hand[0].value}, ${player.hand[1].value}`)
    // console.log(`Dealer has: ${dealerHand[0].value},`)
    dealer.hand.push(randomCard())
    dealScore.innerHTML = dealer.hand[1].value
    dFirstCard.src = dealer.hand[1].img
    console.log(`Player hand: ${player.hand[0].value}, ${player.hand[1].value}`)
    console.log(`Dealer has: ${dealer.hand[0].value}, ${dealer.hand[1].value}`)
    console.log(`${player.score} is player score`)
}
// ace value change
function aceCheck(){
    console.log('ace')
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
    handScore(player)
    scoreCard(player, playScore)
    bust(player.hand, playScore)
}
// dealer hit
function dealerHit(){
    
    dealer.hand.push(randomCard())
    console.log(`dealer hit`)
    handScore(dealer)
    scoreCard(dealer, dealScore)
    bust(dealer.hand, dealScore)
}
// decide winner
function decideWinner () {
    if (player.score > dealer.score && player.score <= 21){
        console.log('Player wins!')
        console.log(`player score: ${player.score} dealer score: ${dealer.score}`)
    } else if(player.score < dealer.score && dealer.score <= 21) {
        console.log('House wins!')
        console.log(`player score: ${player.score} dealer score: ${dealer.score}`)
    } else {
        console.log(`${player.score} versus ${dealer.score}`)
    }
}
// dealer play
function dealerTurn (){
    while (dealer.hand.reduce(function(acc,current){
        return current.value + acc
    },0) <= 15) {
        dealerHit()
    }
    decideWinner()
}
// stand function
function stand(){
    console.log(player.score)
    console.log(dealer.score)
    handScore(dealer)
    scoreCard(dealer, dealScore)
    dSecondCard.classList.remove('hiddenCard')
    dSecondCard.src = dealer.hand[0].img
    dealerTurn()
}

// event listeners
dealBttn.addEventListener('click',dealCards)
hitBttn.addEventListener('click',hit)
standBttn.addEventListener('click', stand)