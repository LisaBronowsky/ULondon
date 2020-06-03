/*

Officer: 1661810
CaseNum: 401-0-69957856-1661810

Case 401 - The Case of Norbert's Weiner Stand
Stage 1 - Noxious Weiner

Console city has been plunged into chaos. The notorious poisoner Norbert has struck the
population down with a potent poison. Word has it that he is smuggling his venomous filth
via a streetside weiner stand. Hundreds of people have been affected, and the municipal
water company tells me that their sewers are at full capacity. This is no laughing matter.
I need you to head down to our lab and work on an antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following:


You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When sarin dips below 0.29, reduce antibodies by 0.02
	- When formaldehyde goes above 0.27, increase antibodies by 0.05
	- If formaldehyde dips below 0.48, decrement methylene by 0.05
	- When alcohol dips below 0.39, try increasing methylene by 0.02
	- If sarin goes above 0.3, reduce Hydrochloric_Acid by 0.05
	- If formaldehyde goes above 0.51, raise Hydrochloric_Acid by 0.04


Your conditional statements should:

consider the following poisons:

	- alcohol
	- sarin
	- formaldehyde


and modify the following antidotes:

	- antibodies
	- methylene
	- Hydrochloric_Acid


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var alcohol;
var sarin;
var formaldehyde;


//Declare the antidote variables
var antibodies;
var methylene;
var Hydrochloric_Acid;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	alcohol = 0.5;
	sarin = 0.5;
	formaldehyde = 0.5;
	antibodies = 0.5;
	methylene = 0.5;
	Hydrochloric_Acid = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 3; i++)
	{
		graphs.push([]);
		for(var j = 0; j < 512; j++)
		{
			graphs[i].push(0.5);
		}
	}

}

function draw()
{

	//Develop the antidote below
	//Write conditional statements to change the amount of each substance ...
//    When sarin dips below 0.29, reduce antibodies by 0.02
//	- When formaldehyde goes above 0.27, increase antibodies by 0.05
//	- If formaldehyde dips below 0.48, decrement methylene by 0.05
//	- When alcohol dips below 0.39, try increasing methylene by 0.02
//	- If sarin goes above 0.3, reduce Hydrochloric_Acid by 0.05
//	- If formaldehyde goes above 0.51, raise Hydrochloric_Acid by 0.04
    
    if(sarin<0.29){
        antibodies -= 0.02;
    }
    if(formaldehyde>0.27){
        antibodies += 0.05;
    }
    if(formaldehyde<0.48){
        methylene -= 0.05;
    }
    if(alcohol<0.39){
        methylene += 0.02;
    }
    if(sarin>0.3){
        Hydrochloric_Acid -= 0.05;
    }
    if(formaldehyde>0.51){
        Hydrochloric_Acid += 0.04;
    }


	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	alcohol = nextValue(graphs[0],alcohol);
	sarin = nextValue(graphs[1],sarin);
	formaldehyde = nextValue(graphs[2],formaldehyde);


	antibodies = constrain(antibodies, 0, 1);
	methylene = constrain(methylene, 0, 1);
	Hydrochloric_Acid = constrain(Hydrochloric_Acid, 0, 1);


	///////// DO NOT CHANGE THE CODE BELOW ///////////

	//drawing code

	// set background
	background(0);
	noFill();

	//draw the graphs for the vitals
	var colors = [
	color(255, 0, 0),
	color(0, 255, 0),
	color(0, 0, 255),
	color(255, 0, 255),
	color(255, 255, 0),
	color(0, 255, 255)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('alcohol: ' + nf(alcohol,1,2), 20,20);
	fill(colors[1]);
	text('sarin: ' + nf(sarin,1,2), 20,40);
	fill(colors[2]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,60);


	//draw the antidotes bar chart
	drawBar(antibodies,50,'antibodies');
	drawBar(methylene,200,'methylene');
	drawBar(Hydrochloric_Acid,350,'Hydrochloric_Acid');


}

function nextValue(graph, val)
{
	//gets the next value for a vital and puts it in an array for drawing
	var delta = random(-0.03,0.03);

	val += delta;
	if(val > 1 || val < 0)
	{
		delta *= -1;
		val += delta * 2;
	}

	graph.push(val)
	graph.shift();
	return val;
}

function drawGraph(graph)
{
	//draws an array as a graph
	beginShape();
	for(var i = 0; i < graph.length; i++)
	{
			vertex(width * i/512, height * 0.5 - graph[i]* height/3)
	}
	endShape();
}


function drawBar(val, x, name)
{
	//draws the bars for bar chart
    noStroke();
    fill(0,100,100);
	var mh = height * 0.4 - 50;
	rect(x,(height - 50) - val*mh, 100, val*mh);
    fill(255);
	text(name + ": " + val, x, height - 20);
}
