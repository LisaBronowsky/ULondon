/*
Officer: 1661810
CaseNum: 601-2-10554113-1661810

Case 601 - Murdering Again - stage 3

Now murders are beginning to occur - we're pretty sure that this is the work of Fry.
If we can place her near any of the recent crime scenes in the area we should be able narrow down her location.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, MediumOrchid stroke ellipses at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, DarkCyan stroke triangles centered over each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

Let's try to catch Fry by looking patterns between sightings and crimes. If she was within less than 53 pixels of any of the crimes then the details
should be pushed to possible matches with the following format.

{ suspect_x: 0, suspect_y: 0 ,crime_x: 0, crime_y: 0, victimName: "John_Doe" }

Note that the possible matches are already being drawn.
Your job is simply to fill the array with the correct data.

For this mission you will need ONLY the following:

- for loop
- dist()
- if()
- stroke
- ellipse()

- stroke
- triangle() NB. Draw each triangle with the point roughly at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.

var SuspectRecord = {
	CoordinateX: [639, 681, 712, 756, 715, 701, 753, 815, 795, 788, 781, 768, 750, 732, 714, 695, 693, 654, 624, 594, 555],
	CoordinateY: [288, 286, 293, 310, 368, 425, 436, 468, 506, 497, 486, 489, 500, 506, 514, 531, 552, 523, 500, 484, 474],
};

//Recent crime records.

var MurdersceneData_Pt_X = [409, 443, 465, 709, 695, 652, 641, 119, 114, 90, 76, 615, 349, 456];
var MurdersceneData_Pt_Y = [446, 419, 548, 552, 421, 268, 306, 344, 359, 490, 516, 741, 796, 770];
var MurdersceneData_Fatality_Name = ['MALINDA GOODBURY', 'LINETTE MOHWAWK', 'LAVERNE JACQUELIN', 'LIANNE COURTWOOD', 'PIERRE DORCEY', 'LARRAINE PEGORD', 'JESUS FORSLIN', 'NELSON TINTLE', 'TAMICA MAUBERT', 'LESLEY MONKSFORD', 'RANDEE CROME', 'JULIANA ADVERSANE', 'LAKESHA SYMMES', 'ERMELINDA OORIN'];


function preload()
{
	countyMap = loadImage("map.png")
}

function setup()
{
  createCanvas(countyMap.width, countyMap.height);

	image(countyMap, 0,0);

	//add your code below here
    //sightings of suspect
    noFill();
    stroke(186, 85, 211);
    for(var i=0; i<SuspectRecord.CoordinateX.length; i++){
        ellipse(SuspectRecord.CoordinateX[i], SuspectRecord.CoordinateY[i], 10);
    }
    
    //murder scene
    stroke(0, 139, 139);
    for(var i=0; i<MurdersceneData_Pt_X.length; i++){
        triangle(MurdersceneData_Pt_X[i]-5, MurdersceneData_Pt_Y[i]-5, MurdersceneData_Pt_X[i]+5, MurdersceneData_Pt_Y[i]-5, MurdersceneData_Pt_X[i], MurdersceneData_Pt_Y[i]+5);
    }

    //traversing possible matches
    for(var i=0; i<MurdersceneData_Pt_X.length; i++){
        if(dist(SuspectRecord.CoordinateX[i], SuspectRecord.CoordinateY[i], MurdersceneData_Pt_X[i], MurdersceneData_Pt_Y[i])<53){
            var matchFound = {suspect_x: SuspectRecord.CoordinateX[i], suspect_y: SuspectRecord.CoordinateY[i], crime_x: MurdersceneData_Pt_X[i], crime_y: MurdersceneData_Pt_Y[i], victimName: MurdersceneData_Fatality_Name[i]};
            possibleMatches.push(matchFound);
        }
    }

	// code to draw the matches ( if any)
	for(let i = 0 ; i < possibleMatches.length ; i++)
	{
		stroke(127);
		strokeWeight(3);
		line(possibleMatches[i].crime_x, possibleMatches[i].crime_y, possibleMatches[i].suspect_x, possibleMatches[i].suspect_y);

		noStroke();
		fill(127);
		text(possibleMatches[i].victimName, possibleMatches[i].crime_x + 15, possibleMatches[i].crime_y + 15);
	}
}

//We are not using the draw function this time
