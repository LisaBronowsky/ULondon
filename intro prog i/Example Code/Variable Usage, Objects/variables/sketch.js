//variable declaration
var treePos_x;
var cloudPosx_x;
var cloudScale;

function setup() 
{
    createCanvas(512,512);
    
    //initialise variables here
    treePos_x = 256;
    cloudPosx_x = 100;
    cloudScale = 1.0;
}

function draw()
{
    background(150,150,255);
    
    //sun
    noStroke();
    fill(255,150,0);
    ellipse(430,150,100,100);
    
    //tree
    stroke(0);
    fill(180,80,0);
    ellipse(treePos_x,360,40,100);
    fill(0,150,0);
    ellipse(treePos_x,300,120,120);
    
    //cloud
    noStroke();
    fill(255);
    ellipse(cloudPosx_x, 50*cloudScale, 50*cloudScale, 50*cloudScale);
    ellipse(cloudPosx_x+30*cloudScale, 50*cloudScale, 30*cloudScale, 30*cloudScale);
    ellipse(cloudPosx_x+50*cloudScale, 50*cloudScale, 20*cloudScale, 20*cloudScale);
    
    //ground
    fill(200,130,0);
    rect(0,400,width,112);
    
}


