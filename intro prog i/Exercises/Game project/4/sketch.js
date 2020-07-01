/*

The Game Project 4 - Side scrolling

Week 6

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var isLeft;
var isRight;
var scrollPos;

var clouds;
var mountains;
var trees_x;
var canyons;
var collectables;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Initialise arrays of scenery objects.
    trees_x = [-650, -350, -150, 100, 300, 500, 1000, 1300, 1500, 2000, 2500];
    treePos_y = height/2;
    
    clouds = [{x_pos: -300, y_pos: 100, size: 80},
              {x_pos: -100, y_pos: 50, size: 80},
              {x_pos: 50, y_pos: 70, size: 80},
              {x_pos: 100, y_pos: 150, size: 80}, 
              {x_pos: 600, y_pos: 100, size: 80}, 
              {x_pos: 800, y_pos: 150, size: 80},
              {x_pos: 1000, y_pos: 50, size: 80},
              {x_pos: 1300, y_pos: 50, size: 80},
              {x_pos: 1500, y_pos: 100, size: 80},
              {x_pos: 1700, y_pos: 100, size: 80},
              {x_pos: 2000, y_pos: 50, size: 80},
              {x_pos: 2300, y_pos: 150, size: 80},
              {x_pos: 2700, y_pos: 100, size: 80}];
    
    mountains = [{x_pos: -500, y_pos: floorPos_y}, {x_pos: 200, y_pos: floorPos_y}, {x_pos: 650, y_pos: 350}, {x_pos: 1800, y_pos: floorPos_y}, {x_pos: 2200, y_pos: floorPos_y}, {x_pos: 2300, y_pos: 350}];
    
    canyons = [{x_pos:0, width: 100}, {x_pos:650, width: 100}];
    
    collectables = [{x_pos: 50, y_pos: floorPos_y-30, size: 50}, {x_pos: 250, y_pos: floorPos_y-150, size: 50}, {x_pos: 370, y_pos: floorPos_y-30, size: 50}, {x_pos: 500, y_pos: floorPos_y-150, size: 50}, {x_pos: 700, y_pos: floorPos_y-150, size: 50}, {x_pos: 850, y_pos: floorPos_y-30, size: 50}];
}

function draw()
{
	background(100, 155, 255); // fill the sky blue

	noStroke();
	fill(0, 155, 0);
	rect(0, floorPos_y, width, height/4); // draw some green ground

    push();
    translate(scrollPos,0);
    
	// Draw clouds.
    for(var i=0; i<clouds.length; i++){
    fill(255,255,255);
    ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size, clouds[i].size);
    ellipse(clouds[i].x_pos-40, clouds[i].y_pos, clouds[i].size-20, clouds[i].size-20);
    ellipse(clouds[i].x_pos+40, clouds[i].y_pos, clouds[i].size-20, clouds[i].size-20);
    }

	// Draw mountains.
    for(var i=0; i<mountains.length; i++){
    fill(160,82,45);
    triangle(mountains[i].x_pos-25, mountains[i].y_pos, mountains[i].x_pos+75, mountains[i].y_pos, mountains[i].x_pos+25, mountains[i].y_pos-75);
    triangle(mountains[i].x_pos-75, mountains[i].y_pos, mountains[i].x_pos+50, mountains[i].y_pos, mountains[i].x_pos, mountains[i].y_pos-75);
    triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos+100, mountains[i].y_pos, mountains[i].x_pos+50, mountains[i].y_pos-75);
    }
    
	// Draw trees.
    for(var i=0; i<trees_x.length; i++){ 
    fill(139,69,19);
    rect(trees_x[i], treePos_y, 50, 145);
    fill(0, 100, 0);
    ellipse(trees_x[i]-5, treePos_y-20, 75, 75);
    ellipse(trees_x[i]+25, treePos_y-20, 75, 75);
    ellipse(trees_x[i]+55, treePos_y-20, 75, 75);
    ellipse(trees_x[i]+10, treePos_y-55, 75, 75);
    ellipse(trees_x[i]+30, treePos_y-55, 75, 75);
    }
    
    pop();

	// Draw canyons
    for(var i=0; i<canyons.length; i++){
    fill(100, 155, 255);
    triangle(canyons[i].x_pos+25,canyons[i].width+332,canyons[i].x_pos,canyons[i].width+370,canyons[i].x_pos+25,canyons[i].width+400);
    triangle(canyons[i].x_pos+50,canyons[i].width+332,canyons[i].x_pos+75,canyons[i].width+370,canyons[i].x_pos+50,canyons[i].width+400);
    triangle(canyons[i].x_pos+50,canyons[i].width+400,canyons[i].x_pos+75,canyons[i].width+400,canyons[i].x_pos+50,canyons[i].width+600);
    triangle(canyons[i].x_pos+25,canyons[i].width+400,canyons[i].x_pos,canyons[i].width+400,canyons[i].x_pos+25,canyons[i].width+600);
    fill(128,128,128);
    rect(canyons[i].x_pos+25,432,25,200);
    }
    
	// Draw collectables items
    for(var i=0; i<collectables.length; i++){
    fill(255,69,0);
    arc(collectables[i].x_pos, collectables[i].y_pos, collectables[i].size, collectables[i].size, PI, TWO_PI, CHORD);
    fill(255,222,173);
    ellipse(collectables[i].x_pos, collectables[i].y_pos+15, collectables[i].size-40, collectables[i].size-15);
    }
    
    pop();
	// Draw the game character - this must be last
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
    rect(gameChar_x-7, gameChar_y-65, 15, 5);
    
    pop();

	//////// Game character logic ///////
	// Logic to move

	if(isLeft)
	{
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight)
	{
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}

	}
}

function keyPressed()
{

	if(key == 'A' || keyCode == 37)
	{
		isLeft = true;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = true;
	}

}

function keyReleased()
{
	if(key == 'A' || keyCode == 37)
	{
		isLeft = false;
	}

	if(key == 'D' || keyCode == 39)
	{
		isRight = false;
	}
}
