function setup()
{
	//create a large square canvas
	createCanvas(800, 800);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	//strokeWeight(12);
    
    //Stroke removed at first, dark outline added later through line
    noStroke();
	//draw the red rectangle 
	rect(100, 50, 600, 600);
    
    //top left white rectangle
    fill(255);
    rect(100,50,150,180);
    
    //black line seperating left white rectangles
    fill(51);
    rect(100,200,150,30);
    
    //left middle white rectangle
    fill(255);
    rect(100,230, 150, 230);
    
    //bottom left black line across
    fill(51);
    rect(100,460, 600, 15);
    
    //bottom left blue rectangle
    fill(color(0,0,255));
    rect(100,475,150,175);
    
    //black seperating line left top to bottom
    fill(51);
    rect(250,50,15,600);
    
    //bottom white triangle
    fill(255);
    rect(265, 475, 350, 175);
    
    //bottom right black line down
    fill(51);
    rect(615,475,20,175);
    
    //white bottom right rectangle
    fill(255);
    rect(630,475,70,75);
    
    //bottom right black seperating line 
    fill(51);
    rect(630,550,70,20);
    
    //bottom right yellow corner
    let c = color(255,204,0);
    fill(c);
    rect(630,565,70,85);

}