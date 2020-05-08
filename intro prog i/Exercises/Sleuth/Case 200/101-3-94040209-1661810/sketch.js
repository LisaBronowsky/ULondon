/*

Officer: 1661810
CaseNum: 101-3-94040209-1661810

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a Light Sea Green filled rectangle with a Purple outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar by drawing a Orange filled
rectangle with a Sea Green outline around him.

Identify the man reading the newspaper by drawing a Maroon filled rectangle
with a Medium Spring Green outline around him.

Identify the woman with the dog by drawing a Sandy Brown filled rectangle with a
Dark Blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use r,g,b values between 0 and 255. Set alpha to 100 for some opacity.
	stroke() Use r,g,b values between 0 and 255.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    
    //Lina light sea green rect with purple outline
    stroke(128,0,128);
    fill(32,178,170);
    rect(645,127,380,777);
    
    //man with monocle orange filled rect with sea green outline
    stroke(46,139,87);
    fill(255,165,0);
    rect(1530,300,180,250);
    
    //man with newspaper maroon filled rect with medium spring outline
    stroke(0,250,154);
    fill(128,0,0);
    rect(55,203,130,265);
    
    //Woman with dog sandy brown filled rect with dark blue outline
    stroke(0,0,139);
    fill(244,164,96);
    rect(240,105,259,560);


}
