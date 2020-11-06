/*
802 - The case of Monte Carlo
Stage 4 - Club criminal


Officer: 1661810
CaseNum: 802-3-93775683-1661810

The card sharks from Rossling Polling are not pleased with your stellar performance and suspect foul play. They are challenging you to find a single card in the deck in just one cut.
The card you are looking for is stored in the cutLocation object. Cut the deck at this exact location and they will give up their secrets.

* Using a for loop search for the card represented by cutLocation in the playingCards array.
* Do this in a function called cutDeck and call it from setup.
* We need to be quick to not be spotted. Make sure you use a for loop and the break statement when you find a match in the deck.
* Store the cut card and all the elements after from the playingCards array in the deck_upto_cut array. Do this using the JavaScript splice() function
* You’ll then need to reverse the elements in deck_upto_cut so that the card we cut the deck at is the last element and not the first. Unfortunatly, if we use the JavaScript inbuilt reverse() function we’ll be spotted. You’ll have to write this yourself kid. Do this in the cutDeck after you have filled deck_upto_cut.


*You also need to write a shuffleSeed() function. Same as before, it needs to return an array of 52 random integers but set the random value to start at 0 and end at 96.
Make sure you use the push method to add values to your array and the round function to convert your random values to integers.
*Call shuffleSeed in setup and use the return value as the argument for shuffleDeck().

*/

var playingCards = [{"type":"Spades","no":"A"},{"type":"Spades","no":"2"},{"type":"Spades","no":"3"},{"type":"Spades","no":"4"},{"type":"Spades","no":"5"},{"type":"Spades","no":"6"},{"type":"Spades","no":"7"},{"type":"Spades","no":"8"},{"type":"Spades","no":"9"},{"type":"Spades","no":"10"},{"type":"Spades","no":"J"},{"type":"Spades","no":"Q"},{"type":"Spades","no":"K"},{"type":"Clubs","no":"A"},{"type":"Clubs","no":"2"},{"type":"Clubs","no":"3"},{"type":"Clubs","no":"4"},{"type":"Clubs","no":"5"},{"type":"Clubs","no":"6"},{"type":"Clubs","no":"7"},{"type":"Clubs","no":"8"},{"type":"Clubs","no":"9"},{"type":"Clubs","no":"10"},{"type":"Clubs","no":"J"},{"type":"Clubs","no":"Q"},{"type":"Clubs","no":"K"},{"type":"Hearts","no":"A"},{"type":"Hearts","no":"2"},{"type":"Hearts","no":"3"},{"type":"Hearts","no":"4"},{"type":"Hearts","no":"5"},{"type":"Hearts","no":"6"},{"type":"Hearts","no":"7"},{"type":"Hearts","no":"8"},{"type":"Hearts","no":"9"},{"type":"Hearts","no":"10"},{"type":"Hearts","no":"J"},{"type":"Hearts","no":"Q"},{"type":"Hearts","no":"K"},{"type":"Diamonds","no":"A"},{"type":"Diamonds","no":"2"},{"type":"Diamonds","no":"3"},{"type":"Diamonds","no":"4"},{"type":"Diamonds","no":"5"},{"type":"Diamonds","no":"6"},{"type":"Diamonds","no":"7"},{"type":"Diamonds","no":"8"},{"type":"Diamonds","no":"9"},{"type":"Diamonds","no":"10"},{"type":"Diamonds","no":"J"},{"type":"Diamonds","no":"Q"},{"type":"Diamonds","no":"K"}];
var deck_img;
var table_img;
var drawCounter = 0;

var cutLocation = {"cardSuit":"Spades","number":"Q"};
var deck_upto_cut = [];

function preload()
{
	deck_img = loadImage("deck.png");
	table_img = loadImage("table.png");
}
function setup()
{
	createCanvas(table_img.width, table_img.height);
	frameRate(30);


	//call your shuffleSeed() function here. Followed by a call to shuffleDeck with the return value of shuffleSeed() as an argument.
    var returned = shuffleSeed();
    shuffleDeck(returned);
	//call your cutDeck function here
    cutDeck();

}

//write your cutDeck function here
function cutDeck(){
    for(var i=0; i<playingCards.length; i++){
        if(playingCards[i].type == cutLocation.cardSuit && playingCards[i].no == cutLocation.number){
                deck_upto_cut = playingCards.splice(i);
        }
        break;
    }
    var reversed = [];
    for(var m=deck_upto_cut.length-1; m>-1; m--){
        reversed.push(deck_upto_cut[m]);
    }
    deck_upto_cut = reversed;
}

//write your shuffleSeed() function here.
function shuffleSeed(){
    var arr = [];
    for(var i=0; i<52; i++){
        arr.push(round(random(0, 96)));
    }
    return arr;
}

/////////////////////DON'T CHANGE ANYTHING BELOW HERE/////////////////////////
function shuffleDeck(shuffleSeed)
{
		//shuffle the deck by rotating the cards location with the values in
		//shuffleSeed. Repeat this a random number of times between 20 and 50
    var shuffleIterations = parseInt(random(20, 50));
    for(var i = 0; i < shuffleIterations; i++)
    {
	   for (var j = 0; j < playingCards.length; j++)
	   {
		  var tempCard = playingCards.splice(j, 1);
          var newLoc = (j + shuffleSeed[j])%52;
          playingCards.splice(newLoc, 0, tempCard[0]);
	   }
    }
}

function draw()
{
	image(table_img, 0, 0);

	if (frameCount % 7 == 0)
	{
		drawCounter++;
		if (drawCounter == 5)
		{
			noLoop();
		}
	}
	for (var i = 0; i < drawCounter; i++)
	{
		if(i < deck_upto_cut.length)
		{
			drawCard(deck_upto_cut[i], 880 + i * 18, 750);
		}
	}


}


function drawCard(card, x, y)
{

	var values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
	var suits = ["Spades", "Clubs", "Hearts", "Diamonds"];

	for (var i = 0; i < suits.length; i++)
	{
		for (var j = 0; j < values.length; j++)
		{
			if (card.no == values[j] && card.type == suits[i])
			{
			//img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight
				image(deck_img, j * 200, i * 300, 200, 300, x, y, 100, 150);
				break;
			}
		}
	}
}
