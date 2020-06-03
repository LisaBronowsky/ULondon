/*

Officer: 1661810
CaseNum: 401-1-61808864-1661810

Case 401 - The Case of Norbert's Weiner Stand
Stage 2 - Toxic Burrito

Norbert is at it again. This time he’s set up a burrito stall and is lacing burritos
with his foul toxin. The chaos is spreading. People are dropping like flies and burrito
sales have fallen through the floor. To make matters worse it seems Norbert has cottoned
on to our methods and has upped the complexity of his poison. You’ll find the antidote
harder to develop this time. So kid, head down to the lab and get working.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- If nerveGas goes above 0.57 and insecticide goes above 0.51, decrement glucagon by 0.02
	- If Deadly_Nightshade goes above 0.56 and novichok dips below 0.54, increment glucagon by 0.02
	- When insecticide goes above 0.6 or novichok dips below 0.46, decrement antivenom by 0.01
	- When Deadly_Nightshade goes above 0.43 and nerveGas dips below 0.43, try increasing antivenom by 0.05
	- When Deadly_Nightshade goes above 0.59, decrease calciumGluconate by 0.05
	- If novichok goes above 0.48, try increasing calciumGluconate by 0.05
	- When nerveGas goes above 0.66 or novichok goes above 0.55, decrease aspirin by 0.02
	- When Deadly_Nightshade dips below 0.38 or insecticide goes above 0.25, increment aspirin by 0.01


Your conditional statements should:

consider the following poisons:

	- novichok
	- insecticide
	- nerveGas
	- Deadly_Nightshade


and modify the following antidotes:

	- glucagon
	- antivenom
	- calciumGluconate
	- aspirin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var novichok;
var insecticide;
var nerveGas;
var Deadly_Nightshade;


//Declare the antidote variables
var glucagon;
var antivenom;
var calciumGluconate;
var aspirin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	novichok = 0.5;
	insecticide = 0.5;
	nerveGas = 0.5;
	Deadly_Nightshade = 0.5;
	glucagon = 0.5;
	antivenom = 0.5;
	calciumGluconate = 0.5;
	aspirin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 4; i++)
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
//  - If nerveGas goes above 0.57 and insecticide goes above 0.51, decrement glucagon by 0.02
//	- If Deadly_Nightshade goes above 0.56 and novichok dips below 0.54, increment glucagon by 0.02
//	- When insecticide goes above 0.6 or novichok dips below 0.46, decrement antivenom by 0.01
//	- When Deadly_Nightshade goes above 0.43 and nerveGas dips below 0.43, try increasing antivenom by 0.05
//	- When Deadly_Nightshade goes above 0.59, decrease calciumGluconate by 0.05
//	- If novichok goes above 0.48, try increasing calciumGluconate by 0.05
//	- When nerveGas goes above 0.66 or novichok goes above 0.55, decrease aspirin by 0.02
//	- When Deadly_Nightshade dips below 0.38 or insecticide goes above 0.25, increment aspirin by 0.01
    
    if(nerveGas>0.57 && insecticide >0.51){
        glucagon -= 0.02;
    }
    if(Deadly_Nightshade>0.56 && novichok<0.54){
        glucagon += 0.02;
    }
    if(insecticide>0.6 || novichok<0.46){
        antivenom -= 0.01;
    }
    if(Deadly_Nightshade>0.43 && nerveGas<0.43){
        antivenom += 0.05;
    }
    if(Deadly_Nightshade>0.59){
        calciumGluconate -= 0.05;
    }
    if(novichok>0.48){
        calciumGluconate += 0.05;
    }
    if(nerveGas>0.66 || novichok>0.55){
        aspirin -= 0.02;
    }
    if(Deadly_Nightshade<0.38 || insecticide>0.25){
        aspirin += 0.01;
    }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	novichok = nextValue(graphs[0],novichok);
	insecticide = nextValue(graphs[1],insecticide);
	nerveGas = nextValue(graphs[2],nerveGas);
	Deadly_Nightshade = nextValue(graphs[3],Deadly_Nightshade);


	glucagon = constrain(glucagon, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	calciumGluconate = constrain(calciumGluconate, 0, 1);
	aspirin = constrain(aspirin, 0, 1);


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
	text('novichok: ' + nf(novichok,1,2), 20,20);
	fill(colors[1]);
	text('insecticide: ' + nf(insecticide,1,2), 20,40);
	fill(colors[2]);
	text('nerveGas: ' + nf(nerveGas,1,2), 20,60);
	fill(colors[3]);
	text('Deadly_Nightshade: ' + nf(Deadly_Nightshade,1,2), 20,80);


	//draw the antidotes bar chart
	drawBar(glucagon,50,'glucagon');
	drawBar(antivenom,200,'antivenom');
	drawBar(calciumGluconate,350,'calciumGluconate');
	drawBar(aspirin,500,'aspirin');


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
