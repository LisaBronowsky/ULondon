/*

The Game Project

2b - using variables

*/

var floorPos_y;

var gameChar_x;
var gameChar_y;

var treePos_x;
var treePos_y;

var canyon;
var collectable;

var mountain;
var cloud;


function setup()
{
	createCanvas(1024, 576);
	floorPos_y = 432; //NB. we are now using a variable for the floor position

	//NB. We are now using the built in variables height and width
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	treePos_x = width/2;
	treePos_y = height/2;
    
    canyon = {
        x_pos:0,
        width: 100
    };
    
    collectable = {
        x_pos: 100,
        y_pos: 100,
        size: 50
    };
    
    cloud = {
        x_pos: 225,
        y_pos: 150,
        size: 80
    };
    
    mountain = {
        x_pos: 300,
        y_pos: 350,
    };
    
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, height, width - floorPos_y); 
    
    //draw some green ground
    
    //tree
    fill(139,69,19);
    rect(treePos_x, treePos_y, 50, 145);
    fill(0, 100, 0);
    ellipse(treePos_x-5, treePos_y-20, 75, 75);
    ellipse(treePos_x+25, treePos_y-20, 75, 75);
    ellipse(treePos_x+55, treePos_y-20, 75, 75);
    ellipse(treePos_x+10, treePos_y-55, 75, 75);
    ellipse(treePos_x+30, treePos_y-55, 75, 75);
    
    //character
    //feet
    fill(0);
    ellipse(gameChar_x-5, gameChar_y, 8, 8);
    ellipse(gameChar_x+5, gameChar_y, 8, 8);
    
    //legs
    fill(0,0,139);
    rect(gameChar_x-6, gameChar_y-17, 3, 15);
    rect(gameChar_x+3, gameChar_y-17, 3, 15);
    
    //body
    fill(220,20,60);
    ellipse(gameChar_x, gameChar_y-32, 18, 35);
    
    //face
    fill(225,228,181);
    ellipse(gameChar_x, gameChar_y-55, 15, 15);
    
    //hat
    fill(0,0,139);
    rect(gameChar_x-5, gameChar_y-65, 15, 5);

    //cloud
    fill(255,255,255);
   // ellipse(225,150,80,80);
    ellipse(cloud.x_pos, cloud.y_pos, cloud.size, cloud.size);
   // ellipse(185,150,60,60);
    ellipse(cloud.x_pos-40, cloud.y_pos, cloud.size-20, cloud.size-20);
   // ellipse(265,150,60,60);
    ellipse(cloud.x_pos+40, cloud.y_pos, cloud.size-20, cloud.size-20);
    
    //canyon
    fill(100, 155, 255);
    triangle(canyon.x_pos+25,canyon.width+332,canyon.x_pos,canyon.width+370,canyon.x_pos+25,canyon.width+400);
    triangle(canyon.x_pos+50,canyon.width+332,canyon.x_pos+75,canyon.width+370,canyon.x_pos+50,canyon.width+400);
    triangle(canyon.x_pos+50,canyon.width+400,canyon.x_pos+75,canyon.width+400,canyon.x_pos+50,canyon.width+600);
    triangle(canyon.x_pos+25,canyon.width+400,canyon.x_pos,canyon.width+400,canyon.x_pos+25,canyon.width+600);
    fill(128,128,128);
    rect(canyon.x_pos+25,432,25,200);
    
    //collectable
    fill(255,69,0);
    arc(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size, PI, TWO_PI, CHORD);
    fill(255,222,173);
    ellipse(collectable.x_pos, collectable.y_pos+15, collectable.size-40, collectable.size-15);
    
    //mountain
    fill(160,82,45);
   // triangle(275,350,375,350,325,275);
    triangle(mountain.x_pos-25, mountain.y_pos, mountain.x_pos+75, mountain.y_pos, mountain.x_pos+25, mountain.y_pos-75);
   // triangle(225,350,350,350,300,275);
    triangle(mountain.x_pos-75, mountain.y_pos, mountain.x_pos+50, mountain.y_pos, mountain.x_pos, mountain.y_pos-75);
   // triangle(300,350,400,350,350,275);
    triangle(mountain.x_pos, mountain.y_pos, mountain.x_pos+100, mountain.y_pos, mountain.x_pos+50, mountain.y_pos-75);

}

function mousePressed()
{
gameChar_x = mouseX;
gameChar_y = mouseY;

}
