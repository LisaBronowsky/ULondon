/*

Officer: 1661810
CaseNum: 403-3-83532317-1661810

Case 403 - Captured - stage 4

A coordinated action is under way to arrest Shiffman. Police are currently in pursuit on Crowther Road.
In order to catch him we must be able to alert all forces of his whereabouts according to the following rules:

- if Shiffman is within 103 meters from Stallman's Bar then alert local police by drawing a SlateBlue circle around it with a radius of 103 pixels.
- if Shiffman is in The Plaza Hotel then the neighbourhood watch must be notified by drawing a DarkOrchid rectangle around it.
- if Shiffman is in neither position, a global alert must be issued by drawing a Tomato rectangle covering the area between Reynolds Street, Gates Avenue, Crowther Road and Romero Avenue.

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
    if(dist(mouseX, mouseY, 1207, 285) <= 103){
        fill(106, 90, 205);
        ellipse(1207,285, 206);
    }
        
//    - if Shiffmann is in The Plaza Hotel then the neighbourhood watch must be notified by drawing a DarkOrchid rectangle around it.
     else if(mouseX > 1339 && mouseX < 1585 && mouseY > 226 && mouseY < 334){
        fill(153, 50, 204);
        rect(1339, 226, 250, 110);
    }
//    - if Shiffman is in neither position, a global alert must be issued by drawing a SaddleBrown rectangle covering the area between Reynolds Street, Ada Avenue, Gosling Road and Mullenweg Street.
     //if(mouseX > 357 && mouseX < 1339 && mouseY > 194 && mouseY < 427){
    else{
        fill(255, 99, 71);
        rect(759, 395, 1206, 160);
    }

    // finally, draw Shiffman's position
    strokeWeight(2);
    stroke(255);
    fill(255,0,0);
    ellipse(mouseX, mouseY, 10, 10);
}
