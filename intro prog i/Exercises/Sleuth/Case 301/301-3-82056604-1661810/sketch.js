/*
The case of the Python Syndicate
Stage 4

Officer: 1661810
CaseNum: 301-3-82056604-1661810

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var linaLovelaceImg;
var cecilKarpinskiImg;
var rockyKrayImg;
var annaKarpinskiImg;
var bonesKarpinskiImg;
var pawelKarpinskiImg;

var bonesKarpinskiObject;
var linaLovelaceObject;
var cecilKarpinskiObkect;
var rockyKrayObject;
var annaKarpinskiObject;
var pawelKarpinskiObject;


//declare your new objects below


//var linaLovelacePositionX = 115;
//var linaLovelacePositionY = 40;
//var cecilKarpinskiPositionX = 408;
//var cecilKarpinskiPositionY = 40;
//var rockyKrayPositionX = 701;
//var rockyKrayPositionY = 40;
//var annaKarpinskiPositionX = 115;
//var annaKarpinskiPositionY = 309;
//var pawelKarpinskiPositionX = 701;
//var pawelKarpinskiPositionY = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	linaLovelaceImg = loadImage("lina.png");
	cecilKarpinskiImg = loadImage("karpinskiBros1.png");
	rockyKrayImg = loadImage("krayBrothers1.png");
	annaKarpinskiImg = loadImage("karpinskiWoman.png");
	bonesKarpinskiImg = loadImage("karpinskiDog.png");
	pawelKarpinskiImg = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	bonesKarpinskiObject = {
		x: 408,
		y: 309,
		image: bonesKarpinskiImg
	};



	//define your new objects below
    linaLovelaceObject = {
        x: 115,
        y: 40,
        image: linaLovelaceImg
    };
    
    cecilKarpinskiObject = {
        x: 408,
        y: 40,
        image: cecilKarpinskiImg
    };
    
    rockyKrayObject = {
        x: 701,
        y: 40,
        image: rockyKrayImg
    };
    
    annaKarpinskiObject = {
        x: 115,
        y: 309,
        image: annaKarpinskiImg
    };
    
    pawelKarpinskiObject = {
        x: 701,
        y: 309,
        image: pawelKarpinskiImg
    };
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(linaLovelaceObject.image, linaLovelaceObject.x, linaLovelaceObject.y);
	image(cecilKarpinskiObject.image, cecilKarpinskiObject.x, cecilKarpinskiObject.y);
	image(rockyKrayObject.image, rockyKrayObject.x, rockyKrayObject.y);
	image(annaKarpinskiObject.image, annaKarpinskiObject.x, annaKarpinskiObject.y);
	image(bonesKarpinskiObject.image, bonesKarpinskiObject.x, bonesKarpinskiObject.y);
	image(pawelKarpinskiObject.image, pawelKarpinskiObject.x, pawelKarpinskiObject.y);


}