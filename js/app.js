let playerScore = 0;
let computerScore = 0;

const playARound = () => {

deck = [
    {
      name: "Bulbasaur",
      damage: 60
    }, {
      name: "Caterpie",
      damage: 40
    }, {
      name: "Charmander",
      damage: 60
    }, {
      name: "Clefairy",
      damage: 50
    }, {
      name: "Jigglypuff",
      damage: 60
    }, {
      name: "Mankey",
      damage: 30
    }, {
      name: "Meowth",
      damage: 60
    }, {
      name: "Nidoran - female",
      damage: 60
    }, {
      name: "Nidoran - male",
      damage: 50
    }, {
      name: "Oddish",
      damage: 40
    }, {
      name: "Pidgey",
      damage: 50
    }, {
      name: "Pikachu",
      damage: 50
    }, {
      name: "Poliwag",
      damage: 50
    }, {
      name: "Psyduck",
      damage: 60
    }, {
      name: "Rattata",
      damage: 30
    }, {
      name: "Squirtle",
      damage: 60
    }, {
      name: "Vulpix",
      damage: 50
    }, {
      name: "Weedle", 
      damage: 40
    }
  ];

const player = {
    hand: []
}

const computer = {
    hand: []
}


// the function to deal out from the deck
const dealOut = () => {
  player.hand = [];
  computer.hand = [];
  const deckDeal = deck;

  for(let i =0; i<3; i++){
      const randomCard = Math.floor(Math.random()*deckDeal.length);
      player.hand.push(deckDeal[randomCard]);
      deckDeal.splice([randomCard],1);
  };

  for(let i =0; i<3; i++){
      const randomCard = Math.floor(Math.random()*deckDeal.length);
      computer.hand.push(deckDeal[randomCard]);
      deckDeal.splice([randomCard],1);
  }
}

// a round

  dealOut();
  // console.logged dealOut() here, and the deck is being dealt correctly

  // these variables turned out to be unnecessary, but oh well
  const playerHandCopy = player.hand;
  const computerHandCopy = computer.hand;

    for(let i=0; i<1; i++){
        const playerCardIndex = Math.floor(Math.random()*playerHandCopy.length);
        const playerCard = playerHandCopy[playerCardIndex];
        // playerHandCopy.splice(playerCardIndex,1);

        const computerCardIndex = Math.floor(Math.random()*computerHandCopy.length);
        const computerCard = computerHandCopy[computerCardIndex];
        // computerHandCopy.splice(computerCardIndex,1);

        // console.log("FOR LOOP RUNNING");
        // console.log(playerCard.damage);
        // console.log(computerCard.damage);

        if(playerCard.damage > computerCard.damage){
            playerScore++;
        }
        if(playerCard.damage < computerCard.damage){
            computerScore++;
        }
        console.log(`COMPUTER SCORE IS ${computerScore} AND PLAYER SCORE IS ${playerScore}.`);
        // console.log(playerHandCopy);
    }
}

while(playerScore !== 3 || computerScore !==3){
  playARound();
  if(computerScore === 3){
    console.log(`COMPUTER WINS`);
    break;
  }
  if(playerScore === 3){
    console.log(`PLAYER WINS`);
    break;
  };
}