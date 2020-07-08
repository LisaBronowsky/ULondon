/*

Officer: 1661810
CaseNum: 502-1-75380096-1661810

Case 502 - A delicate matter - stage 2

We’re hot on the trail kid, and another document has come my way.
It’s a little more tricky to decipher but I know you can do it.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + Array[index].property + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var CensoredA = [
	{RedactedWord0: "succeed", RedactedWord1: "radiate", RedactedWord2: "Hopper’s"}, 
	{RedactedWord0: "clip", RedactedWord1: "mend", RedactedWord2: "tug"}, 
	{RedactedWord0: "clip", RedactedWord1: "she has", RedactedWord2: "romantic"}, 
	{RedactedWord0: "clip", RedactedWord1: "rejoice", RedactedWord2: "sail"}, 
	{RedactedWord0: "clip", RedactedWord1: "succeed", RedactedWord2: "tug"}, 
	{RedactedWord0: "mend", RedactedWord1: "radiate", RedactedWord2: "delicate"}, 
	{RedactedWord0: "hurry", RedactedWord1: "protect", RedactedWord2: "fence"}, 
	{RedactedWord0: "clip", RedactedWord1: "stuff", RedactedWord2: "fence"}, 
	{RedactedWord0: "rejoice", RedactedWord1: "bake", RedactedWord2: "succeed"}, 
	{RedactedWord0: "play", RedactedWord1: "rejoice", RedactedWord2: "smile"}
];

var CensoredB = [
	{RedactedWord0: "sail", RedactedWord1: "hurry", RedactedWord2: "mend"}, 
	{RedactedWord0: "mend", RedactedWord1: "succeed", RedactedWord2: "start"}, 
	{RedactedWord0: "a donation", RedactedWord1: "smile", RedactedWord2: "bake"}, 
	{RedactedWord0: "COBOL", RedactedWord1: "meddle", RedactedWord2: "succeed"}, 
	{RedactedWord0: "tug", RedactedWord1: "Edsger", RedactedWord2: "protect"}, 
	{RedactedWord0: "meddle", RedactedWord1: "radiate", RedactedWord2: "Governor Zuckerberg"}, 
	{RedactedWord0: "bake", RedactedWord1: "fence", RedactedWord2: "meddle"}, 
	{RedactedWord0: "capital", RedactedWord1: "hurry", RedactedWord2: "protect"}, 
	{RedactedWord0: "charge", RedactedWord1: "plug", RedactedWord2: "meddle"}, 
	{RedactedWord0: "syndicate", RedactedWord1: "fence", RedactedWord2: "play"}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280,800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, Hopper’s, she has, romantic, COBOL, syndicate, delicate, capital, a donation, Governor Zuckerberg";

  redactedText = "My dearest " + CensoredB[4].RedactedWord1 + ", Please don’t doubt my sincerity when I say that I hadn’t the faintest idea about " + CensoredA[0].RedactedWord2 + " intervention. I suspect that" + CensoredA[2].RedactedWord1 + " a " + CensoredA[2].RedactedWord2 + " interest at the " + CensoredB[3].RedactedWord0 + ". I and the " + CensoredB[9].RedactedWord0 + " appreciate your many contributions over the years. However, this is a most " + CensoredA[5].RedactedWord2 + " matter which would require significant " + CensoredB[7].RedactedWord0 + " for me to deal with it satisfactorily. I would not be so crude as to suggest a sum but perhaps " + CensoredB[2].RedactedWord0 + " to my forthcoming campaign would help. Yours sincerely, " + CensoredB[5].RedactedWord2;

}

function draw()
{
  // you don't need to change this
  image(backgroundImg, 0, 0);
  stroke(0);
  strokeWeight(3);
  line(width/2, 10, width/2, height - 10);
  noStroke();
  textFont(myFont);
  textSize(14);
  text(redactedText, 30, 100, 580, 600);
  text(missingWords, 670, 100, 580, 600);
}
