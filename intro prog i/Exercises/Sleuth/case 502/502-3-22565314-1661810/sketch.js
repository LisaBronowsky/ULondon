/*

Officer: 1661810
CaseNum: 502-3-22565314-1661810

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
var A_Evidence = [
{
	Bit_0: {Token_0: "tug", Token_1: "rejoice", Token_2: "clip", Token_3: "sail"}, 
	Bit_1: {Token_0: "start", Token_1: "start", Token_2: "smile", Token_3: "plug"}, 
	Bit_2: {Token_0: "tug", Token_1: "tug", Token_2: "radiate", Token_3: "clip"}
},
{
	Bit_0: {Token_0: "meddle", Token_1: "smile", Token_2: "charge", Token_3: "mend"}, 
	Bit_1: {Token_0: "charge", Token_1: "sneeze", Token_2: "tug", Token_3: "clip"}, 
	Bit_2: {Token_0: "stuff", Token_1: "play", Token_2: "consider", Token_3: "clip"}
},
{
	Bit_0: {Token_0: "play", Token_1: "smile", Token_2: "rejoice", Token_3: "sail"}, 
	Bit_1: {Token_0: "bake", Token_1: "ALGOL fish wholesalers", Token_2: "sneeze", Token_3: "smile"}, 
	Bit_2: {Token_0: "start", Token_1: "donation", Token_2: "charge", Token_3: "sneeze"}
},
{
	Bit_0: {Token_0: "hurry", Token_1: "clip", Token_2: "meddle", Token_3: "ALGOL"}, 
	Bit_1: {Token_0: "mend", Token_1: "hurry", Token_2: "development", Token_3: "protect"}, 
	Bit_2: {Token_0: "fence", Token_1: "rejoice", Token_2: "start", Token_3: "stuff"}
},
{
	Bit_0: {Token_0: "smile", Token_1: "protect", Token_2: "meddle", Token_3: "protect"}, 
	Bit_1: {Token_0: "clip", Token_1: "start", Token_2: "mend", Token_3: "mend"}, 
	Bit_2: {Token_0: "succeed", Token_1: "fence", Token_2: "Edsger", Token_3: "succeed"}
}];

var B_Evidence = [
{
	Bit_0: {Token_0: "rejoice", Token_1: "sneeze", Token_2: "stuff", Token_3: "sneeze"}, 
	Bit_1: {Token_0: "succeed", Token_1: "clip", Token_2: "bake", Token_3: "stuff"}, 
	Bit_2: {Token_0: "consider", Token_1: "mend", Token_2: "play", Token_3: "smile"}
},
{
	Bit_0: {Token_0: "fence", Token_1: "rejoice", Token_2: "radiate", Token_3: "charge"}, 
	Bit_1: {Token_0: "hurry", Token_1: "succeed", Token_2: "tug", Token_3: "fence"}, 
	Bit_2: {Token_0: "tug", Token_1: "stuff", Token_2: "plug", Token_3: "hurry"}
},
{
	Bit_0: {Token_0: "tug", Token_1: "you", Token_2: "clip", Token_3: "hurry"}, 
	Bit_1: {Token_0: "mend", Token_1: "smile", Token_2: "start", Token_3: "syndicate"}, 
	Bit_2: {Token_0: "clip", Token_1: "sail", Token_2: "rejoice", Token_3: "protect"}
},
{
	Bit_0: {Token_0: "mend", Token_1: "start", Token_2: "sneeze", Token_3: "smile"}, 
	Bit_1: {Token_0: "bake", Token_1: "$200,000", Token_2: "sneeze", Token_3: "tug"}, 
	Bit_2: {Token_0: "start", Token_1: "bake", Token_2: "sneeze", Token_3: "stuff"}
},
{
	Bit_0: {Token_0: "sneeze", Token_1: "hurry", Token_2: "protect", Token_3: "sail"}, 
	Bit_1: {Token_0: "sneeze", Token_1: "Governor Zuckerberg", Token_2: "COBOL", Token_3: "radiate"}, 
	Bit_2: {Token_0: "fence", Token_1: "plug", Token_2: "radiate", Token_3: "tug"}
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

  redactedText = "My dearest " + A_Evidence[4].Bit_2[2] + ", I have just received your very generous ++++++++ of ++++++++. Thank you. This will be invaluable to our campaign. +++++ is a stalwart part of the community and I look forward to continuing our strong partnership in the future. Regard the other matter, I think you will find that all has been satisfactorily dealt with. Just read this morning’s front pages. You can rest assured that no mention was made of +++ or ++++++++++++++++++++++ to the +++++++++. Your new +++++++++++ at the +++++ can now proceed without impediment. Yours sincerely, +++++++++++++++++++";

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
