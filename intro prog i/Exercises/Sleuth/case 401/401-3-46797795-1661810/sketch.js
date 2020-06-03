/*

Officer: 1661810
CaseNum: 401-3-46797795-1661810

Case 401 - The Case of Norbert's Weiner Stand
Stage 4 - Mortal Cupcake

It seems that Norbert is getting desperate now. In what appears to be his final
stand he has set up his own cupcake shop. The laced cupcakes look delicious but
they are extremely dangerous. Just a brief whiff of one can induce a series of
deadly symptoms. This is Norbert’s most complex poison to date, so you’ll have
to work hard to produce a viable antidote.

You must develop the antidote by using conditional statements in the draw loop to
do the following.

	- When alcohol dips below 0.27, or on the other hand, mercury dips below 0.52 and warfarin dips below 0.75, try decreasing antitoxin by 0.04
	- If lead goes above 0.64, or on the other hand, Spider_Venom goes above 0.67 and arsenic dips below 0.74, raise antitoxin by 0.01
	- If either ricin dips below 0.61, Spider_Venom dips below 0.54, or perhaps lead goes above 0.47, decrement methylene by 0.02
	- If polonium dips below 0.45, or on the other hand, alcohol dips below 0.4 and mercury goes above 0.34, increase methylene by 0.05
	- When ricin goes above 0.58, polonium dips below 0.27, mercury goes above 0.6, and also lead dips below 0.32, decrement antivenom by 0.03
	- When either warfarin goes above 0.48, arsenic dips below 0.25, Spider_Venom goes above 0.28, or perhaps alcohol goes above 0.34, increase antivenom by 0.04
	- If lead goes above 0.68 or warfarin dips below 0.36, whilst at the same time, ricin dips below 0.56 and arsenic dips below 0.53, decrease aspirin by 0.02
	- When mercury dips below 0.38, whilst at the same time, polonium dips below 0.27 or Spider_Venom goes above 0.5, increase aspirin by 0.03
	- If lead dips below 0.71 and arsenic dips below 0.71, whilst at the same time, ricin dips below 0.3 or polonium goes above 0.61, decrease Sodium_Bicarbonate by 0.01
	- If either mercury goes above 0.26, alcohol goes above 0.41, or perhaps Spider_Venom dips below 0.72, increase Sodium_Bicarbonate by 0.01


Your conditional statements should:

consider the following poisons:

	- mercury
	- Spider_Venom
	- ricin
	- arsenic
	- lead
	- warfarin
	- alcohol
	- polonium


and modify the following antidotes:

	- antitoxin
	- methylene
	- antivenom
	- aspirin
	- Sodium_Bicarbonate


- There are many ways to complete this task but you should only use the
following commands:

	if(){}
	+=
	-=

*/

//Declare the poison variables
var mercury;
var Spider_Venom;
var ricin;
var arsenic;
var lead;
var warfarin;
var alcohol;
var polonium;


//Declare the antidote variables
var antitoxin;
var methylene;
var antivenom;
var aspirin;
var Sodium_Bicarbonate;


//This variable is used for drawing the graph
var graphs;


