function LineToTool(){
    //set icon and name for object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

    //lineToTool draws line when mouse is pressed and dragged it ends line when mouse is released again
    //following values store starting location of mouse and boolean of mousePressed
    //Initialised to -1 and false because not started yet
	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	this.draw = function(){

        //if mouse is pressed
		if(mouseIsPressed){
            //check startMouseX is -1
			if(startMouseX == -1){
                //initialise to current mouseX and Y if true
				startMouseX = mouseX;
				startMouseY = mouseY;
                //set drawing to true, as mouse is pressed
				drawing = true;
                //loads pixel data from window to pixel[], done before drawing new line
				loadPixels();
			}

            //once values for startNouseX and Y have already been obtained, draw libe using given values
			else{
                //updates display window with data in pixel[]
				updatePixels();
				line(startMouseX, startMouseY, mouseX, mouseY);
			}

		}

        //if process done, reset startMouseX and Y values to -1
		else if(drawing){
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
