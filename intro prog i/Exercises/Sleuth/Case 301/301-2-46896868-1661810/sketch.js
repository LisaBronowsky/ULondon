/*
The case of the Python Syndicate
Stage 3


Officer: 1661810
CaseNum: 301-2-46896868-1661810

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Anna karpinski has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Anna karpinski object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var bones_karpinski_img;
var lina_lovelace_img;
var pawel_karpinski_img;
var anna_karpinski_img;
var cecil_karpinski_img;
var rocky_kray_img;

var anna_karpinski_obj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_img = loadImage("karpinskiDog.png");
	lina_lovelace_img = loadImage("lina.png");
	pawel_karpinski_img = loadImage("karpinskiBros2.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	rocky_kray_img = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	anna_karpinski_obj = {
		x: 115,
		y: 309,
		image: anna_karpinski_img
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);

	image(bones_karpinski_img, anna_karpinski_obj.x, anna_karpinski_obj.y-269);
	image(lina_lovelace_img, anna_karpinski_obj.x+293, anna_karpinski_obj.y-269);
	image(pawel_karpinski_img, anna_karpinski_obj.x+586, anna_karpinski_obj.y-269);
	image(cecil_karpinski_img, anna_karpinski_obj.x+293, anna_karpinski_obj.y);
	image(rocky_kray_img, anna_karpinski_obj.x+586, anna_karpinski_obj.y);

}