function setup()
{

	createCanvas(800,600);
	strokeWeight(2);

	//initialise the poisons and antidotes
	mercury = 0.5;
	Spider_Venom = 0.5;
	ricin = 0.5;
	arsenic = 0.5;
	lead = 0.5;
	warfarin = 0.5;
	alcohol = 0.5;
	polonium = 0.5;
	antitoxin = 0.5;
	methylene = 0.5;
	antivenom = 0.5;
	aspirin = 0.5;
	Sodium_Bicarbonate = 0.5;


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
//  - When alcohol dips below 0.27, or on the other hand, mercury dips below 0.52 and warfarin dips below 0.75, try decreasing antitoxin by 0.04
    if(alcohol<0.27 || (mercury < 0.52 && warfarin<0.75)){
        antitoxin -= 0.04;
    }
//	- If lead goes above 0.64, or on the other hand, Spider_Venom goes above 0.67 and arsenic dips below 0.74, raise antitoxin by 0.01
    if(lead > 0.64 || (Spider_Venom > 0.67 && arsenic < 0.74)){
        antitoxin += 0.01;
    }
//	- If either ricin dips below 0.61, Spider_Venom dips below 0.54, or perhaps lead goes above 0.47, decrement methylene by 0.02
    if(ricin < 0.61 || Spider_Venom < 0.54 || lead > 0.47){
        methylene -= 0.02;
    }
//	- If polonium dips below 0.45, or on the other hand, alcohol dips below 0.4 and mercury goes above 0.34, increase methylene by 0.05
    if(polonium < 0.45 || (alcohol < 0.4 && mercury > 0.34)){
        methylene += 0.05;
    }
//	- When ricin goes above 0.58, polonium dips below 0.27, mercury goes above 0.6, and also lead dips below 0.32, decrement antivenom by 0.03
    if(ricin > 0.58 && polonium < 0.27 && mercury > 0.6 && lead < 0.32){
        antivenom -= 0.03;
    }
//	- When either warfarin goes above 0.48, arsenic dips below 0.25, Spider_Venom goes above 0.28, or perhaps alcohol goes above 0.34, increase antivenom by 0.04
    if(warfarin > 0.48 || arsenic < 0.25 || Spider_Venom > 0.28 || alcohol > 0.34){
        antivenom += 0.04;
    }
//	- If lead goes above 0.68 or warfarin dips below 0.36, whilst at the same time, ricin dips below 0.56 and arsenic dips below 0.53, decrease aspirin by 0.02
    if((lead > 0.69 || warfarin < 0.36) && (ricin < 0.56 && arsenic < 0.53)){
        aspirin -= 0.02;
    }
//	- When mercury dips below 0.38, whilst at the same time, polonium dips below 0.27 or Spider_Venom goes above 0.5, increase aspirin by 0.03
    if(mercury < 0.38 && (polonium < 0.27 || Spider_Venom > 0.5)){
        aspirin += 0.03;
    }
//	- If lead dips below 0.71 and arsenic dips below 0.71, whilst at the same time, ricin dips below 0.3 or polonium goes above 0.61, decrease Sodium_Bicarbonate by 0.01
    if((lead < 0.71 && arsenic < 0.71) && (ricin < 0.3 || polonium > 0.61)){
        Sodium_Bicarbonate -= 0.01;
    }
//	- If either mercury goes above 0.26, alcohol goes above 0.41, or perhaps Spider_Venom dips below 0.72, increase Sodium_Bicarbonate by 0.01
    if(mercury > 0.26 || alcohol > 0.41 || Spider_Venom < 0.72){
        Sodium_Bicarbonate += 0.01;
    }



	//////////////////////////////////////////////////////

	//the code below generates new values using random numbers

	/*
		For testing, you might want to temporarily comment out
		these lines and set the same variables to constant values
		instead.
	*/

	mercury = nextValue(graphs[0],mercury);
	Spider_Venom = nextValue(graphs[1],Spider_Venom);
	ricin = nextValue(graphs[2],ricin);
	arsenic = nextValue(graphs[3],arsenic);
	lead = nextValue(graphs[4],lead);
	warfarin = nextValue(graphs[5],warfarin);
	alcohol = nextValue(graphs[6],alcohol);
	polonium = nextValue(graphs[7],polonium);


	antitoxin = constrain(antitoxin, 0, 1);
	methylene = constrain(methylene, 0, 1);
	antivenom = constrain(antivenom, 0, 1);
	aspirin = constrain(aspirin, 0, 1);
	Sodium_Bicarbonate = constrain(Sodium_Bicarbonate, 0, 1);


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
	text('mercury: ' + nf(mercury,1,2), 20,20);
	fill(colors[1]);
	text('Spider_Venom: ' + nf(Spider_Venom,1,2), 20,40);
	fill(colors[2]);
	text('ricin: ' + nf(ricin,1,2), 20,60);
	fill(colors[3]);
	text('arsenic: ' + nf(arsenic,1,2), 20,80);
	fill(colors[4]);
	text('lead: ' + nf(lead,1,2), 20,100);
	fill(colors[5]);
	text('warfarin: ' + nf(warfarin,1,2), 20,120);
	fill(colors[6]);
	text('alcohol: ' + nf(alcohol,1,2), 20,140);
	fill(colors[7]);
	text('polonium: ' + nf(polonium,1,2), 20,160);


	//draw the antidotes bar chart
	drawBar(antitoxin,50,'antitoxin');
	drawBar(methylene,200,'methylene');
	drawBar(antivenom,350,'antivenom');
	drawBar(aspirin,500,'aspirin');
	drawBar(Sodium_Bicarbonate,650,'Sodium_Bicarbonate');


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
