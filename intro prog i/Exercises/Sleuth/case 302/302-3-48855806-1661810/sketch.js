/*
The case of the slippery Minsky brothers
Stage 4: Gates Memorial Art Museum

Officer: 1661810
CaseNum: 302-3-48855806-1661810

Darn it ! All three Minskys have broken out of the county jail. I told you they were slippery. Word has it that they are planning their biggest heist yet. Tonight they plan to steal multiple priceless artworks from the Gates Memorial Art Museum. I’ve assembled you a team. Head down to the Museum and stop them.

- Edit the spotlight object by creating x and y properties initialised to your location. Also endX and endY properties initialised to one of the Minsky's location.

- Assign the other 2 spotlights and create the required properties.

- Make the spotlight move perfectly from you towards the Minskys by adjusting the increments of x and y properties.
  If you get everything correct then it will stop over the target.

- Adjust x and y properties using

 * "+=" or "+"
 * "-=" or "-"

*/

// other variables, you don't need to change these
var img, spotlight_image;

var spotlight1;
var spotlight2;
var spotlight3;


function preload()
{
	img = loadImage('scene.png');


	spotlight_image = loadImage('spotlight.png')

}

function setup()
{
	createCanvas(img.width, img.height);

	//complete the initialisation of the first spotlight
  //with properties x, y, endX and endY

    //spotlight for minsky top left
	spotlight1 = {
		image: spotlight_image,
        x: 479,
        y: 474,
        endX: 185,
        endY: 120
	};
    
    //minsky middle right
    spotlight2 = {
        image: spotlight_image,
        x: 479,
        y: 474,
        endX: 583,
        endY: 298
    };
    
    //minsky bottom left
    spotlight3 = {
        image: spotlight_image,
        x: 479,
        y: 474,
        endX: 769,
        endY: 652
    };

	//Initialize the second and third spotlights

}


function draw()
{
	image(img, 0, 0);

	// alter the properties x and y of the objects below to animate the spotlights
    // minsky spotlight movement from detective to top left
    if(spotlight1.x > spotlight1.endX){
        spotlight1.x -= 1;
    }

    if(spotlight1.y > spotlight1.endY){
        spotlight1.y -= 1;
    }

    //minsky spotlight from detective to middle right
    if(spotlight2.x < spotlight2.endX){
        spotlight2.x += 1;
    }
    
    if(spotlight2.y > spotlight2.endY){
        spotlight2.y -= 1;
    }
    
    //minsky spotlight from detective to minsky bottom left
    if(spotlight3.x < spotlight3.endX){
        spotlight3.x += 1;
    }
    
    if(spotlight3.y < spotlight3.endY){
        spotlight3.y += 1;
    }
    
	////////// DO NOT CHANGE ANYTHING BELOW /////////////

	var spotlights = [spotlight1, spotlight2, spotlight3];
	var spotlightSize = 300;

	blendMode(BLEND);
	background(30);

	for (var i = 0; i < spotlights.length; i++)
	{
		var spotlight = spotlights[i];
		//stop the spotlight if it's near enough to endx and endy
        if(spotlight)
        {
               //stop the spotlight if it goes off of the screen
            spotlight.x = min(spotlight.x, 960);
            spotlight.y = min(spotlight.y, 945);
            spotlight.x = max(spotlight.x, 0);
            spotlight.y = max(spotlight.y, 0);

            if (abs(spotlight.endX - spotlight.x) < 50
                && abs(spotlight.endY - spotlight.y) < 50)
            {
                spotlight.x = spotlight.endX;
                spotlight.y = spotlight.endY;
            }


            image(spotlight.image, spotlight.x-spotlightSize/2,
                    spotlight.y-spotlightSize/2, spotlightSize, spotlightSize);
        }
	}

	blendMode(DARKEST);
	image(img, 0, 0);

	////////// DO NOT CHANGE ANYTHING ABOVE /////////////
}
