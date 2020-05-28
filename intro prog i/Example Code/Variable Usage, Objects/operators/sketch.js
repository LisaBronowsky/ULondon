var xPos;
var yPos;


function setup() 
{
    
    createCanvas(512,512);
    xPos = 120;
    yPos = 120;
    
//    text(2+2 , 20,20);
//    text(5-2, 20,40);
//    text(2*2 , 20,60);
//    text(3446643/35464 , 20,80);
//    
//    yPos = 120;
//    
//    ellipse(50, yPos, 20,20);
//    yPos = yPos+20;
//    ellipse(50, yPos, 20,20);
//    yPos = yPos+40;
//    ellipse(50, yPos, 20,20);
//    yPos = yPos+60;
//    ellipse(50, yPos, 20,20);
//    yPos = yPos+100;
//
//
//    text("yPos: " + yPos, 30, yPos + 100);
    
}

function draw()
{
 background(255);
 ellipse(xPos, yPos, 20,20);
 xPos = xPos+5;
 yPos = yPos+9;
   
}






