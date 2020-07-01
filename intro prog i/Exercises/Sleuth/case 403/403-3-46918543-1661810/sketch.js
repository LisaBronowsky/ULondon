/*

Officer: 1661810
CaseNum: 403-3-46918543-1661810

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Gosling Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 130 meters from Stallman's Bar then alert local police by drawing a PaleVioletRed circle around it with a radius of 130 pixels.
- if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a Teal rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a SaddleBrown rectangle covering the area between Reynolds Street, Ada Avenue, Gosling Road and Mullenweg Street.

Shiffman's position is signified by the mouse.

Note: all road coordinates are measured from their center.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  if()
  fill()
  rect()
  ellipse()
  dist()

*/

var img;

function preload()
{
	img = loadImage('map.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
}

function draw()
{
    // draw the image
    image(img,0,0);

    //Write your code below here ...
//   - if Shiffman is within 130 meters from Stallman's Bar then alert local police by drawing a PaleVioletRed circle around it with a radius of        130 pixels.
    if(dist(mouseX, mouseY, 1372, 307) <= 130){
        fill(219, 112, 147);
        ellipse(1372,307, 260);
    }
        
//    - if Shiffman is in Wrong Side of the tracks then the neighbourhood watch must be notified by drawing a Teal rectangle around it.
     if(mouseX > 590 && mouseX < 740 && mouseY > 83 && mouseY < 181){
        fill(0, 128, 128);
        rect(590, 83, 150, 100);
    }
//    - if Shiffman is in neither position, a global alert must be issued by drawing a SaddleBrown rectangle covering the area between Reynolds Street, Ada Avenue, Gosling Road and Mullenweg Street.
     if(mouseX > 357 && mouseX < 1339 && mouseY > 194 && mouseY < 427){
        fill(139, 69, 19);
        rect(357, 194, 985, 240);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
