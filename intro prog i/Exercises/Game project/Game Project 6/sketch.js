/*

The Game Project 6 - Bring it all together

*/

var gameChar_x;
var gameChar_y;
var floorPos_y;
var scrollPos;
var gameChar_world_x;

var isLeft;
var isRight;
var isFalling;
var isPlummeting;
var isJumping;
var isTrapped;

var game_score;
var flagpole;
var lives;
var plattforms;

function setup(){
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
    
    lives = 3;
    
    startGame();
}


function draw(){
	background(200, 155, 185); //fill the background

	noStroke();
	fill(0, 128, 0);
	rect(0, floorPos_y, width, height/4); //fill the ground

    push();
    translate(scrollPos, 0);
    
	// Draw clouds.
    drawClouds();

	// Draw mountains.
    drawMountains();
    
	// Draw trees.
    drawTrees();
    
	// Draw canyons.
    for(var i = 0; i<canyons.length; i++){
        drawCanyon(canyons[i]);
        checkCanyon(canyons[i]);
    }
    
	// Draw collectable items.
   for(var j = 0; j<collectables.length; j++){
       if(!collectables[j].isFound){
            drawCollectable(collectables[j]);
            checkCollectable(collectables[j]);
       }
   }
    
    
    renderFlagpole();
        
    pop();
    
    
	// Draw game character.
	
	drawGameChar();
    
    //draw game score
    fill(0);
    noStroke();
    text("score: " + game_score, 20, 20);
    
    //draw life tokens
    noStroke();
    text("lives: " + lives, 20, 30);
    
     if(lives < 1){
            fill(0);
            noStroke();
            textSize(50);
            text("GAME OVER!!! Press space to continue", 75, 250);
            textSize(12);
            return;
        }
    
    if(flagpole.isReached){
        fill(0);
            noStroke();
            textSize(50);
            text("Level complete. Press space to continue", 75, 250);
            textSize(12);
            return;
    }

	//Logic to make the game character move or the background scroll.
	if(isLeft){
		if(gameChar_x > width * 0.2)
		{
			gameChar_x -= 5;
		}
		else
		{
			scrollPos += 5;
		}
	}

	if(isRight){
		if(gameChar_x < width * 0.8)
		{
			gameChar_x  += 5;
		}
		else
		{
			scrollPos -= 5; // negative for moving against the background
		}
	}

	// Logic to make the game character rise and fall.
     if(isFalling){
        gameChar_y -= 5;
    }
    
    
    if(isPlummeting){
        gameChar_y = min(gameChar_y+2, floorPos_y);
    }
    
    if(isTrapped){
       gameChar_y += 9;
       }
       
    
    if(!flagpole.isReached){
    checkFlagpole();
    }

	//Update real position of gameChar for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;
    
    checkPlayerDie();
}



    //Function to start game
function startGame(){
    gameChar_x = width/2;
	gameChar_y = floorPos_y;

	// Variable to control the background scrolling.
	scrollPos = 0;

	// Variable to store the real position of the gameChar in the game
	// world. Needed for collision detection.
	gameChar_world_x = gameChar_x - scrollPos;

	// Boolean variables to control the movement of the game character.
	isLeft = false;
	isRight = false;
	isFalling = false;
	isPlummeting = false;
    isTrapped = false;

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
    
    mountains = [{x_pos: -500, y_pos: floorPos_y}, 
                 {x_pos: 200, y_pos: floorPos_y}, 
                 {x_pos: 650, y_pos: 350}, 
                 {x_pos: 1800, y_pos: 400}, 
                 {x_pos: 2200, y_pos: 350}];
    
    canyons = [{x_pos:550, width: 100}, {x_pos:250, width: 100}, {x_pos:700, width: 100}, {x_pos:1700, width: 100}];
    
    collectables = [{x_pos: 50, y_pos: floorPos_y-50, size: 50, isFound: false}, 
                    {x_pos: 250, y_pos: floorPos_y-150, size: 50, isFound: false}, 
                    {x_pos: 370, y_pos: floorPos_y-50, size: 50, isFound: false}, 
                    {x_pos: 500, y_pos: floorPos_y-150, size: 50, isFound: false}, 
                    {x_pos: 700, y_pos: floorPos_y-150, size: 50, isFound: false}, 
                    {x_pos: 850, y_pos: floorPos_y-50, size: 50, isFound: false},
                    {x_pos: 1000, y_pos: floorPos_y-100, size: 50, isFound: false},
                    {x_pos: 1150, y_pos: floorPos_y-50, size: 50, isFound: false},
                    {x_pos: 1400, y_pos: floorPos_y-110, size: 50, isFound: false},
                    {x_pos: 1550, y_pos: floorPos_y-95, size: 50, isFound: false},
                    {x_pos: 1900, y_pos: floorPos_y-50, size: 50, isFound: false},
                    {x_pos: 2100, y_pos: floorPos_y-100, size: 50, isFound: false},
                    {x_pos: 2340, y_pos: floorPos_y-95, size: 50, isFound: false}];
    
    
    game_score = 0;
    
    flagpole = {isReached: false, x_pos: 2700};
}

// ---------------------
// Key control functions
// ---------------------

