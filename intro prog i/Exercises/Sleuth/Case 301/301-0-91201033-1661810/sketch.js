/*
The case of the Python Syndicate
Stage 1

Officer: 1661810
CaseNum: 301-0-91201033-1661810

I gotta give it to you kid, you’ve made an excellent start, but now it’s time
to take things up a level. For some time I’ve suspected that there’s something
big going down in Console City.

These cases that we’ve been working are all connected somehow. I need to use
that considerable brain of yours to work it all out. Let’s start by laying out
who we know.

Place each mugshot in its designated position by doing the following:

- Create a new variable for the X and Y coordinates of each mugshot.
    - One has already been done for you.
    - Make sure you use the same style and format for the variable name.
- Find coordinates for the mugshot and initialise your variable with these
values.
- Replace the hard-coded constants in the corresponding image command so that
the mugshot appears in its designated position.

*/

var photoBoard;
var robbie_kray_image;
var pawel_karpinski_image;
var anna_karpinski_image;
var lina_lovelace_image;
var countess_hamilton_image;
var rocky_kray_image;



//declare your new variables below
var lina_lovelace_x_loc = 115;
var lina_lovelace_y_loc = 309;

var robbie_kray_x_loc = 115;
var robbie_kray_y_loc = 40;

var pawel_karpinski_x_loc = 408;
var pawel_karpinski_y_loc = 40;

var anna_karpinski_x_loc = 701;
var anna_karpinski_y_loc = 40;

var countess_hamilton_x_loc = 408;
var countess_hamilton_y_loc = 309;

var rocky_kray_x_loc = 701;
var rocky_kray_y_loc = 309;

function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbie_kray_image = loadImage("krayBrothers2.png");
	pawel_karpinski_image = loadImage("karpinskiBros2.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");
	lina_lovelace_image = loadImage("lina.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	rocky_kray_image = loadImage("krayBrothers1.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);



	//And update these image commands with your x and y coordinates.
	image(lina_lovelace_image, lina_lovelace_x_loc, lina_lovelace_y_loc);

	image(robbie_kray_image, robbie_kray_x_loc, robbie_kray_y_loc);
    
	image(pawel_karpinski_image, pawel_karpinski_x_loc, pawel_karpinski_y_loc);
    
	image(anna_karpinski_image, anna_karpinski_x_loc, anna_karpinski_y_loc);
    
	image(countess_hamilton_image, countess_hamilton_x_loc, countess_hamilton_y_loc);
    
	image(rocky_kray_image, rocky_kray_x_loc, rocky_kray_y_loc);

}