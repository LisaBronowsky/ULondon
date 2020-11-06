/*

Officer: 1661810
CaseNum: 702-2-43226771-1661810

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a licence_plate of J8BOBR. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of sleuth_car and the cars in
carData to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveCar()
{
	/*
	This function should do the following: 
	 - increment sleuth_car's miles_travelled property by its accel_amt property 
	 - add a random amount between -0.05 and 0.05 to sleuth_car's engineRumble_amt property
	 - use the constrain function to constrain sleuth_car's engineRumble_amt property to values between 0.03 and 1.12
	 - call the CycleCarMotor function passing sleuth_car as an argument
	*/
}


function SwitchLanes(carObj)
{
	/*
	This function should do the following: 
	 - move carObj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_CoordA and Lane_CoordB to effect the change.
	 - finally you should return carObj at the end of the function.
	 hint: You will need to modify the x_pos property of carObj.
	*/
}


function SearchVehicleIsInfront( car_obj )
{
	/*
	This function should do the following: 
	 - determine if car_obj is in the same lane and less than 200px behind any of the cars in carData.
	 - do this by traversing carData and comparing each car's miles_travelled property to that of car_obj.
	 - use the licence_plate property of each car to ignore cars that match car_obj.
	 - if you find a car that matches these requirements then return the index representing the car's position in carData. Otherwise return false.
	*/
}


function CheckCarParallel( vehicle )
{
	/*
	This function should do the following: 
	 - determine if vehicleis parallel with sleuth_car.
	 - if vehicle is found to be parallel to sleuth_car then return vehicle.
	 - cars are considered parallel if the absolute difference between their miles_travelled properties is less than 25 px and they have non-matching x_pos properties	*/
}


function DetectSuspect()
{
	/*
	This function should do the following: 
	 - Check cars passing parallel to sleuth_car to see if they match the licence_plate property in the suspect description.
	 - it does this by traversing carData and calling CheckCarParallel for each car
.	 - if a positive result is returned then the licence_plate property of the found car is then checked against the suspect description.
	 - if a match is found then the car in question is assigned to the global variable suspect.
	*/
}


//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var sleuth_car;

var roadWidth;
var roadLeftEdge;
var Lane_CoordA;
var Lane_CoordB;
var carImages = {};
var suspect;

var carData = [
{ x_pos: 300, y_pos: 0, miles_travelled: -200, car_type: 'greenCar', licence_plate: '9W9M8Y', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 200, car_type: 'whiteCar', licence_plate: 'V7QO83', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 600, car_type: 'greenCar', licence_plate: '1SBP2P', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 1000, car_type: 'greenCar', licence_plate: '5Y9DV8', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 1400, car_type: 'blueCar', licence_plate: 'O9Y3A0', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 1800, car_type: 'whiteCar', licence_plate: '5J4KNR', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 2200, car_type: 'greenCar', licence_plate: 'Y45PWA', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 2600, car_type: 'redCar', licence_plate: '7V30LX', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 3000, car_type: 'redCar', licence_plate: 'HK7X24', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 3400, car_type: 'whiteCar', licence_plate: '3G86AB', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 3800, car_type: 'blueCar', licence_plate: 'J8BOBR', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 4200, car_type: 'greenCar', licence_plate: 'XMGJ79', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 4600, car_type: 'greenCar', licence_plate: 'QNO7Y3', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 5000, car_type: 'greenCar', licence_plate: 'G20H4E', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 5400, car_type: 'blueCar', licence_plate: 'X42J3N', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 5800, car_type: 'redCar', licence_plate: '5Q2V5U', accel_amt: 2, exhaust: [  ]} , { x_pos: 300, y_pos: 0, miles_travelled: 6200, car_type: 'redCar', licence_plate: 'IFPUMV', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 6600, car_type: 'blueCar', licence_plate: '6JJMDR', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 7000, car_type: 'greenCar', licence_plate: 'BZL5Z0', accel_amt: 2, exhaust: [  ]} , { x_pos: 500, y_pos: 0, miles_travelled: 7400, car_type: 'blueCar', licence_plate: 'W18ZT9', accel_amt: 2, exhaust: [  ]} 
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
	textSize(30);
	textAlign(CENTER);

	roadWidth = 400;
	roadLeftEdge = 200;
	Lane_CoordA = 300;
	Lane_CoordB = 500;

	sleuth_car = 
	{
		x_pos: roadLeftEdge + roadWidth/4,
		y_pos: 550,
		miles_travelled: 0,
		accel_amt: 3,
		engineRumble_amt: 0,
		car_type: 'detective',
		licence_plate: '5L3UTH',
		exhaust: []
	}


}



function draw()
{
	background(0);



	drawRoad();
	drawCars();

	if(suspect)
	{
		fill(255);

		text("suspect found !", width/2, height/2);
		return;
	}

	////////////////////// HANDLE DETECTIVE /////////////////////////

	MoveCar();
	var b2b = SearchVehicleIsInfront( sleuth_car );
	if(b2b)SwitchLanes(sleuth_car);
	DetectSuspect();


	//////////////////////HANDLE THE OTHER CARS//////////////////////

	for(var i = 0; i < carData.length; i++)
	{
		carData[i].miles_travelled += carData[i].accel_amt;
		carData[i].y_pos = sleuth_car.y_pos - carData[i].miles_travelled + sleuth_car.miles_travelled;
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
		roadLeftEdge + roadWidth/2 , i * 100 + (sleuth_car.miles_travelled%100),
		roadLeftEdge + roadWidth/2 , i * 100 + 70 + (sleuth_car.miles_travelled%100)
		);
	}
}

function drawCars()
{
	//draw the detective car

	image
	drawExhaust(sleuth_car);
	image
	(
		carImages["detective"],
		sleuth_car.x_pos - carImages["detective"].width/2 + random(-sleuth_car.engineRumble_amt, sleuth_car.engineRumble_amt),
		sleuth_car.y_pos + random(-sleuth_car.engineRumble_amt, sleuth_car.engineRumble_amt)
	);

	//draw all other cars

	for(var i = 0; i < carData.length; i ++)
	{
		if(carData[i].y_pos < height && carData[i].y_pos > -height/2)
		{
			image(
			carImages[carData[i].car_type],
			carData[i].x_pos - carImages[carData[i].car_type].width/2,
			carData[i].y_pos
			);
			CycleCarMotor(carData[i]);

			drawExhaust(carData[i]);
		}
	}

}

function CycleCarMotor(car)
{

	car.exhaust.push({size: 2, x: car.x_pos, y: car.y_pos + carImages[car.car_type].height});

	for(var i = car.exhaust.length -1; i >= 0 ; i--)
	{

		car.exhaust[i].y  += max(0.75, car.accel_amt/3);
		if(car.car_type != "detective")car.exhaust[i].y += (sleuth_car.accel_amt - car.accel_amt);
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
