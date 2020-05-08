/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
	//... add your code here
	noStroke();
	fill(255);
	text("cloud", 200, 100);
    
    fill(255,255,255);
    ellipse(225,150,80,80);
    ellipse(185,150,60,60);
    ellipse(265,150,60,60);

	//2. a mountain in the distance
	//... add your code here
    noStroke();
	fill(255);
	text("mountain", 500, 256);
    
    fill(160,82,45);
    triangle(475,350,575,350,525,275);
    triangle(425,350,550,350,500,275);
    triangle(500,350,600,350,550,275);

	//3. a tree
	//... add your code here
    noStroke();
	fill(255);
	text("tree", 800, 346);
    
    fill(139,69,19);
    rect(875,335,50,100);
    fill(0,100,0);
    ellipse(870,315,50,50);
    ellipse(900,315,50,50);
    ellipse(930,315,50,50);
    ellipse(885,275,50,50);
    ellipse(915,275,50,50);

	//4. a canyon
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here

	noStroke();
	fill(255);
	text("canyon", 100, 480);
    
    fill(100, 155, 255);
    triangle(225,432,200,470,225,500);
    triangle(150,432,175,470,150,500);
    triangle(150,500,175,500,200,700);
    triangle(225,500,200,500,200,700);
    fill(128,128,128);
    
    rect(175,432,25,200);

	//5. a collectable token - eg. a jewel, fruit, coins
	//... add your code here
    //collectible mushroom
    fill(255,69,0);
    arc(550,400,50,50,PI,TWO_PI,CHORD);
    fill(255,222,173);
    ellipse(550,415,10,35);

	noStroke();
	fill(255);
	text("collectable item", 400, 400);
    

}
