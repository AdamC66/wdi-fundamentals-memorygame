var cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hearts.png"
},
{
rank:"queen",
suit:"diamonds",
cardImage:"images/queen-of-diamonds.png"
},
{
rank:"king",
suit:"hearts",
cardImage:"images/king-of-hearts.png"
},
{
rank:"king",
suit:"diamonds",
cardImage:"images/king-of-diamonds.png"
},


];
var cardsInPlay = [];
var cardElement;
	function createBoard() {
		for (var i = 0; i < cards.length; i++) {
			cardElement = document.createElement('img');
			cardElement.setAttribute('src', 'images/back.png');
			cardElement.setAttribute('data-id', i);
			cardElement.addEventListener('click',flipCard);
			document.getElementById('game-board').appendChild(cardElement);
		}
	}	
	function checkForMatch(){
		if(cardsInPlay[0]=== cardsInPlay[1]){
			alert("You found a match!");
			cardsInPlay= [];
		}else{
			alert("Sorry try again");
			cardsInPlay= [];
			
		}		
	}

	function flipCard(){
		var cardID = this.getAttribute('data-id')
		console.log("User flipped " + cards[cardID].rank);
		console.log(cards[cardID].suit);
		console.log(cards[cardID].cardImage);
		cardsInPlay.push(cards[cardID].rank);
		this.setAttribute('src',cards[cardID].cardImage);


		if(cardsInPlay.length === 2){
			checkForMatch();
		}
	}

//may need to move this

//may need to move this

createBoard();
