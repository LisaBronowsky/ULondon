/*

Officer: 1661810
CaseNum: 702-0-33762693-1661810

Case 702 - The case of Vanishing Vannevar
Stage 1 - Mobilise

“Calling all units: the notorious criminal and speedster known as Vanishing Vannevar is on the run.
All cars to mobilise.” Word has it that you’re pretty nifty behind the wheel. I want you in on
this action kid. Get your car on the road by completing the </DRIVE_NAME/> function below.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- increment variables
	- random
	- constrain
	- calling functions

HINT: make sure you take a look at the initialisation of DetectiveVehicle to understand it's properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function Move_Vehicle()
{
	/*
	This function should do the following: 
	 - increment DetectiveVehicle's DistanceAmount property by its AccelAmount property 
	 - add a random amount between -0.07 and 0.07 to DetectiveVehicle's EngineRumbleValue property
	 - use the constrain function to constrain DetectiveVehicle's EngineRumbleValue property to values between 0.05 and 1.05
	 - call the Cycle_CarMotor function passing DetectiveVehicle as an argument
	*/
    DetectiveVehicle.DistanceAmount += DetectiveVehicle.AccelAmount;
    DetectiveVehicle.EngineRumbleValue += random(-0.07, 0.07);
    DetectiveVehicle.EngineRumbleValue = constrain(DetectiveVehicle.EngineRumbleValue, 0.05, 1.05);
    Cycle_CarMotor(DetectiveVehicle);
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var DetectiveVehicle;

var roadWidth = 400;
var roadLeftEdge = 200;
var carImages = {};


function preload()
{
	carImages.detective = loadImage("cars/detective.png");
}

function setup()
{
	createCanvas(800,800);

	DetectiveVehicle = 
	{
		XPos: roadLeftEdge + roadWidth/4,
		YPos: 300,
		DistanceAmount: 0,
		AccelAmount: 3,
		EngineRumbleValue: 0,
		VehicleModel: 'detective',
		NumberPlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);


	Move_Vehicle();


	drawRoad();
	drawCars();
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad()
{
	stroke(100);
	fill(50);
	rect(roadLeftEdge,0,roadWidth,800);
	stroke(255);

	for(var i = -1; i < 20; i++)
	{
		line(
		roadLeftEdge + roadWidth/2 , i * 100 + (DetectiveVehicle.DistanceAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (DetectiveVehicle.DistanceAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(DetectiveVehicle);
	image
	(
		carImages["detective"],
		DetectiveVehicle.XPos - carImages["detective"].width/2 + random(-DetectiveVehicle.EngineRumbleValue, DetectiveVehicle.EngineRumbleValue),
		DetectiveVehicle.YPos + random(-DetectiveVehicle.EngineRumbleValue, DetectiveVehicle.EngineRumbleValue)
	);

}

function Cycle_CarMotor(car)
{

	car.exhaust.push({size: 2, x: car.XPos, y: car.YPos + carImages[car.VehicleModel].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelAmount/3);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height)
		{
			car.exhaust.splice(i,1);
		}
	}
}


function drawExhaust(car)
{
		noStroke();
		for(var i = 0; i < car.exhaust.length; i++)
		{
				var alpha = map(car.exhaust[i].size, 0, 40, 50,0);
				fill(125,alpha);
				ellipse(car.exhaust[i].x + 20, car.exhaust[i].y , car.exhaust[i].size);

		}
}
