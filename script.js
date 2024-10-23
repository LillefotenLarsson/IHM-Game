document.addEventListener('DOMContentLoaded', () => {
  const lettersArray = [
    { letter: 'A' }, { letter: 'A' },
    { letter: 'B' }, { letter: 'B' },
    { letter: 'C' }, { letter: 'C' },
    { letter: 'D' }, { letter: 'D' },
    { letter: 'E' }, { letter: 'E' },
    { letter: 'F' }, { letter: 'F' },
    { letter: 'G' }, { letter: 'G' },
    { letter: 'H' }, { letter: 'H' }
  ];

  // Shuffle letters
  lettersArray.sort(() => 0.5 - Math.random());

  const gameBoard = document.getElementById('game-board');
  let chosenCards = [];
  let chosenLetters = [];

  // Create board
  function createBoard() {
    lettersArray.forEach((item, index) => {
      const card = document.createElement('div');
      card.setAttribute('data-id', index);
      card.classList.add('card');
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  }

  // Flip card
  function flipCard() {
    const cardId = this.getAttribute('data-id');
    chosenCards.push(this);
    chosenLetters.push(lettersArray[cardId].letter);
    this.textContent = lettersArray[cardId].letter;
    this.classList.add('flip');

    if (chosenCards.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  // Check for match
  function checkForMatch() {
    const [firstCard, secondCard] = chosenCards;

    if (chosenLetters[0] === chosenLetters[1]) {
      firstCard.classList.add('hidden');
      secondCard.classList.add('hidden');
    } else {
      firstCard.textContent = '';
      secondCard.textContent = '';
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }

    chosenCards = [];
    chosenLetters = [];
  }

  createBoard();
});
