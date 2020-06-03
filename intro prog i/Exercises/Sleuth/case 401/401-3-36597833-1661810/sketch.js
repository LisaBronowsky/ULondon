/*

Officer: 1661810
CaseNum: 401-3-36597833-1661810

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When Amanita_Mushrooms dips below 0.36, warfarin dips below 0.34, insecticide dips below 0.29, and also novichok dips below 0.36, decrement aspirin by 0.03
	- If Snake_Venom dips below 0.57, whilst at the same time, formaldehyde dips below 0.74 or arsenic goes above 0.35, increment aspirin by 0.04
	- If Amanita_Mushrooms goes above 0.34 and warfarin dips below 0.67, whilst at the same time, novichok dips below 0.62 or formaldehyde goes above 0.59, decrement sulphates by 0.05
	- If chlorine dips below 0.43 or Snake_Venom goes above 0.47, or on the other hand, arsenic dips below 0.7 and insecticide dips below 0.53, try increasing sulphates by 0.02
	- When either Snake_Venom dips below 0.38, warfarin dips below 0.74, or perhaps chlorine goes above 0.28, try decreasing glucagon by 0.03
	- If either Amanita_Mushrooms goes above 0.54, insecticide goes above 0.62, or perhaps novichok goes above 0.67, increase glucagon by 0.01
	- If insecticide dips below 0.45, whilst at the same time, Snake_Venom dips below 0.47 or chlorine dips below 0.41, decrease plasma by 0.02
	- When novichok goes above 0.59 or formaldehyde dips below 0.67, whilst at the same time, warfarin goes above 0.65 or Amanita_Mushrooms goes above 0.59, try increasing plasma by 0.04
	- If Amanita_Mushrooms dips below 0.5 and insecticide goes above 0.25, or on the other hand, arsenic dips below 0.44 and warfarin goes above 0.53, try decreasing antitoxin by 0.01
	- If novichok goes above 0.65 and Snake_Venom dips below 0.31, or on the other hand, chlorine dips below 0.46 and formaldehyde dips below 0.35, raise antitoxin by 0.01


Your conditional statements should:

consider the following poisons:

	- arsenic
	- formaldehyde
	- warfarin
	- chlorine
	- novichok
	- Amanita_Mushrooms
	- insecticide
	- Snake_Venom


and modify the following antidotes:

	- aspirin
	- sulphates
	- glucagon
	- plasma
	- antitoxin


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var arsenic;
var formaldehyde;
var warfarin;
var chlorine;
var novichok;
var Amanita_Mushrooms;
var insecticide;
var Snake_Venom;


//Declare the antidote variables
var aspirin;
var sulphates;
var glucagon;
var plasma;
var antitoxin;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	arsenic = 0.5;
	formaldehyde = 0.5;
	warfarin = 0.5;
	chlorine = 0.5;
	novichok = 0.5;
	Amanita_Mushrooms = 0.5;
	insecticide = 0.5;
	Snake_Venom = 0.5;
	aspirin = 0.5;
	sulphates = 0.5;
	glucagon = 0.5;
	plasma = 0.5;
	antitoxin = 0.5;


	//fills the graph with empty values
	graphs = [];

	for(var i = 0; i < 8; i++)
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
//  - When Amanita_Mushrooms dips below 0.36, warfarin dips below 0.34, insecticide dips below 0.29, and also novichok dips below 0.36, decrement aspirin by 0.03
    if(Amanita_Mushrooms<0.36 && warfarin<0.34 && insecticide<0.29 && novichok<0.36){
        aspirin -= 0.03;
    }
//	- If Snake_Venom dips below 0.57, whilst at the same time, formaldehyde dips below 0.74 or arsenic goes above 0.35, increment aspirin by 0.04
    if(Snake_Venom<0.57 && (formaldehyde<0.74 || arsenic>0.35)){
        aspirin += 0.04;
    }
//	- If Amanita_Mushrooms goes above 0.34 and warfarin dips below 0.67, whilst at the same time, novichok dips below 0.62 or formaldehyde goes above 0.59, decrement sulphates by 0.05
    if(Amanita_Mushrooms>0.34 && warfarin<0.67 && (novichok<0.62 || formaldehyde>0.59)){
        sulphates -= 0.05;
    }
//	- If chlorine dips below 0.43 or Snake_Venom goes above 0.47, or on the other hand, arsenic dips below 0.7 and insecticide dips below 0.53, try increasing sulphates by 0.02
    if(chlorine<0.43 || Snake_Venom>0.47 || (arsenic<0.7 && insecticide<0.53)){
        sulphates += 0.02;
    }
//	- When either Snake_Venom dips below 0.38, warfarin dips below 0.74, or perhaps chlorine goes above 0.28, try decreasing glucagon by 0.03
    if((Snake_Venom<0.38 || warfarin<0.74) || chlorine>0.28){
        glucagon -= 0.03;
    }
//	- If either Amanita_Mushrooms goes above 0.54, insecticide goes above 0.62, or perhaps novichok goes above 0.67, increase glucagon by 0.01
    if(Amanita_Mushrooms>0.54 || insecticide>0.62 || novichok>0.67){
        glucagon += 0.01;
    }
//	- If insecticide dips below 0.45, whilst at the same time, Snake_Venom dips below 0.47 or chlorine dips below 0.41, decrease plasma by 0.02
    if(insecticide<0.45 && Snake_Venom<0.47 || chlorine<0.41){
        plasma -= 0.02;
    }
//	- When novichok goes above 0.59 or formaldehyde dips below 0.67, whilst at the same time, warfarin goes above 0.65 or Amanita_Mushrooms goes above 0.59, try increasing plasma by 0.04
    if((novichok>0.59 || formaldehyde<0.67) && (warfarin>0.65 || Amanita_Mushrooms>0.59)){
        plasma += 0.04;
    }
//	- If Amanita_Mushrooms dips below 0.5 and insecticide goes above 0.25, or on the other hand, arsenic dips below 0.44 and warfarin goes above 0.53, try decreasing antitoxin by 0.01
    if((Amanita_Mushrooms<0.5 && insecticide>0.25) || (arsenic<0.44 && warfarin>0.53)){
        antitoxin -= 0.01;
    }
//	- If novichok goes above 0.65 and Snake_Venom dips below 0.31, or on the other hand, chlorine dips below 0.46 and formaldehyde dips below 0.35, raise antitoxin by 0.01
    if((novichok>0.65 && Snake_Venom<0.31) || (chlorine<0.46 && formaldehyde<0.35)){
        antitoxin += 0.01;
    }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	arsenic = nextValue(graphs[0],arsenic);
	formaldehyde = nextValue(graphs[1],formaldehyde);
	warfarin = nextValue(graphs[2],warfarin);
	chlorine = nextValue(graphs[3],chlorine);
	novichok = nextValue(graphs[4],novichok);
	Amanita_Mushrooms = nextValue(graphs[5],Amanita_Mushrooms);
	insecticide = nextValue(graphs[6],insecticide);
	Snake_Venom = nextValue(graphs[7],Snake_Venom);


	aspirin = constrain(aspirin, 0, 1);
	sulphates = constrain(sulphates, 0, 1);
	glucagon = constrain(glucagon, 0, 1);
	plasma = constrain(plasma, 0, 1);
	antitoxin = constrain(antitoxin, 0, 1);


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
		color(0, 255, 255),
		color(255, 100, 100),
		color(255, 100, 0)
	];

	for(var i = 0; i < graphs.length; i++)
	{
		stroke(colors[i]);
		drawGraph(graphs[i]);
	}

	//draw the poisons as text
	noStroke();
	fill(colors[0]);
	text('arsenic: ' + nf(arsenic,1,2), 20,20);
	fill(colors[1]);
	text('formaldehyde: ' + nf(formaldehyde,1,2), 20,40);
	fill(colors[2]);
	text('warfarin: ' + nf(warfarin,1,2), 20,60);
	fill(colors[3]);
	text('chlorine: ' + nf(chlorine,1,2), 20,80);
	fill(colors[4]);
	text('novichok: ' + nf(novichok,1,2), 20,100);
	fill(colors[5]);
	text('Amanita_Mushrooms: ' + nf(Amanita_Mushrooms,1,2), 20,120);
	fill(colors[6]);
	text('insecticide: ' + nf(insecticide,1,2), 20,140);
	fill(colors[7]);
	text('Snake_Venom: ' + nf(Snake_Venom,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(aspirin,50,'aspirin');
	drawBar(sulphates,200,'sulphates');
	drawBar(glucagon,350,'glucagon');
	drawBar(plasma,500,'plasma');
	drawBar(antitoxin,650,'antitoxin');


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
