/*
Officer: 1661810
CaseNum: 601-2-13067030-1661810

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, Crimson stroke triangles centered over each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, MidnightBlue fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 65 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke
- triangle() NB. Draw each triangle with the point roughly at its center.

- fill
- ellipse()


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var criminalLogbook = {
	pos_x: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	pos_y: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var crimeRecorded = [ 
  { PositionX : 409, PositionY : 446, VictimName : 'LINETTE MOHWAWK'},
  { PositionX : 443, PositionY : 419, VictimName : 'GAYLA WILLMAR'},
  { PositionX : 465, PositionY : 548, VictimName : 'JESSIA PORTOS'},
  { PositionX : 709, PositionY : 552, VictimName : 'LESLEY MONKSFORD'},
  { PositionX : 695, PositionY : 421, VictimName : 'DEEDEE PHINNEY'},
  { PositionX : 652, PositionY : 268, VictimName : 'NICOLE ASHELY'},
  { PositionX : 641, PositionY : 306, VictimName : 'LARRAINE PEGORD'},
  { PositionX : 119, PositionY : 344, VictimName : 'HANG NIEMELA'},
  { PositionX : 114, PositionY : 359, VictimName : 'BRIDGET BROADVIEW'},
  { PositionX : 90, PositionY : 490, VictimName : 'PIERRE DORCEY'},
  { PositionX : 76, PositionY : 516, VictimName : 'JULIANA ADVERSANE'},
  { PositionX : 615, PositionY : 741, VictimName : 'ERMELINDA OORIN'},
  { PositionX : 349, PositionY : 796, VictimName : 'JENIFFER DEAUVILLE'},
  { PositionX : 456, PositionY : 770, VictimName : 'JESUS FORSLIN'} 
];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

    noFill();
    stroke(220, 20, 60);
	//add your code below here
    //Sightings of casey fry
    for(var i=0; i<criminalLogbook.pos_x.length; i++){
        triangle(criminalLogbook.pos_x[i]-5, criminalLogbook.pos_y[i]-2.5, criminalLogbook.pos_x[i]+5, criminalLogbook.pos_y[i]-2.5, criminalLogbook.pos_x[i], criminalLogbook.pos_y[i]+2.5);
    }
    
    //recent crime records
    fill(25, 25, 112);
    noStroke();
    for(var j=0; j<crimeRecorded.length; j++){
        ellipse(crimeRecorded[j].PositionX, crimeRecorded[j].PositionY, 10);
    }
    
    //check for possibleMatches
    for(var k=0; k<crimeRecorded.length; k++){
         if(dist((criminalLogbook.pos_x[k], criminalLogbook.pos_y[k], crimeRecorded[k].PositionX, crimeRecorded[k].PositionY) <= 65)){
             var crimeMatched = ({suspect_x: criminalLogbook.pos_x[k], suspect_y: criminalLogbook.pos_y[k], crime_x: crimeRecorded[k].PositionX, crime_y: crimeRecorded[k].PositionY, VictimName: crimeRecorded[k].VictimName});
             possibleMatches.push(crimeMatched);
         }
    }

	// code to draw the matches (if any)
	for(let i = 0 ; i < possibleMatches.length ; i++){
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
