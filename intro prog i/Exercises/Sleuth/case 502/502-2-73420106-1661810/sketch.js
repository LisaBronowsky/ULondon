/*

Officer: 1661810
CaseNum: 502-2-73420106-1661810

Case 502 - Out of the picture - stage 3

Yet another document has come my way. This one is even more tricky to decipher.
The Governor must really have something to hide.

In setup, fill in the redactedText String variable by replacing the redacted words
with references to the two arrays containing the missing pieces.
you can do this by indexing the appropriate items from the respective arrays.

There are many possible ways of completing this task,
but you should ONLY use the following commands:

" + object.property[index] + "

*/

// you dont need to change these
var missingWords;
var redactedText;

// arrays containing the names needed to fill in the paragraph
var evidence_A = {
	fragment_0: [ "bake", "consider", "succeed"], 
	fragment_1: [ "tug", "plug", "rejoice"], 
	fragment_2: [ "fence", "charge", "plug"], 
	fragment_3: [ "tug", "succeed", "bake"], 
	fragment_4: [ "consider", "Hopper", "tug"], 
	fragment_5: [ "sneeze", "sail", "stuff"], 
	fragment_6: [ "sail", "charge", "radiate"], 
	fragment_7: [ "stuff", "start", "ALGOL"], 
	fragment_8: [ "tug", "mend", "plug"], 
	fragment_9: [ "start", "mend", "stuff"]
};

var evidence_B = {
	fragment_0: [ "mend", "campaign", "charge"], 
	fragment_1: [ "bake", "tug", "bake"], 
	fragment_2: [ "sneeze", "a donation", "meddle"], 
	fragment_3: [ "$200,000", "radiate", "consider"], 
	fragment_4: [ "radiate", "tug", "smile"], 
	fragment_5: [ "mend", "bake", "hit"], 
	fragment_6: [ "Edsger", "start", "smile"], 
	fragment_7: [ "play", "stuff", "fence"], 
	fragment_8: [ "syndicate", "stuff", "charge"], 
	fragment_9: [ "Governor Zuckerberg", "sneeze", "meddle"]
};

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

  missingWords = "Governor Zuckerberg, a donation, campaign, $200,000, Hopper, syndicate, hit, ALGOL, Edsger";

  redactedText = "Dear " + evidence_B.fragment_9[0] + " , I am sure that something could be worked out in terms of " + evidence_B.fragment_2[1] + " for your " + evidence_B.fragment_0[1] + " . How does " + evidence_B.fragment_3[0] + " sound ? I am afraid I will need to be so crude as to spell out what ALGOL requires in return. " + evidence_A.fragment_4[1] + " needs to be out of the picture. She’s caused enough trouble. Get the " + evidence_B.fragment_8[0] + " to organise the " + evidence_B.fragment_5[2] + " but I’d prefer it you don’t mention me or " + evidence_A.fragment_7[2] + ". I owe them enough favours already. Your old friend, " + evidence_B.fragment_6[0];

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
