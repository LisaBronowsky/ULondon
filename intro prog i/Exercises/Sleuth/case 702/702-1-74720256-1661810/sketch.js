/*

Officer: 1661810
CaseNum: 702-1-74720256-1661810

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of InvestigatorCarObject and the cars in
CarsList to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function DriveVehicle()
{
	/*
	This function should do the following: 
	 - increment InvestigatorCarObject's DistanceAmount property by its AccelVal property 
	 - add a random amount between -0.08 and 0.08 to InvestigatorCarObject's EngineShudderAmount property
	 - use the constrain function to constrain InvestigatorCarObject's EngineShudderAmount property to values between 0.03 and 1.01
	 - call the DriveMotor function passing InvestigatorCarObject as an argument
	*/
    InvestigatorCarObject.DistanceAmount += InvestigatorCarObject.AccelVal;
    InvestigatorCarObject.EngineShudderAmount += random(-0.08,0.08);
    InvestigatorCarObject.EngineShudderAmount = constrain(InvestigatorCarObject.EngineShudderAmount, 0.03, 1.01);
    DriveMotor(InvestigatorCarObject);
}


function MoveLanes(targetVehicle)
{
	/*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use LanePositionA and LanePositionB to effect the change.
	 - finally you should return targetVehicle at the end of the function.
	 hint: You will need to modify the XCoord property of targetVehicle.
	*/
    if(targetVehicle.XCoord == LanePositionA){
    targetVehicle.XCoord = LanePositionB;
    }
    else if(targetVehicle.XCoord == LanePositionB){
        targetVehicle.XCoord = LanePositionA;
    }
    return targetVehicle;
}


function SearchCarInfront( TargetVehicleA, TargetVehicleB )
{
	/*
	This function should do the following: 
	 - determine if TargetVehicleA is in the same lane and less than 200px behind TargetVehicleB.
	 - do this by comparing the two cars' DistanceAmount properties
	 - if these requirements are met then return true. Otherwise return false.
	*/
    if(TargetVehicleA.XCoord == TargetVehicleB.XCoord && TargetVehicleA.DistanceAmount < TargetVehicleB.DistanceAmount && TargetVehicleB.DistanceAmount-200 < TargetVehicleA.DistanceAmount){
        return true;
    }
    else{
        return false;
    }
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var InvestigatorCarObject;

var roadWidth;
var roadLeftEdge;
var LanePositionA;
var LanePositionB;
var carImages = {};

var CarsList = [
{ XCoord: 500, YCoord: 0, DistanceAmount: -200, CarClassification: 'greenCar', LicencePlate: 'NEE49G', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 200, CarClassification: 'whiteCar', LicencePlate: 'FK857V', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 600, CarClassification: 'whiteCar', LicencePlate: 'EZ6AJS', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 1000, CarClassification: 'blueCar', LicencePlate: 'X9ZRIV', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 1400, CarClassification: 'blueCar', LicencePlate: 'AQG1AE', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 1800, CarClassification: 'greenCar', LicencePlate: '3C6QNM', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 2200, CarClassification: 'redCar', LicencePlate: 'ZU9GXM', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 2600, CarClassification: 'whiteCar', LicencePlate: '6N9YXG', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 3000, CarClassification: 'blueCar', LicencePlate: 'MQTV4W', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 3400, CarClassification: 'whiteCar', LicencePlate: 'SXGHNG', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 3800, CarClassification: 'greenCar', LicencePlate: 'Z0IE9E', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 4200, CarClassification: 'blueCar', LicencePlate: 'O8D0SJ', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 4600, CarClassification: 'whiteCar', LicencePlate: '87DR69', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 5000, CarClassification: 'whiteCar', LicencePlate: 'AU9ZD6', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 5400, CarClassification: 'greenCar', LicencePlate: '0PCEZK', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 5800, CarClassification: 'blueCar', LicencePlate: 'RV1KB9', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 6200, CarClassification: 'greenCar', LicencePlate: 'P7D46K', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 6600, CarClassification: 'whiteCar', LicencePlate: '5DCNX2', AccelVal: 2, exhaust: [  ]} , { XCoord: 300, YCoord: 0, DistanceAmount: 7000, CarClassification: 'greenCar', LicencePlate: 'LJQPT7', AccelVal: 2, exhaust: [  ]} , { XCoord: 500, YCoord: 0, DistanceAmount: 7400, CarClassification: 'redCar', LicencePlate: 'S90YHV', AccelVal: 2, exhaust: [  ]} 
];



function preload()
{
	var carTypes = [
		"detective",
		"redCar",
		"greenCar",
		"blueCar",
		"whiteCar",
	];

	for(var i = 0; i < carTypes.length; i++)
	{
		carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
	}
}

function setup()
{
	createCanvas(800,800);

	roadWidth = 400;
	roadLeftEdge = 200;
	LanePositionA = 300;
	LanePositionB = 500;

	InvestigatorCarObject = 
	{
		XCoord: roadLeftEdge + roadWidth/4,
		YCoord: 550,
		DistanceAmount: 0,
		AccelVal: 3,
		EngineShudderAmount: 0,
		CarClassification: 'detective',
		LicencePlate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	////////////////////// HANDLE DETECTIVE /////////////////////////


	DriveVehicle();
	for(var i = 0; i < CarsList.length; i++)
	{
var b2b = SearchCarInfront(InvestigatorCarObject, CarsList[i]);
		if(b2b)MoveLanes(InvestigatorCarObject);
	}


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < CarsList.length; i++)
	{
		CarsList[i].DistanceAmount += CarsList[i].AccelVal;
		CarsList[i].YCoord = InvestigatorCarObject.YCoord - CarsList[i].DistanceAmount + InvestigatorCarObject.DistanceAmount;
	}

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
		roadLeftEdge + roadWidth/2 , i * 100 + (InvestigatorCarObject.DistanceAmount%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (InvestigatorCarObject.DistanceAmount%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(InvestigatorCarObject);
	image
	(
		carImages["detective"],
		InvestigatorCarObject.XCoord - carImages["detective"].width/2 + random(-InvestigatorCarObject.EngineShudderAmount, InvestigatorCarObject.EngineShudderAmount),
		InvestigatorCarObject.YCoord + random(-InvestigatorCarObject.EngineShudderAmount, InvestigatorCarObject.EngineShudderAmount)
	);

	//draw all other cars

	for(var i = 0; i < CarsList.length; i ++)
	{
		if(CarsList[i].YCoord < height && CarsList[i].YCoord > -height/2)
		{
			image(
			carImages[CarsList[i].CarClassification],
			CarsList[i].XCoord - carImages[CarsList[i].CarClassification].width/2,
			CarsList[i].YCoord
			);
			DriveMotor(CarsList[i]);

			drawExhaust(CarsList[i]);
		}
	}

}

function DriveMotor(car)
{

	car.exhaust.push({size: 2, x: car.XCoord, y: car.YCoord + carImages[car.CarClassification].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.AccelVal/3);
		if(car.CarClassification != "detective")car.exhaust[i].y += (InvestigatorCarObject.AccelVal - car.AccelVal);
		car.exhaust[i].x += random(-1,1);
		car.exhaust[i].size += 0.5;

		if(car.exhaust[i].y  > height || car.exhaust[i].y < 0)
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
