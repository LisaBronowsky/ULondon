/*

Officer: 1661810
CaseNum: 303-2-38084885-1661810

Case 303 - The Case of the Crooked Attorney
Stage 3 - The Gates Bank

I’ve made an appointment for you at the Gates Bank to retrieve your safe deposit box from the vault.
Actually you will break into Torvalds’ one.

Crack the safe by doing the following:

	Whilst the mouse is moving:
	- Make Secure_Store_Code_0 equal to the value of mouseY
	- Use the 'min' function to prevent Secure_Store_Code_0 from going above 16

	When the mouse button is pressed:
	- Increment Secure_Store_Code_1 by 1
	- Use the 'min' function to prevent Secure_Store_Code_1 from going above 10

	Whilst the mouse is moving:
	- Make Secure_Store_Code_2 equal to the value of mouseY
	- Use the 'constrain' function to prevent Secure_Store_Code_2 from falling below 2 and going above 10

	Whilst the mouse is moving:
	- Increment Secure_Store_Code_3 by 3
	- Use the 'min' function to prevent Secure_Store_Code_3 from going above 16

	When the mouse button is pressed:
	- Make Secure_Store_Code_4 equal to the value of mouseY
	- Use the 'min' function to prevent Secure_Store_Code_4 from going above 77



This time you'll need to create the relevant event handlers yourself.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

	- The assignment operator aka. the equals sign !
	- mouseX, mouseY
	- Incrementing +=
	- Decrementing -=
	- min, max
	- constrain

*/

//declare the variables

var Secure_Store_Code_0;
var Secure_Store_Code_1;
var Secure_Store_Code_2;
var Secure_Store_Code_3;
var Secure_Store_Code_4;


function preload()
{
	//IMAGES WILL BE LOADED HERE

}

function setup()
{
	createCanvas(512,512);

	//initialise the variables
	Secure_Store_Code_0 = 0;
	Secure_Store_Code_1 = 0;
	Secure_Store_Code_2 = 0;
	Secure_Store_Code_3 = 0;
	Secure_Store_Code_4 = 0;

}

///////////////////EVENT HANDLERS///////////////////

//Create event handlers here to open the safe ...
//Whilst the mouse is moving:
	//- Make Secure_Store_Code_0 equal to the value of mouseY
	//- Use the 'min' function to prevent Secure_Store_Code_0 from going above 16
    //- Make Secure_Store_Code_2 equal to the value of mouseY
    //	- Use the 'constrain' function to prevent Secure_Store_Code_2 from falling below 2 and going above 10
    //- Increment Secure_Store_Code_3 by 3
	//- Use the 'min' function to prevent Secure_Store_Code_3 from going above 16
function mouseMoved(){
    Secure_Store_Code_0 = min(16,mouseY);
    Secure_Store_Code_2 = constrain(mouseY, 2, 10);
    Secure_Store_Code_3 = min(16, Secure_Store_Code_3+3);
}

//When the mouse button is pressed:
//	- Increment Secure_Store_Code_1 by 1
//	- Use the 'min' function to prevent Secure_Store_Code_1 from going above 10
//- Make Secure_Store_Code_4 equal to the value of mouseY
//	- Use the 'min' function to prevent Secure_Store_Code_4 from going above 77

function mousePressed(){
    Secure_Store_Code_1 = min(10, Secure_Store_Code_1+1);
    Secure_Store_Code_4 = min(77, mouseY);
}

///////////////DO NOT CHANGE CODE BELOW THIS POINT///////////////////

function draw()
{

	//Draw the safe door
	background(70);
	noStroke();
	fill(29,110,6);
	rect(26,26,width-52,width-52);

	//Draw the combination dials
	push();
	translate(120,170);
	drawDial(140,Secure_Store_Code_0, 20);
	pop();

	push();
	translate(120,380);
	drawDial(140,Secure_Store_Code_1, 13);
	pop();

	push();
	translate(280,170);
	drawDial(140,Secure_Store_Code_2, 14);
	pop();

	push();
	translate(280,380);
	drawDial(140,Secure_Store_Code_3, 23);
	pop();

	//Draw the lever
	push();
	translate(width - 125,256);
	drawLever(Secure_Store_Code_4);
	pop();


}

function drawDial(diameter,num,maxNum)
{
	//the combination lock

	var r = diameter * 0.5;
	var p = r * 0.6;

	stroke(0);
	fill(255,255,200);
	ellipse(0,0,diameter,diameter);
	fill(100);
	noStroke();
	ellipse(0,0,diameter*0.66,diameter*0.66);
	fill(150,0,0);
	triangle(
		-p * 0.4,-r-p,
		p * 0.4,-r-p,
		0,-r-p/5
	);

	noStroke();

	push();
	var inc = 360/maxNum;

	rotate(radians(-num * inc));
	for(var i = 0; i < maxNum; i++)
	{
		push();
		rotate(radians(i * inc));
		stroke(0);
		line(0,-r*0.66,0,-(r-10));
		noStroke();
		fill(0);
		text(i,0,-(r-10));
		pop();
	}

	pop();
}

function drawLever(rot)
{
	push();
	rotate(radians(-rot))
	stroke(0);
	fill(100);
	rect(-10,0,20,100);
	ellipse(0,0,50,50);
	ellipse(0,100,35,35);
	pop();
}
