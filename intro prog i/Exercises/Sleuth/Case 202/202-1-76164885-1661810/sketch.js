/*

Officer: 1661810
CaseNum: 202-1-76164885-1661810

Case 202 - The case of Bob and Daisy - stage 2

Here’s another letter kid. This time it’s from Daisy (aka. Woz).
Decode it to uncover more about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce Deep Sky Blue filled text with a Dark Red outline.
Only comment out text commands - leave fill & stroke commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Melissa.otf');
}

function setup()
{
	createCanvas(635,608);
	textFont(letterFont);
	textSize(30);
}

function draw()
{
background(255);
fill(218,112,214);
stroke(0,255,0);
//	text("and", 317,229);
//	text("store", 52,330);
fill(144,238,144);
stroke(0,128,0);
//	text("long", 59,192);
fill(255,0,255);
stroke(107,142,35);
//	text("at", 312,367);
fill(0,250,154);
stroke(255,215,0);
//	text("ing", 86,125);
fill(255,99,71);
stroke(165,42,42);
//	text("arms.", 406,192);
fill(0,0,205);
stroke(255,0,255);
//	text("spring,", 11,367);
fill(138,43,226);
stroke(0,255,127);
//	text("my", 352,367);
fill(0,128,128);
stroke(0,139,139);
//	text("can", 402,229);
fill(0,0,255);
stroke(0,255,255);
//	text("?", 14,192);
fill(205,133,63);
stroke(0,128,0);
//	text("months", 105,158);
fill(199,21,133);
stroke(124,252,0);
//	text("the", 469,330);
fill(0,100,0);
stroke(107,142,35);
//	text("Even", 348,330);
fill(0,255,0);
stroke(178,34,34);
//	text("without", 124,367);
fill(178,34,34);
stroke(0,255,0);
//	text("kissed", 497,158);
fill(34,139,34);
stroke(139,0,0);
//	text("I'm", 488,90);
fill(0,0,205);
stroke(75,0,130);
//	text("Daisy", 10,522);
stroke(0,255,255);
//	text("the", 15,300);
fill(107,142,35);
stroke(160,82,45);
//	text("since", 292,158);
fill(255,69,0);
stroke(0,0,205);
//	text("last", 433,158);
fill(0,128,128);
stroke(255,0,0);
//	text("this", 137,330);
fill(34,139,34);
stroke(46,139,87);
//	text("having", 299,263);
fill(0,255,127);
stroke(255,69,0);
//	text("Bob,", 174,30);
fill(178,34,34);
stroke(50,205,50);
//	text("will", 106,90);
fill(255,140,0);
stroke(0,255,127);
//	text("we", 380,158);
fill(186,85,211);
stroke(0,191,255);
//	text("you", 247,192);
fill(173,216,230);
stroke(160,82,45);
//	text("desolate.", 269,402);
fill(148,0,211);
stroke(154,205,50);
//	text("e,", 452,367);
fill(255,0,0);
stroke(255,215,0);
//	text("longing", 202,330);
fill(240,230,140);
stroke(255,0,255);
//	text("da", 61,30);
fill(72,209,204);
stroke(148,0,211);
//	text("I", 201,263);
fill(205,133,63);
stroke(154,205,50);
//	text("the", 101,229);
fill(0,100,0);
stroke(0,255,0);
//	text("my", 349,192);
fill(127,255,0);
stroke(255,140,0);
//	text("do", 438,300);
fill(255,0,255);
stroke(139,0,0);
//	text("When", 10,90);
fill(154,205,50);
stroke(0,0,139);
//	text("aga", 370,90);
fill(205,133,63);
	stroke(139,0,0);
//	text("to", 12,330);
	fill(0,191,255);
	text("hold", 173,192);
	text("bank", 13,125);
	text("up", 13,229);
fill(152,251,152);
stroke(0,255,255);
//	text("How", 125,263);
fill(255,99,71);
stroke(255,69,0);
//	text("ight", 179,229);
fill(199,21,133);
stroke(160,82,45);
//	text("at", 61,229);
fill(30,144,255);
stroke(184,134,11);
//	text("think", 466,229);
stroke(178,34,34);
//	text("town", 104,402);
fill(128,0,128);
stroke(128,128,0);
//	text("Forever", 10,462);
fill(222,184,135);
stroke(0,191,255);
//	text("swift", 266,125);
fill(0,0,139);
stroke(25,25,112);
//	text("you", 247,367);
fill(205,133,63);
stroke(128,0,0);
//	text("longer", 334,300);
fill(222,184,135);
stroke(153,50,204);
//	text("this", 490,367);
fill(255,165,0);
stroke(0,0,205);
//	text("in", 312,192);
fill(127,255,212);
stroke(139,0,139);
//	text("your", 189,125);
fill(0,139,139);
stroke(34,139,34);
//	text("have", 504,300);
fill(50,205,50);
stroke(0,0,205);
//	text("I", 40,192);
fill(173,216,230);
stroke(50,205,50);
//	text("in", 432,330);
fill(240,128,128);
stroke(199,21,133);
//	text("to", 133,192);
fill(139,0,0);
stroke(255,255,0);
//	text("in", 425,90);
fill(238,232,170);
stroke(218,165,32);
//	text("only", 551,229);
fill(152,251,152);
stroke(0,128,128);
//	text("you.", 50,263);
fill(144,238,144);
stroke(50,205,50);
//	text("around", 475,263);
fill(135,206,250);
stroke(139,69,19);
//	text("My", 7,30);
fill(138,43,226);
stroke(210,105,30);
//	text("sky,", 247,229);
fill(147,112,219);
stroke(255,0,255);
//	text("How", 457,125);
fill(0,255,255);
stroke(178,34,34);
//	text("return.", 347,125);
fill(123,104,238);
stroke(0,128,0);
//	text("?", 462,90);
fill(124,252,0);
stroke(255,69,0);
//	text("I", 500,192);
fill(152,251,152);
stroke(160,82,45);
//	text("n", 160,229);
fill(34,139,34);
stroke(255,0,0);
//	text("are", 547,192);
fill(128,0,0);
stroke(139,69,19);
//	text("feels", 188,402);
fill(139,69,19);
stroke(148,0,211);
//	text("st", 519,192);
fill(72,209,204);
stroke(139,0,0);
//	text("of", 11,263);
fill(255,0,0);
stroke(0,255,255);
//	text("How", 164,300);
fill(128,0,128);
stroke(255,140,0);
//	text("be", 218,90);
fill(0,255,255);
stroke(34,139,34);
//	text("sid", 409,367);
fill(107,142,35);
stroke(107,142,35);
//	text("many", 11,158);
fill(127,255,212);
stroke(127,255,0);
//	text("small", 15,402);
fill(255,140,0);
stroke(255,0,255);
//	text("miss", 220,263);
fill(0,255,255);
stroke(160,82,45);
//	text("x", 103,522);
fill(220,20,60);
stroke(210,105,30);
//	text("I", 383,229);
fill(0,191,255);
stroke(255,165,0);
//	text("yours,", 131,462);
fill(250,128,114);
stroke(199,21,133);
//	text("on", 142,125);
fill(139,0,139);
stroke(139,69,19);
//	text("we", 165,90);
fill(255,105,180);
stroke(255,0,0);
//	text("it", 262,158);
fill(0,191,255);
stroke(139,0,0);
	text("united", 265,90);
	text("is", 228,158);
	text("place", 74,300);
fill(0,128,128);
stroke(199,21,133);
//	text("rling", 98,30);
fill(107,142,35);
stroke(0,255,127);
//	text("I", 485,300);
fill(176,224,230);
stroke(255,0,255);
//	text("you", 410,263);
fill(127,255,0);
stroke(124,252,0);
//	text("?", 322,330);
fill(139,69,19);
stroke(139,0,0);
//	text("much", 240,300);



}
