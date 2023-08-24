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
let handInProgress = false;
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

// functions
// create deck
function createDeck() {
    const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    const values = [
        { value: 11, name: 'ace'},
        { value: 2, name: '2'},
        { value: 3, name: '3'},
        { value: 4, name: '4'},
        { value: 5, name: '5'},
        { value: 6, name: '6'},
        { value: 7, name: '7'},
        { value: 8, name: '8'},
        { value: 9, name: '9'},
        { value: 10, name: '10'},
        { value: 10, name: 'jack'},
        { value: 10, name: 'queen'},
        { value: 10, name: 'king'},
    ];

    const deckArr = [];

    suits.forEach((suit) => {
        values.forEach((cardValue) => {
            const card = {
                value: cardValue.value,
                suit: suit,
                img: `img/SVG-cards-1.3/${cardValue.name}_of_${suit.toLowerCase()}.svg`
            };
            deckArr.push(card);
        })
    })
    return deckArr;
}

const deckArr = createDeck();
// multiple decks
function multiDeck (numDeck) {
    for (let idx = 0; idx < numDeck; idx++){
       for (let i = 0; i < deckArr.length; i++){
            gameDeck.push(deckArr[i]);
        }
    }
}
multiDeck(1)
// random number to find card value
function randomCard () {
    const cardIndex = Math.floor(Math.random() * gameDeck.length);
    const card = gameDeck[cardIndex];
    gameDeck.splice(cardIndex, 1);
    return card;

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
    handInProgress = true;
    // Reset the game
    gameReset()
    // Start deal
    player.hand.push(randomCard())
    pFirstCard.src = player.hand[0].img
    pFirstCard.classList.add('card-animation');
    handScore(player)
    scoreCard(player, playScore)
    dealer.hand.push(randomCard())
    player.hand.push(randomCard())
    pSecondCard.src = player.hand[1].img
    pSecondCard.classList.add('card-animation');
    handScore(player)
    scoreCard(player, playScore)
    dealer.hand.push(randomCard())
    dealScore.innerHTML = 'Score: ' + dealer.hand[1].value
    dFirstCard.src = dealer.hand[1].img
    dFirstCard.classList.add('card-animation');
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
function endGameWithBust() {
    dealerText.innerHTML = "House Wins!";
    document.getElementById("containerDealer").classList.add("push");
    document.getElementById("containerPlayer").classList.add("loser");
}
// bust function changes ace value as well
function bust(cards, message) {
    const sumHand = cards.reduce(function(acc,current){
        return current.value + acc;
    }, 0)
    if (sumHand > 21 && aceCheck(cards) === true ){
        const aceIdx = cards.findIndex((card) => card.value == 11);
        cards[aceIdx].value = 1;
    } else if (sumHand > 21) {
        message.innerHTML = `${sumHand} BUST`;
        message.classList.add('bust');
        endGameWithBust();
        return true;
    } else {
        return false;
    }
}

// hit function
function hit(){
    if(handInProgress) {
        const liEl = document.createElement(`li`);
        const imgEl = document.createElement('img');
        handScore(player);
        if(player.score > 0 && player.score <= 21){
            player.hand.push(randomCard());
            //append card to board
            imgEl.setAttribute('src', player.hand[player.hand.length -1].img);
            imgEl.setAttribute('class', 'hitCard card-animation');
            liEl.appendChild(imgEl);
            document.getElementById('playerHits').appendChild(imgEl);
            handScore(player);
            scoreCard(player, playScore);
            bust(player.hand, playScore);
        }
    return;
    }
}
// dealer hit
function dealerHit(){
    const liEl = document.createElement(`li`)
    const imgEl = document.createElement('img')
    
    dealer.hand.push(randomCard())
    //append card to board
    imgEl.setAttribute('src', dealer.hand[dealer.hand.length -1].img)
    imgEl.setAttribute('class', 'hitCard card-animation')
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
    handInProgress = false;
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