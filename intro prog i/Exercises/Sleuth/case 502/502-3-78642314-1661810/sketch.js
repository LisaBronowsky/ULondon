/*

Officer: 1661810
CaseNum: 502-3-78642314-1661810

Case 502 - A donation - stage 4

This final document will seal the deal kid. C’mon kid. Let’s send these crooks down.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + array[index].property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var A_Censored = [
{
	Element_0: {Word_0: "radiate", Word_1: "charge", Word_2: "consider", Word_3: "plug"}, 
	Element_1: {Word_0: "mend", Word_1: "rejoice", Word_2: "consider", Word_3: "bake"}, 
	Element_2: {Word_0: "sail", Word_1: "Governor Zuckerberg", Word_2: "rejoice", Word_3: "plug"}
},
{
	Element_0: {Word_0: "hurry", Word_1: "clip", Word_2: "sail", Word_3: "radiate"}, 
	Element_1: {Word_0: "play", Word_1: "ALGOL", Word_2: "tug", Word_3: "sneeze"}, 
	Element_2: {Word_0: "stuff", Word_1: "rejoice", Word_2: "succeed", Word_3: "protect"}
},
{
	Element_0: {Word_0: "succeed", Word_1: "clip", Word_2: "protect", Word_3: "plug"}, 
	Element_1: {Word_0: "stuff", Word_1: "tug", Word_2: "mend", Word_3: "donation"}, 
	Element_2: {Word_0: "charge", Word_1: "start", Word_2: "hurry", Word_3: "play"}
},
{
	Element_0: {Word_0: "fence", Word_1: "play", Word_2: "charge", Word_3: "charge"}, 
	Element_1: {Word_0: "smile", Word_1: "charge", Word_2: "meddle", Word_3: "plug"}, 
	Element_2: {Word_0: "consider", Word_1: "meddle", Word_2: "bake", Word_3: "sail"}
},
{
	Element_0: {Word_0: "charge", Word_1: "radiate", Word_2: "stuff", Word_3: "rejoice"}, 
	Element_1: {Word_0: "hurry", Word_1: "consider", Word_2: "fence", Word_3: "succeed"}, 
	Element_2: {Word_0: "hurry", Word_1: "fence", Word_2: "mend", Word_3: "rejoice"}
}];

var B_Censored = [
{
	Element_0: {Word_0: "plug", Word_1: "succeed", Word_2: "fence", Word_3: "charge"}, 
	Element_1: {Word_0: "start", Word_1: "meddle", Word_2: "hurry", Word_3: "stuff"}, 
	Element_2: {Word_0: "succeed", Word_1: "clip", Word_2: "tug", Word_3: "tug"}
},
{
	Element_0: {Word_0: "ALGOL fish wholesalers", Word_1: "smile", Word_2: "sneeze", Word_3: "rejoice"}, 
	Element_1: {Word_0: "start", Word_1: "Edsger", Word_2: "start", Word_3: "protect"}, 
	Element_2: {Word_0: "succeed", Word_1: "clip", Word_2: "meddle", Word_3: "stuff"}
},
{
	Element_0: {Word_0: "hurry", Word_1: "you", Word_2: "plug", Word_3: "fence"}, 
	Element_1: {Word_0: "succeed", Word_1: "start", Word_2: "smile", Word_3: "hurry"}, 
	Element_2: {Word_0: "protect", Word_1: "play", Word_2: "protect", Word_3: "hurry"}
},
{
	Element_0: {Word_0: "rejoice", Word_1: "tug", Word_2: "play", Word_3: "consider"}, 
	Element_1: {Word_0: "syndicate", Word_1: "development", Word_2: "mend", Word_3: "play"}, 
	Element_2: {Word_0: "tug", Word_1: "succeed", Word_2: "tug", Word_3: "smile"}
},
{
	Element_0: {Word_0: "$200,000", Word_1: "play", Word_2: "fence", Word_3: "COBOL"}, 
	Element_1: {Word_0: "radiate", Word_1: "mend", Word_2: "consider", Word_3: "meddle"}, 
	Element_2: {Word_0: "plug", Word_1: "hurry", Word_2: "rejoice", Word_3: "tug"}
}];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
  createCanvas(1280, 800);

  // replace all redacted words with the correct values from the data structures above

  missingWords = "Edsger, donation, $200,000, ALGOL, you, ALGOL fish wholesalers, syndicate, development, COBOL, Governor Zuckerberg";

  redactedText = "My dearest " + B_Censored[1].Element_1.Word_1 + ", I have just received your very generous " +  A_Censored[2].Element_1.Word_3 + " of " + B_Censored[4].Element_0.Word_0 + ". Thank you. This will be invaluable to our campaign." + A_Censored[1].Element_1.Word_1 + " is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of " + B_Censored[2].Element_0.Word_1 + " or " + B_Censored[1].Element_0.Word_0 + " to the " + B_Censored[3].Element_1.Word_0 + ". Your new" + B_Censored[3].Element_1.Word_1 + " at the " + B_Censored[4].Element_0.Word_3 + " can now proceed without impediment. Yours sincerely, " + A_Censored[0].Element_2.Word_1;

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
