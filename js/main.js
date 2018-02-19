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

    if (cardOneInPlay === cardTwoInPlay) {
        alert("Its a match!")
    } else {
        alert("Its not a match!")
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
        let dataId = cardElement.getAttribute('data-id')
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
