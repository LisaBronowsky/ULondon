/*
Officer: 1661810
CaseNum: 601-3-82405914-1661810

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, LightSeaGreen fill rectangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Turquoise stroke ellipses at each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 93 pixels of any of the crimes within no more than 1 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- fill
- rect() NB. Draw each rectangle with the point at its center.

- stroke
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var caseyFryLog = {
	Coordinate_X: [518, 486, 475, 376, 316, 265, 253, 240, 220, 178, 199, 146, 115, 67, 39, 68],
	Coordinate_Y: [471, 508, 566, 554, 559, 614, 609, 604, 597, 600, 604, 582, 551, 495, 493, 461],
	date: [12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 17, 18, 20, 21, 22, 24],
};

//Recent crime records.

var murdersceneData = [ 
  { pt_x : 438, pt_y : 420, recordDate : 11, murdered_details : 'MAJORIE JENI'},
  { pt_x : 408, pt_y : 451, recordDate : 11, murdered_details : 'GAYLA WILLMAR'},
  { pt_x : 408, pt_y : 377, recordDate : 13, murdered_details : 'DARBY MYRLE'},
  { pt_x : 642, pt_y : 289, recordDate : 16, murdered_details : 'LAVERNE JACQUELIN'},
  { pt_x : 623, pt_y : 279, recordDate : 16, murdered_details : 'NICOLE ASHELY'},
  { pt_x : 95, pt_y : 488, recordDate : 17, murdered_details : 'JULIANA ADVERSANE'},
  { pt_x : 75, pt_y : 522, recordDate : 18, murdered_details : 'TU DAVISWOOD'},
  { pt_x : 269, pt_y : 597, recordDate : 26, murdered_details : 'JENIFFER DEAUVILLE'},
  { pt_x : 389, pt_y : 554, recordDate : 28, murdered_details : 'KITTY THAXTER'},
  { pt_x : 484, pt_y : 549, recordDate : 2, murdered_details : 'HANG NIEMELA'},
  { pt_x : 496, pt_y : 484, recordDate : 9, murdered_details : 'LINETTE MOHWAWK'},
  { pt_x : 546, pt_y : 463, recordDate : 14, murdered_details : 'LAKESHA SYMMES'},
  { pt_x : 538, pt_y : 359, recordDate : 12, murdered_details : 'SUMMER CASIMERE'},
  { pt_x : 702, pt_y : 412, recordDate : 17, murdered_details : 'DRUSILLA WARMAN'},
  { pt_x : 817, pt_y : 474, recordDate : 18, murdered_details : 'PIERRE DORCEY'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    fill(32, 178, 170);
    for(var i=0; i<caseyFryLog.Coordinate_X.length; i++){
        rect(caseyFryLog.Coordinate_X[i], caseyFryLog.Coordinate_Y[i], 10, 10);
    }

    noFill();
    stroke(64, 224, 208);
    for(var i=0; i<murdersceneData.length; i++){
        ellipse(murdersceneData[i].pt_x, murdersceneData[i].pt_y, 10, 10);
    }

/*This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 93 pixels of any of the crimes within no more than 1 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }*/
    
    for(var i=0; i<murdersceneData.length; i++){
        if((dist(murdersceneData[i].pt_x, murdersceneData[i].pt_y, caseyFryLog.Coordinate_X[i], caseyFryLog.Coordinate_Y[i])) < 93 && abs(murdersceneData[i].recordDate - caseyFryLog.date[i]) <= 1){
            
            possibleMatches.push({crime:{x: murdersceneData[i].pt_x, y:murdersceneData[i].pt_y, victimName: murdersceneData[i].murdered_details}, suspect:{x: caseyFryLog.Coordinate_X[i], y:caseyFryLog.Coordinate_Y[i]}});
        }
    }


	// code to draw the matches (if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime.x, possibleMatches[i].crime.y, possibleMatches[i].suspect.x, possibleMatches[i].suspect.y);

		noStroke();
		fill(127);
		text(possibleMatches[i].crime.victimName, possibleMatches[i].crime.x + 15, possibleMatches[i].crime.y + 15);
	}
}

//We are not using the draw function this time
