/*

The Game Project

Week 3

Game interaction

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var collectable;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
     collectable = {
        x_pos: 250,
        y_pos: floorPos_y-25,
        size: 50,
        isFound: false
    };

    canyon = {
        x_pos: 100,
        width: 100,
        isTrapped: false
    };
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue


	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

	//draw the canyon
    fill(100, 155, 255);
    triangle(canyon.x_pos+25,canyon.width+332,canyon.x_pos,canyon.width+370,canyon.x_pos+25,canyon.width+400);
    triangle(canyon.x_pos+50,canyon.width+332,canyon.x_pos+75,canyon.width+370,canyon.x_pos+50,canyon.width+400);
    triangle(canyon.x_pos+50,canyon.width+400,canyon.x_pos+75,canyon.width+400,canyon.x_pos+50,canyon.width+600);
    triangle(canyon.x_pos+25,canyon.width+400,canyon.x_pos,canyon.width+400,canyon.x_pos+25,canyon.width+600);
    fill(128,128,128);
    rect(canyon.x_pos+25,432,25,200);


    //draw collectable
    //check is collectable was found
    if(dist(gameChar_x, gameChar_y, collectable.x_pos, collectable.y_pos) < 30){
        collectable.isFound = true;
    }
    
    if(collectable.isFound == false){
    fill(255,69,0);
    arc(collectable.x_pos, collectable.y_pos, collectable.size, collectable.size, PI, TWO_PI, CHORD);
    fill(255,222,173);
    ellipse(collectable.x_pos, collectable.y_pos+15, collectable.size-40, collectable.size-15);
    }
    
	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
        //feet
    fill(0);
    ellipse(gameChar_x-8, gameChar_y-8, 8, 8);
    ellipse(gameChar_x, gameChar_y-8, 8, 8);
    
    //legs
    fill(0,0,139);
    rect(gameChar_x-7, gameChar_y-20, 3, 10);
    rect(gameChar_x, gameChar_y-20, 3, 10);
    
    //body
    fill(220,20,60);
    ellipse(gameChar_x-3, gameChar_y-32, 18, 30);
    
    //face
    fill(225,228,181);
    ellipse(gameChar_x-3, gameChar_y-55, 15, 15);
    
    //hat
    fill(0,0,139);
    rect(gameChar_x-12, gameChar_y-70, 15, 5);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
         //feet
    fill(0);
    ellipse(gameChar_x, gameChar_y-8, 8, 8);
    ellipse(gameChar_x+7, gameChar_y-8, 8, 8);
    
    //legs
    fill(0,0,139);
    rect(gameChar_x-3, gameChar_y-20, 3, 10);
    rect(gameChar_x+4, gameChar_y-20, 3, 10);
    
    //body
    fill(220,20,60);
    ellipse(gameChar_x+3, gameChar_y-32, 18, 30);
    
    //face
    fill(225,228,181);
    ellipse(gameChar_x+3, gameChar_y-55, 15, 15);
    
    //hat
    fill(0,0,139);
    rect(gameChar_x-2, gameChar_y-70, 15, 5);

	}
	else if(isLeft)
	{
		// add your walking left code
        //feet
    fill(0);
    ellipse(gameChar_x-2, gameChar_y, 8, 8);
    ellipse(gameChar_x+1, gameChar_y, 8, 8);
    
    //legs
    fill(0,0,139);
    rect(gameChar_x-2, gameChar_y-17, 3, 15);
    rect(gameChar_x+1, gameChar_y-17, 3, 15);
    
    //body
    fill(220,20,60);
    ellipse(gameChar_x, gameChar_y-32, 18, 35);
    
    //face
    fill(225,228,181);
    ellipse(gameChar_x, gameChar_y-55, 15, 15);
    
    //hat
    fill(0,0,139);
    rect(gameChar_x-10, gameChar_y-65, 15, 5);

	}
	else if(isRight)
	{
		// add your walking right code
         //feet
    fill(0);
    ellipse(gameChar_x-2, gameChar_y, 8, 8);
    ellipse(gameChar_x+2, gameChar_y, 8, 8);
    
    //legs
    fill(0,0,139);
    rect(gameChar_x-4, gameChar_y-17, 3, 15);
    rect(gameChar_x-1, gameChar_y-17, 3, 15);
    
    //body
    fill(220,20,60);
    ellipse(gameChar_x, gameChar_y-32, 18, 35);
    
    //face
    fill(225,228,181);
    ellipse(gameChar_x, gameChar_y-55, 15, 15);
    
    //hat
    fill(0,0,139);
    rect(gameChar_x-5, gameChar_y-65, 15, 5);

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
         //feet
    fill(0);
    ellipse(gameChar_x-5, gameChar_y-8, 8, 8);
    ellipse(gameChar_x+5, gameChar_y-8, 8, 8);
    
    //legs
    fill(0,0,139);
    rect(gameChar_x-6, gameChar_y-20, 3, 10);
    rect(gameChar_x+3, gameChar_y-20, 3, 10);
    
    //body
    fill(220,20,60);
    ellipse(gameChar_x, gameChar_y-32, 18, 30);
    
    //face
    fill(225,228,181);
    ellipse(gameChar_x, gameChar_y-55, 15, 15);
    
    //hat
    fill(0,0,139);
    rect(gameChar_x-7, gameChar_y-70, 15, 5);

	}
	else
	{
		// add your standing front facing code
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

	}

	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if(isLeft == true){
        gameChar_x -= 5;
    }

    if(isRight == true){
        gameChar_x += 5;
    }
    
    if(isFalling == true){
        gameChar_y -= 9;
    }
    
    if(isPlummeting == true){
        gameChar_y = min(gameChar_y+2, floorPos_y);
    }
    
    if(canyon.x_pos< gameChar_x && (canyon.x_pos+canyon.width) > gameChar_x && gameChar_y <= floorPos_y){
        canyon.isTrapped=true;
    }
    if(canyon.x_pos> gameChar_x){
        canyon.isTrapped=false;
    }
    
    if(canyon.isTrapped == true){
        isPlummeting = false;
        gameChar_y += 5;
    }
}


function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    //left arrow pressed
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = true;
    }
    //right key pressed
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = true;
    }
    //top key pressed
    else if(keyCode == 38){
        console.log("top arrow");
        isFalling = true;
        isPlummeting = false;
    }
  
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
        
    //left arrow pressed
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = false;
    }
    //right key pressed
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = false;
    }
    //top key pressed
    else if(keyCode == 38){
        console.log("top arrow");
        isFalling = false;
        isPlummeting = true;
    }

}

