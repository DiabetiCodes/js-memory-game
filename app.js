document.addEventListener('DOMContentLoaded', () => {
  //card options
  const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random());

  //Selects div with class of grid to create game board
  const gameGrid = document.querySelector('.game-grid');
  const resultDisplay = document.querySelector('#result');
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  //Game Board
  function createBoard() {
    //Loops over card array and creates an image for each element
    for (let i = 0; i < cardArray.length; i++) {
      let card = document.createElement('img');
      //Each card created has attribute set that's linked to the relative path
      card.setAttribute('src', 'images/blank.png');
      //Loops over each card, adding an element-id attribute from 1 - 11
      card.setAttribute('data-id', i);
      //Listens for click event and invokes the flipCard function
      card.addEventListener('click', flipCard);
      //Adds to div with classname of grid
      gameGrid.appendChild(card);
    }
  }

//check for matches
function checkForMatch() {
  let cards = document.querySelectorAll('img');
  const optionOneId = cardsChosenId[0];
  const optionTwoId = cardsChosenId[1];
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match');
    cards[optionOneId].setAttribute('src', 'images/white.png');
    cards[optionTwoId].setAttribute('src', 'images/white.png');
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute('src', 'images/blank.png');
    cards[optionTwoId].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again');
  }
  cardsChosen = [];
  cardsChosenId = [];
  resultDisplay.textContent = cardsWon.length;
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!';
  }
}

  //Flip card
  function flipCard() {
    //gets data-id attribute from createBoard()
    let cardId = this.getAttribute('data-id');
    //pushes to cardArray[] based on specific cardId, gets name once card is located
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    //Sets image to cards on board to display what's underneath when picked based on cardId it holds
    this.setAttribute('src', cardArray[cardId].img);

    //we only want to aput 2 cards in the cardsChosen array at one time.
    if(cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  createBoard();
});