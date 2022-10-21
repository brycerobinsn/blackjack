
// select elements
const ruleBttn = document.getElementById(`rules`)
const dealBttn = document.getElementById('dealCards')
const hitBttn = document.getElementById('hit')
const standBttn = document.getElementById('stand')
const dealScore = document.getElementById('dealerScore')
const playScore = document.getElementById('playerScore')
const pFirstCard = document.getElementById('playerFirst')
const pSecondCard = document.getElementById('playerSecond')
const dealerText = document.getElementById('dealerText')
const playerText = document.getElementById('playerText')
const dFirstCard = document.getElementById('dealerFirst')
const dSecondCard = document.getElementById('dealerSecond')
const loserClass = document.querySelector('loser')
const divs = document.querySelectorAll('div')
const ulPlayer = document.getElementById('playerHits')
const ulDealer = document.getElementById('dealerHits')


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
    img: `img/SVG-cards-1.3/ace_of_spades.svg`

},
{
    value: 2,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/2_of_spades.svg'
},
{
    value: 3,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/3_of_spades.svg'
},
{
    value: 4,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/4_of_spades.svg'
},
{
    value: 5,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/5_of_spades.svg'
},
{
    value: 6,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/6_of_spades.svg'
},
{
    value: 7,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/7_of_spades.svg'
},
{
    value: 8,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/8_of_spades.svg'
},
{
    value: 9,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/9_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/10_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/jack_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/queen_of_spades.svg'
},
{
    value: 10,
    suit:'Spade',
    img: 'img/SVG-cards-1.3/king_of_spades.svg'
},
{
    value: 11,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/ace_of_clubs.svg'
},
{
    value: 2,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/2_of_clubs.svg'
},
{
    value: 3,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/3_of_clubs.svg'
},
{
    value: 4,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/4_of_clubs.svg'
},
{
    value: 5,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/5_of_clubs.svg'
},
{
    value: 6,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/6_of_clubs.svg'
},
{
    value: 7,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/7_of_clubs.svg'
},
{
    value: 8,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/8_of_clubs.svg'
},
{
    value: 9,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/9_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/10_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/jack_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/queen_of_clubs.svg'
},
{
    value: 10,
    suit: 'Club',
    img: 'img/SVG-cards-1.3/king_of_clubs.svg'
},
{
    value: 11,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/ace_of_diamonds.svg'
},
{
    value: 2,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/2_of_diamonds.svg'
},
{
    value: 3,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/3_of_diamonds.svg'
},
{
    value: 4,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/4_of_diamonds.svg'
},
{
    value: 5,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/5_of_diamonds.svg'
},
{
    value: 6,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/6_of_diamonds.svg'
},
{
    value: 7,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/7_of_diamonds.svg'
},
{
    value: 8,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/8_of_diamonds.svg'
},
{
    value: 9,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/9_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/10_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/jack_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/queen_of_diamonds.svg'
},
{
    value: 10,
    suit: 'Diamond',
    img: 'img/SVG-cards-1.3/king_of_diamonds.svg'
},
{
    value: 11,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/ace_of_hearts.svg'
},
{
    value: 2,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/2_of_hearts.svg'
},
{
    value: 3,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/3_of_hearts.svg'
},
{
    value: 4,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/4_of_hearts.svg'
},
{
    value: 5,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/5_of_hearts.svg'
},
{
    value: 6,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/6_of_hearts.svg'
},
{
    value: 7,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/7_of_hearts.svg'
},
{
    value: 8,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/8_of_hearts.svg'
},
{
    value: 9,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/9_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/10_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/jack_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/queen_of_hearts.svg'
},
{
    value: 10,
    suit: 'Heart',
    img: 'img/SVG-cards-1.3/king_of_hearts.svg'
},
]

