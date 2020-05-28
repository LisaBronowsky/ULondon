/*
The case of the Python Syndicate
Stage 2


Officer: 1661810
CaseNum: 301-1-80833338-1661810

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Bones karpinski

- The variables for Bones karpinski have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Bones karpinski for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var cecilKarpinskiImage;
var bonesKarpinskiImage;
var linaLovelaceImage;
var pawelKarpinskiImage;
var rockyKrayImage;
var annaKarpinskiImage;


var bonesKarpinskiLocX = 408;
var bonesKarpinskiLocY = 40;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	bonesKarpinskiImage = loadImage("karpinskiDog.png");
	linaLovelaceImage = loadImage("lina.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");
	rockyKrayImage = loadImage("krayBrothers1.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(bonesKarpinskiImage, bonesKarpinskiLocX, bonesKarpinskiLocY);

	image(cecilKarpinskiImage, bonesKarpinskiLocX-293, bonesKarpinskiLocY);
	image(linaLovelaceImage, bonesKarpinskiLocX+293, bonesKarpinskiLocY);
	image(pawelKarpinskiImage, bonesKarpinskiLocX-293, bonesKarpinskiLocY+269);
	image(rockyKrayImage, bonesKarpinskiLocX, bonesKarpinskiLocY+269);
	image(annaKarpinskiImage, bonesKarpinskiLocX+293, bonesKarpinskiLocY+269);

}