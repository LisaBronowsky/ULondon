/*

Officer: 1661810
CaseNum: 202-3-28362413-1661810

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Deep Sky Blue filled text with a Olive Drab outline in Melissa font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(669,408);
	textSize(28);
}

function draw()
{
	background(255);

push();
fill(0,191,255);
stroke(255,140,0);
textFont(Melissa);
//	text("relationship", 302,117);
pop();
fill(100,149,237);
stroke(210,105,30);
textFont(RonsFont);
//	text("these", 589,148);
fill(173,255,47);
stroke(0,0,128);
textFont(Melissa);
//	text("out.", 190,117);
fill(0,139,139);
stroke(128,128,0);
textFont(RonsFont);
//	text("of", 611,117);
fill(220,20,60);
stroke(0,128,128);
textFont(Ballpointprint);
//	text("can", 365,148);
fill(238,130,238);
stroke(255,215,0);
textFont(RonsFont);
//	text("The", 606,179);
push();
fill(160,82,45);
stroke(0,0,205);
textFont(Diggity);
//	text("darling", 48,28);
pop();
stroke(255,255,0);
//	text("more", 396,179);
fill(222,184,135);
stroke(255,0,0);
textFont(Ballpointprint);
//	text("sho", 553,117);
fill(218,165,32);
stroke(0,0,128);
//	text("continual", 19,179);
fill(255,165,0);
stroke(218,165,32);
textFont(Diggity);
//	text("you", 513,117);
fill(139,69,19);
stroke(34,139,34);
textFont(Melissa);
//	text("away", 478,84);
fill(127,255,0);
stroke(0,250,154);
//	text("x", 72,326);
	fill(0,191,255);
	stroke(107,142,35);
	text("I", 176,148);
	text("the", 98,214);
	text("safe", 396,117);
fill(65,105,225);
stroke(0,0,139);
textFont(RonsFont);
//	text("are", 239,214);
fill(25,25,112);
stroke(255,165,0);
textFont(Melissa);
//	text("can", 480,179);
fill(128,0,0);
stroke(0,128,0);
textFont(Ballpointprint);
//	text("how", 289,179);
fill(186,85,211);
stroke(255,255,0);
//	text("Are", 7,84);
stroke(0,255,255);
//	text("sure", 234,179);
push();
fill(128,0,128);
stroke(128,128,0);
textFont(RonsFont);
//	text("ig", 511,148);
pop();
stroke(34,139,34);
textFont(Diggity);
//	text("no", 409,148);
fill(135,206,250);
stroke(0,255,127);
//	text("secrets,", 16,214);
fill(255,105,180);
stroke(178,34,34);
textFont(Ballpointprint);
//	text("for", 527,84);
push();
fill(139,0,139);
stroke(0,0,139);
textFont(RonsFont);
//	text("our", 247,117);
pop();
fill(173,216,230);
stroke(139,0,0);
textFont(RonsFont);
//	text("You", 189,214);
fill(147,112,219);
stroke(0,255,255);
textFont(Diggity);
//	text("a", 571,84);
fill(34,139,34);
stroke(153,50,204);
textFont(RonsFont);
//	text("take", 513,179);
fill(124,252,0);
textFont(Melissa);
//	text("silence.", 130,214);
fill(250,128,114);
stroke(128,128,0);
//	text("so,", 145,148);
fill(72,209,204);
stroke(255,0,255);
textFont(Ballpointprint);
//	text("rt", 582,117);
fill(255,127,80);
stroke(0,128,128);
textFont(RonsFont);
//	text("Perhaps", 243,84);
fill(127,255,0);
stroke(25,25,112);
textFont(Ballpointprint);
//	text("Forever", 10,270);
push();
fill(124,252,0);
stroke(0,139,139);
//	text("you", 102,270);
pop();
fill(184,134,11);
textFont(RonsFont);
//	text("sometimes.", 388,214);
fill(173,216,230);
stroke(184,134,11);
//	text("send", 224,148);
fill(128,0,128);
textFont(Diggity);
//	text("If", 121,148);
fill(0,255,0);
stroke(255,165,0);
textFont(RonsFont);
//	text("cash.", 288,148);
fill(138,43,226);
stroke(255,69,0);
textFont(Diggity);
//	text("?", 438,117);
push();
fill(0,139,139);
stroke(0,128,0);
textFont(RonsFont);
//	text("money", 15,148);
pop();
stroke(0,128,0);
//	text("all", 163,117);
push();
fill(72,209,204);
stroke(199,21,133);
//	text("Is", 224,117);
pop();
fill(255,0,0);
stroke(139,0,0);
textFont(Ballpointprint);
//	text("should", 371,84);
fill(0,0,255);
stroke(0,139,139);
textFont(Melissa);
//	text("avoiding", 104,84);
fill(0,206,209);
stroke(154,205,50);
textFont(Diggity);
//	text("I", 466,179);
fill(153,50,204);
stroke(46,139,87);
textFont(Ballpointprint);
//	text("go", 442,84);
fill(0,250,154);
textFont(Diggity);
//	text("sort", 64,117);
fill(135,206,250);
stroke(127,255,0);
textFont(Melissa);
//	text("I", 350,148);
fill(0,255,255);
stroke(148,0,211);
textFont(Ballpointprint);
//	text("?", 90,148);
fill(107,142,35);
stroke(184,134,11);
textFont(Diggity);
//	text("we", 332,84);
fill(154,205,50);
stroke(160,82,45);
textFont(Ballpointprint);
//	text("?", 575,179);
fill(240,230,140);
stroke(184,134,11);
textFont(Melissa);
//	text("I'm", 163,179);
fill(218,112,214);
stroke(0,255,255);
textFont(Ballpointprint);
//	text("you", 60,84);
fill(128,0,128);
textFont(Diggity);
//	text("My", 15,28);
fill(107,142,35);
stroke(0,191,255);
textFont(RonsFont);
//	text("so", 289,214);
push();
fill(72,209,204);
stroke(0,250,154);
//	text("me", 170,84);
pop();
fill(0,250,154);
stroke(0,100,0);
textFont(Ballpointprint);
//	text("Are", 460,117);
fill(160,82,45);
stroke(255,215,0);
//	text("much", 337,179);
push();
fill(0,250,154);
stroke(220,20,60);
//	text("?", 212,84);
pop();
fill(139,0,0);
stroke(218,165,32);
//	text("rs,", 131,270);
push();
fill(139,69,19);
stroke(0,255,0);
//	text("and", 15,117);
pop();
fill(238,232,170);
stroke(255,140,0);
textFont(Diggity);
//	text("Daisy", 15,326);
fill(30,144,255);
stroke(199,21,133);
textFont(Ballpointprint);
//	text("longer", 439,148);
fill(178,34,34);
stroke(154,205,50);
//	text("not", 194,179);
push();
	fill(0,191,255);
	stroke(107,142,35);
	textFont(Melissa);
	text("guard", 323,214);
	text("can", 191,148);
	text("delay", 108,179);
pop();
fill(128,128,0);
stroke(255,165,0);
textFont(Melissa);
//	text("s", 146,179);
fill(255,0,255);
stroke(124,252,0);
//	text("ed", 364,214);
	fill(0,191,255);
	stroke(107,142,35);
	text("break", 594,84);
fill(199,21,133);
stroke(127,255,0);
textFont(RonsFont);
//	text("nore", 527,148);
fill(128,128,0);
stroke(255,69,0);
textFont(Ballpointprint);
//	text("this", 113,117);
fill(0,0,128);
stroke(107,142,35);
textFont(Melissa);
//	text("Bob,", 113,28);



}