// functions
// multiple decks
function multiDeck (numDeck) {
    for (idx = 0; idx < numDeck; idx++){
       for (i = 0; i < deckArr.length; i++){
            gameDeck.push(deckArr[i])

        }

    }
}
multiDeck(1)
// random number to find card value
function randomCard () {
    const card =  Math.floor(Math.random() * (gameDeck.length))
    gameDeck.splice(card,1)
    return gameDeck[card]

}
// score calculator
function handScore (cards) {

    const score = cards.hand.reduce(function(acc,current){
        cards.score += current.value
        return current.value + acc
    },0)
    return cards.score = score
}
function scoreCard (cards, message) {
    message.innerHTML = `Score: ` + cards.score
}
// remove excess cards
function hitCardRemover(hitCard) {
    const extraCards = document.getElementsByClassName(hitCard)
    while(extraCards.length > 0) {
        extraCards[0].parentNode.removeChild(extraCards[0])
    }
}
// reset game 
function gameReset() {
    player.hand.length = 0
    player.score = 0
    dealer.hand.length = 0
    dealer.score = 0
    dSecondCard.src = `img/cardBackPurple.png`
    dFirstCard.src = `img/cardBackPurple.png`
    pFirstCard.src = `img/cardBackPurple.png`
    pSecondCard.src = `img/cardBackPurple.png`
    dSecondCard.classList.add('.hiddenCard')
    playerText.innerHTML = ''
    dealerText.innerHTML= ''
    hitCardRemover('hitCard')
    divs.forEach(function(undo) {
        undo.classList.remove(`push`, `loser`,`bust`)
    })
    
}
// assign cards to each player alternating 
function dealCards () {
    // Reset the game
    gameReset()
    // Start deal
    player.hand.push(randomCard())
    pFirstCard.src = player.hand[0].img
    handScore(player)
    scoreCard(player, playScore)
    dealer.hand.push(randomCard())
    player.hand.push(randomCard())
    pSecondCard.src = player.hand[1].img
    handScore(player)
    scoreCard(player, playScore)
    dealer.hand.push(randomCard())
    dealScore.innerHTML = 'Score: ' + dealer.hand[1].value
    dFirstCard.src = dealer.hand[1].img
    if(handScore(player) == 21 || handScore(dealer) == 21){
        decideWinner()
    }

}
// ace value find
function aceCheck(cards){
    if(cards.find((card) => card.value == 11)) {
        return true
    }
    return false
    
}
// bust function changes ace value as well
function bust(cards, message) {
    const sumHand = cards.reduce(function(acc,current){
        return current.value + acc
    }, 0)
    if (sumHand > 21 && aceCheck(cards) === true ){
        const aceIdx = cards.findIndex((card) => card.value == 11)
        cards[aceIdx].value = 1
    } else if (sumHand > 21) {
        message.innerHTML = `${sumHand} BUST`
        message.classList.add('bust')
        return true
    } else {
        return false
    }
}

// hit function
function hit(){
    const liEl = document.createElement(`li`)
    const imgEl = document.createElement('img')
    player.hand.push(randomCard())
    //append card to board
    imgEl.setAttribute('src', player.hand[player.hand.length -1].img)
    imgEl.setAttribute('class', 'hitCard')
    liEl.appendChild(imgEl)
    document.getElementById('playerHits').appendChild(imgEl)
    handScore(player)
    scoreCard(player, playScore)
    if (bust(player.hand, playScore) === true){
        dealerText.innerHTML = `House Wins!`
        document.getElementById(`containerDealer`).classList.add('push')
        document.getElementById('containerPlayer').classList.add('loser')
    }
}
// dealer hit
function dealerHit(){
    const liEl = document.createElement(`li`)
    const imgEl = document.createElement('img')
    
    dealer.hand.push(randomCard())
    //append card to board
    imgEl.setAttribute('src', dealer.hand[dealer.hand.length -1].img)
    imgEl.setAttribute('class', 'hitCard')
    liEl.appendChild(imgEl)
    document.getElementById('dealerHits').appendChild(imgEl)
    
    handScore(dealer)
    scoreCard(dealer, dealScore)
    if (bust(dealer.hand, dealScore) === true) {
        playerText.innerHTML = `You Win!`
        document.getElementById(`containerPlayer`).classList.add(`push`)
        document.getElementById('containerDealer').classList.add('loser')
    }
}
// decide winner
function decideWinner () {
    if (player.score > dealer.score && player.score <= 21){
        
        playerText.innerHTML = `You Win!`
        document.getElementById(`containerPlayer`).classList.add(`push`)
        document.getElementById('containerDealer').classList.add('loser')
        
    } else if(player.score < dealer.score && dealer.score <= 21) {

        dealerText.innerHTML = `House Wins!`
        document.getElementById(`containerDealer`).classList.add('push')
        document.getElementById('containerPlayer').classList.add('loser')

    } else if (player.score == dealer.score){
        dealerText.innerHTML = 'PUSH'
        playerText.innerHTML = 'PUSH'
        document.getElementById(`containerDealer`).classList.add('push')
        document.getElementById(`containerPlayer`).classList.add('push')

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
    handScore(dealer)
    scoreCard(dealer, dealScore)
    dSecondCard.classList.remove('hiddenCard')
    dSecondCard.src = dealer.hand[0].img
    dealerTurn()
}
// rule popout
function rulePopOut () {
    const popout = document.getElementById(`rulePop`)
    popout.classList.toggle('show')
}
// event listeners
dealBttn.addEventListener('click',dealCards)
hitBttn.addEventListener('click',hit)
standBttn.addEventListener('click', stand)
ruleBttn.addEventListener('click', rulePopOut)