var cards = [
{
rank:"queen",
suit:"hearts",
cardImage:"images/queen-of-hears.png"
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
	
	function checkForMatch(){
		if(cardsInPlay[0]=== cardsInPlay[1]){
			alert("You found a match!");
		}else{
			alert("Sorry try again");
		}		
	}

	function flipCard(cardID){
		console.log("User flipped " + cards[cardID].rank);
		console.log(cards[cardID].suit);
		console.log(cards[cardID].cardImage);

		cardsInPlay.push(cards[cardID].rank);

		if(cardsInPlay.length === 2){
			checkForMatch();
		}
	}

flipCard(0);
flipCard(2);