function keyPressed(){

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

function keyReleased(){

	console.log("release" + keyCode);
	console.log("release" + key);

     //left arrow released
    if(keyCode == 37){
        console.log("left arrow");
        isLeft = false;
    }
    //right key released
    else if(keyCode == 39){
        console.log("right arrow");
        isRight = false;
    }
    //top key released
    else if(keyCode == 38){
        console.log("top arrow");
        isFalling = false;
        isPlummeting = true;
    }
}


// ------------------------------
// Game character render function
// ------------------------------

// Function to draw the game character.

function drawGameChar(){

	if(isLeft && isFalling){
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
	   else if(isRight && isFalling){
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
	else if(isLeft){
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
	else if(isRight){
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
	else if(isFalling || isPlummeting){
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
	else{
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

}

// ---------------------------
// Background render functions
// ---------------------------

// Function to draw cloud objects.
 function drawClouds(){
     for(var i=0; i<clouds.length; i++){
        fill(255,255,255);
        ellipse(clouds[i].x_pos, clouds[i].y_pos, clouds[i].size, clouds[i].size);
        ellipse(clouds[i].x_pos-40, clouds[i].y_pos, clouds[i].size-20, clouds[i].size-20);
        ellipse(clouds[i].x_pos+40, clouds[i].y_pos, clouds[i].size-20, clouds[i].size-20);
    }
}

// Function to draw mountains objects.
 function drawMountains(){
     for(var i=0; i<mountains.length; i++){
        fill(105, 105, 105);
        triangle(mountains[i].x_pos-25, mountains[i].y_pos, mountains[i].x_pos+75, mountains[i].y_pos, mountains[i].x_pos+25, mountains[i].y_pos-75);
        triangle(mountains[i].x_pos-75, mountains[i].y_pos, mountains[i].x_pos+50, mountains[i].y_pos, mountains[i].x_pos, mountains[i].y_pos-75);
        triangle(mountains[i].x_pos, mountains[i].y_pos, mountains[i].x_pos+100, mountains[i].y_pos, mountains[i].x_pos+50, mountains[i].y_pos-75);
    }
 }

// Function to draw trees objects.
 function drawTrees(){
     for(var i=0; i<trees_x.length; i++){ 
        fill(210, 105, 30);
        rect(trees_x[i], treePos_y, 50, 145);
        fill(60, 179, 113);
        ellipse(trees_x[i]-5, treePos_y-20, 75, 75);
        ellipse(trees_x[i]+25, treePos_y-20, 75, 75);
        ellipse(trees_x[i]+55, treePos_y-20, 75, 75);
        ellipse(trees_x[i]+10, treePos_y-55, 75, 75);
        ellipse(trees_x[i]+30, treePos_y-55, 75, 75);
    }
 }

// ---------------------------------
// Canyon render and check functions
// ---------------------------------

// Function to draw canyon objects.

function drawCanyon(t_canyon){
    fill(255, 140, 0);
    triangle(t_canyon.x_pos+25,t_canyon.width+332,t_canyon.x_pos,t_canyon.width+370,t_canyon.x_pos+25,t_canyon.width+400);
    triangle(t_canyon.x_pos+50,t_canyon.width+332,t_canyon.x_pos+75,t_canyon.width+370,t_canyon.x_pos+50,t_canyon.width+400);
    triangle(t_canyon.x_pos+50,t_canyon.width+400,t_canyon.x_pos+75,t_canyon.width+400,t_canyon.x_pos+50,t_canyon.width+600);
    triangle(t_canyon.x_pos+25,t_canyon.width+400,t_canyon.x_pos,t_canyon.width+400,t_canyon.x_pos+25,t_canyon.width+600);
    fill(128,128,128);
    rect(t_canyon.x_pos+25,432,25,200);
}

// Function to check character is over a canyon.
function checkCanyon(t_canyon){
    if((gameChar_world_x > t_canyon.x_pos + 0.25 * t_canyon.width)
    && (gameChar_world_x < (t_canyon.x_pos + 0.25 * t_canyon.width) + (t_canyon.width * 0.75))
    && gameChar_y >= floorPos_y){
        t_canyon.isTrapped = true;
    }
    else{
        t_canyon.isTrapped = false;
    }
    
    if(t_canyon.isTrapped == true){
        isPlummeting = false;
        isTrapped = true;
    }

}

//drawing plattforms using factory pattern
//function createPlattform(x_pos, y_pos, size){
//    draw: function(){
//        push();
//        fill(160, 82, 45);
//        rect(x_pos, y_pos, size);
//        pop();
//    }
//}



//Function to render flagpole
function renderFlagpole(){
    push();
    strokeWeight(5);
    stroke(0, 0, 205);
    line(flagpole.x_pos, floorPos_y, flagpole.x_pos, floorPos_y-250);
    noStroke();
    fill(178, 34, 34);
    
    if(flagpole.isReached){
    rect(flagpole.x_pos, floorPos_y-250, 70, 50);
    }
    else{
        rect(flagpole.x_pos, floorPos_y-50, 70, 50);
    }
    
    pop();
}

 //Function to check Flagpole
function checkFlagpole(){
    var d = abs(gameChar_world_x - flagpole.x_pos);
    
    if(d<15){
        flagpole.isReached = true;
    }
}


function checkPlayerDie(){
    if(isTrapped && gameChar_y > 575){
        lives -=1;
        if(lives > 0){
            startGame();
        }
    }
}

// ----------------------------------
// Collectable items render and check functions
// ----------------------------------

// Function to draw collectable objects.

function drawCollectable(t_collectable){
    if(t_collectable.isFound == false){
    fill(255,69,0);
    arc(t_collectable.x_pos, t_collectable.y_pos, t_collectable.size, t_collectable.size, PI, TWO_PI, CHORD);
    fill(255,222,173);
    ellipse(t_collectable.x_pos, t_collectable.y_pos+15, t_collectable.size-40, t_collectable.size-15);
    }
}

// Function to check character has collected an item.
function checkCollectable(t_collectable){
    if(dist(gameChar_world_x, gameChar_y, t_collectable.x_pos, t_collectable.y_pos) < 35){
        t_collectable.isFound = true;
        game_score += 1;
    }
}
