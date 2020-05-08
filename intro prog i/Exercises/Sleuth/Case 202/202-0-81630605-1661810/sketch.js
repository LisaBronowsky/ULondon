/*

Officer: 1661810
CaseNum: 202-0-81630605-1661810

Case 202 - The case of Bob and Daisy - stage 1

That pair of notorious criminals Woz and Jobs are up to no good again.
I’ve intercepted letters sent between them. It seems that they are
communicating through an ingenious code in which they masquerade as
besotted lovers, Daisy and Bob. I need you crack their code and determine
the details of their next heist so that we can catch them in the act.

Discover the hidden code by commenting out all text commands except
those which produce Medium Turquoise text. Only comment out text commands.
Leave fill commands uncommented.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	letterFont = loadFont('Ballpointprint.ttf');
}

function setup()
{
	createCanvas(539,753);
	textFont(letterFont);
	textSize(31);
}

function draw()
{
	background(255);

	fill(152,251,152);
//	text("your", 184,411);
	fill(210,105,30);
//	text("the", 420,411);
	fill(186,85,211);
//	text("th", 383,307);
	fill(127,255,212);
//	text("face,", 263,168);
//	text("I", 107,377);
//	text("my", 165,237);
	fill(0,139,139);
//	text("ely", 117,31);
//	text("hear", 103,411);
	fill(30,144,255);
//	text("confession", 143,268);
	fill(255,255,0);
//	text("are", 74,93);
	fill(176,224,230);
//	text("Oh", 17,31);
	fill(138,43,226);
//	text("since", 425,268);
	fill(255,69,0);
//	text("day", 296,93);
	fill(139,0,0);
//	text("were", 80,237);
//	text("I", 222,307);
	fill(147,112,219);
//	text("I", 84,411);
	fill(165,42,42);
//	text("seconds", 255,199);
//	text("l", 365,237);
//	text("I", 10,268);
	fill(25,25,112);
//	text("oice", 282,411);
//	text("of", 472,307);
	fill(147,112,219);
//	text("alive", 13,517);
	fill(255,255,0);
//	text("I", 349,168);
	fill(128,128,0);
//	text("make", 29,268);
	fill(0,255,127);
//	text("the", 149,478);
	fill(255,215,0);
//	text("that", 97,517);
	fill(153,50,204);
//	text("May", 450,237);
//	text("Love", 10,579);
//	text("luckiest", 210,478);
	fill(238,232,170);
//	text("x", 80,641);
//	text("must", 12,478);
//	text("the", 283,444);
	fill(0,191,255);
//	text("sunny", 192,93);
	fill(128,0,0);
//	text("lov", 71,31);
//	text("in", 281,377);
	fill(219,112,147);
//	text("Bob", 10,641);
//	text("You", 10,93);
//	text("kisses,", 161,579);
	fill(255,0,255);
//	text("lovely", 161,168);
//	text("our", 14,307);
	fill(0,100,0);
//	text("I", 170,517);
	fill(0,128,128);
//	text("knew", 368,168);
//	text("from", 12,199);
	fill(0,255,255);
//	text("your", 81,168);
//	text("one", 223,237);
	fill(0,128,0);
//	text("like", 356,411);
	fill(135,206,235);
//	text("ink", 415,307);
//	text("only", 307,307);
//	text("sic", 191,444);
	fill(139,69,19);
//	text("of", 243,444);
//	text("I", 445,130);
	fill(0,250,154);
//	text("v", 264,411);
//	text("be", 100,478);
	fill(0,0,255);
//	text("I", 436,444);
//	text("the", 100,130);
	fill(255,0,0);
//	text("that", 392,199);
	fill(135,206,250);
//	text("am", 189,517);
	fill(0,128,0);
//	text("harp.", 344,444);
	fill(233,150,122);
//	text("Daisy,", 173,31);
	fill(100,149,237);
//	text("person", 340,478);
	fill(72,209,204);
	text("is", 447,345);
	fill(219,112,147);
//	text("darling,", 94,345);
	fill(0,255,255);
//	text("in", 363,93);
	fill(32,178,170);
//	text("ove.", 374,237);
	fill(72,209,204);
	text("first", 161,130);
	fill(160,82,45);
//	text("blessed", 12,444);
	fill(128,0,128);
//	text("true", 291,237);
	fill(255,99,71);
//	text("am", 126,377);
	fill(139,0,139);
//	text("that", 372,130);
	fill(178,34,34);
//	text("green", 224,345);
//	text("can", 241,307);
	fill(255,99,71);
//	text("and", 92,579);
//	text("saw", 11,168);
	fill(238,130,238);
//	text("Ever", 345,268);
	fill(0,0,139);
//	text("when", 13,377);
//	text("you", 13,237);
//	text("moment", 232,130);
	fill(238,130,238);
//	text("eyes.", 324,345);
	fill(50,205,50);
//	text("those", 94,199);
//	text("alone", 185,377);
//	text("quiet", 381,377);
	fill(65,105,225);
//	text("last", 76,307);
	fill(128,0,128);
//	text("It", 416,345);
	fill(199,21,133);
//	text("your", 14,345);
	fill(72,209,204);
	text("April", 402,93);
	fill(255,140,0);
//	text("the", 320,377);
	fill(173,216,230);
//	text("that", 11,411);
//	text("mu", 141,444);
	fill(123,104,238);
//	text("From", 13,130);
	fill(138,43,226);
//	text("?", 319,268);
	fill(0,0,139);
//	text("your", 248,517);
	fill(72,209,204);
	text("a", 114,268);
	text("date", 142,307);
	text("chosen", 328,517);
	fill(222,184,135);
//	text("few", 190,199);
	fill(138,43,226);
//	text("my", 134,93);



}
