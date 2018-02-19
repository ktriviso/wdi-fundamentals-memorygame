let score = 0

if (localStorage) {
  console.log('LocalStorage is supported!')
  localStorage.setItem('user', score)
  console.log(localStorage.getItem('user'))
} else {
  console.log('No support. Use a fallback such as browser cookies or store on the server.')
}

const cards = [{
        rank: 'queen',
        suit: 'hearts',
        cardImage: "images/queen-of-hearts.png"

    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: "images/queen-of-diamonds.png"

    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: "images/king-of-hearts.png"

    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: "images/king-of-diamonds.png"

    }
]

const cardsInPlay = []
const checkForMatch = () => {
    let cardOneInPlay = cardsInPlay[0]
    let cardTwoInPlay = cardsInPlay[1]

    if (cardOneInPlay.rank === cardTwoInPlay.rank) {
        alert("Its a match!")
        score ++
    } else {
        alert("Its not a match!")
        score --
    }
}

const flipCard = (e) => {
    const cardOnTheDom = e.target
    const cardId = cardOnTheDom.getAttribute('data-id')
    const card = cards[cardId]

    cardOnTheDom.setAttribute('src', card.cardImage)
    cardsInPlay.push(card)
    if (cardsInPlay.length === 2) {
        checkForMatch()
    }
}

const createBoard = () => {
    const gameBoard = document.getElementById('game-board')

    for (let i = 0; i < cards.length; i++) {
        let cardElement = document.createElement('img')
        cardElement.src = 'images/back.png'
        cardElement.setAttribute('data-id', i)
        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    }
}
createBoard()

const reset = (e) => {
    window.location.reload()
}

const resetClick = () => {
    const resetButton = document.getElementById('reset-button')
    resetButton.addEventListener('click', reset)
}
resetClick()
