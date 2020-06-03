/*

Officer: 1661810
CaseNum: 401-2-14219853-1661810

Case 401 - The Case of Norbert's Weiner Stand
Stage 3 - Bilious bagel

As I suspected Norbert has struck again. Ever inventive he’s set up a bagel stand and
has laced the cream cheese with an ingenious but vicious toxin. This one is quite
deadly so get yourself down to the lab right away.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If methanol dips below 0.29 and cyanide dips below 0.39, decrement ethanol by 0.05
	- If botulinium dips below 0.65 and alcohol goes above 0.45, increase ethanol by 0.01
	- If either botulinium dips below 0.47, AmanitaMushrooms dips below 0.67, or perhaps cyanide goes above 0.75, try decreasing Sodium_Bicarbonate by 0.01
	- If Spider_Venom goes above 0.71, or on the other hand, methanol goes above 0.63 and alcohol dips below 0.6, try increasing Sodium_Bicarbonate by 0.02
	- If methanol goes above 0.54 and botulinium dips below 0.68, reduce sulphates by 0.01
	- When cyanide goes above 0.68, or on the other hand, Spider_Venom goes above 0.41 and alcohol dips below 0.39, increment sulphates by 0.03
	- If methanol goes above 0.75 and botulinium goes above 0.3, decrease calcium_gluconate by 0.02
	- When AmanitaMushrooms dips below 0.36 or Spider_Venom dips below 0.58, raise calcium_gluconate by 0.04


Your conditional statements should:

consider the following poisons:

	- cyanide
	- alcohol
	- Spider_Venom
	- AmanitaMushrooms
	- botulinium
	- methanol


and modify the following antidotes:

	- ethanol
	- Sodium_Bicarbonate
	- sulphates
	- calcium_gluconate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var cyanide;
var alcohol;
var Spider_Venom;
var AmanitaMushrooms;
var botulinium;
var methanol;


//Declare the antidote variables
var ethanol;
var Sodium_Bicarbonate;
var sulphates;
var calcium_gluconate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	cyanide = 0.5;
	alcohol = 0.5;
	Spider_Venom = 0.5;
	AmanitaMushrooms = 0.5;
	botulinium = 0.5;
	methanol = 0.5;
	ethanol = 0.5;
	Sodium_Bicarbonate = 0.5;
	sulphates = 0.5;
	calcium_gluconate = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 6; i++)
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
//  - If methanol dips below 0.29 and cyanide dips below 0.39, decrement ethanol by 0.05
//	- If botulinium dips below 0.65 and alcohol goes above 0.45, increase ethanol by 0.01
//	- If either botulinium dips below 0.47, AmanitaMushrooms dips below 0.67, or perhaps cyanide goes above 0.75, try decreasing Sodium_Bicarbonate by 0.01
//	- If Spider_Venom goes above 0.71, or on the other hand, methanol goes above 0.63 and alcohol dips below 0.6, try increasing Sodium_Bicarbonate by 0.02
//	- If methanol goes above 0.54 and botulinium dips below 0.68, reduce sulphates by 0.01
//	- When cyanide goes above 0.68, or on the other hand, Spider_Venom goes above 0.41 and alcohol dips below 0.39, increment sulphates by 0.03
//	- If methanol goes above 0.75 and botulinium goes above 0.3, decrease calcium_gluconate by 0.02
//	- When AmanitaMushrooms dips below 0.36 or Spider_Venom dips below 0.58, raise calcium_gluconate by 0.04

    if(methanol<0.29 &&cyanide<0.39){
        ethanol -= 0.05;
    }
    if(botulinium<0.65 && alcohol>0.45){
        ethanol += 0.01;
    }
    if(botulinium<0.47 || AmanitaMushrooms<0.67 || cyanide>0.75){
    Sodium_Bicarbonate -= 0.01;
    }
    if(Spider_Venom>0.71 || (methanol>0.63 && alcohol<0.6)){
        Sodium_Bicarbonate += 0.02;
    }
    if(methanol>0.54 && botulinium<0.68){
        sulphates -= 0.01;
    }
    if(cyanide>0.68 || (Spider_Venom>0.41 && alcohol<0.39)){
        sulphates += 0.03;
    }
    if(methanol>0.75 && botulinium>0.3){
        calcium_gluconate -= 0.02;
    }
    if(AmanitaMushrooms<0.36 || Spider_Venom<0.58){
        calcium_gluconate += 0.04;
    }

	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	cyanide = nextValue(graphs[0],cyanide);
	alcohol = nextValue(graphs[1],alcohol);
	Spider_Venom = nextValue(graphs[2],Spider_Venom);
	AmanitaMushrooms = nextValue(graphs[3],AmanitaMushrooms);
	botulinium = nextValue(graphs[4],botulinium);
	methanol = nextValue(graphs[5],methanol);


	ethanol = constrain(ethanol, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	calcium_gluconate = constrain(calcium_gluconate, 0, 1);


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
	text('cyanide: ' + nf(cyanide,1,2), 20,20);
	fill(colors[1]);
	text('alcohol: ' + nf(alcohol,1,2), 20,40);
	fill(colors[2]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,60);
	fill(colors[3]);
	text('AmanitaMushrooms: ' + nf(AmanitaMushrooms,1,2), 20,80);
	fill(colors[4]);
	text('botulinium: ' + nf(botulinium,1,2), 20,100);
	fill(colors[5]);
	text('methanol: ' + nf(methanol,1,2), 20,120);


	//draw the antidotes bar chart
	drawBar(ethanol,50,'ethanol');
	drawBar(Sodium_Bicarbonate,200,'Sodium_Bicarbonate');
	drawBar(sulphates,350,'sulphates');
	drawBar(calcium_gluconate,500,'calcium_gluconate');


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
