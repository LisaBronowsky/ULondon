/*
Officer: 1661810
CaseNum: 601-0-74506324-1661810

Case 601 - Escaped - stage 1

We've got an emergency here. The notorious killer Casey Fry has escaped from the Federal Correctional Institution.
She is on the loose and we have been asked to track her movements.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing small, OliveDrab fill ellipses at each location.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- fill
- ellipse()


*/

var countyMap;

//Sightings of Casey Fry.

var caseyFryLog = [ 
  { pointX : 127, pointY : 175},
  { pointX : 156, pointY : 158},
  { pointX : 179, pointY : 192},
  { pointX : 200, pointY : 154},
  { pointX : 220, pointY : 133},
  { pointX : 228, pointY : 168},
  { pointX : 249, pointY : 149},
  { pointX : 269, pointY : 139},
  { pointX : 292, pointY : 168},
  { pointX : 321, pointY : 133},
  { pointX : 354, pointY : 159},
  { pointX : 390, pointY : 144},
  { pointX : 396, pointY : 225},
  { pointX : 429, pointY : 228},
  { pointX : 456, pointY : 230},
  { pointX : 467, pointY : 277},
  { pointX : 483, pointY : 267},
  { pointX : 531, pointY : 291},
  { pointX : 547, pointY : 278},
  { pointX : 571, pointY : 274},
  { pointX : 589, pointY : 318},
  { pointX : 637, pointY : 280} 
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
    noStroke();
    fill(107, 142, 35);
    
    
    for(var i=0; i<caseyFryLog.length; i++){
        ellipse(caseyFryLog[i].pointX, caseyFryLog[i].pointY, 10);
    }
    

}

//We are not using the draw function this time
