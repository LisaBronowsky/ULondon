/*

Officer: 1661810
CaseNum: 701-3-91961976-1661810

Case 701 - Believable burglar - stage 4

Those guys down at the precinct need to take your brain for one final spin.
This burglar has been a particularly slippery character and now they believe that they have them.
Luckily they have a have a witness statement from lakesha monksford.
All they need is for you to do the detective work.

This time you must implement two functions:

- A checkSuspectTraits function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

- A traverseSuspects function which traverses the array of suspects and returns the object representing the guilty suspect,
otherwise - return an empty object.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function checkSuspectTraits(suspectObj){}
 - function traverseSuspects(){}
 - if()

Witness statement:

It all started when I was exiting the store. That's when I noticed them. They were fairly tall, I think between a height of 155 and 192 cm. It was very dark and I could barely see, Their expression seemed blank. I remember they had a chinese lettering tattoo. I'll never forget their brown eyes. They brobably weigh between 70 and 87 kg. It's hard to say. They seemed to be between the age of 19 and 41 years old. They were wearing a green army coat. They had long white hair. I'm not quite sure. They were carrying a metal briefcase. Can I go home now Sir? 

*/

var lineupLog = [
	{ 
		"name": "LESLEY DEAUVILLE",
		"coat": "blue overcoat",
		"expression": "menacing",
		"accessory": "laptop bag",
		"eyes": "pale",
		"height": 204,
		"weight": 70,
		"age": 33
	},
	{ 
		"name": "BRAD GOODBURY",
		"coat": "white fur coat",
		"expression": "confused",
		"accessory": "plastic box",
		"eyes": "grey",
		"height": 157,
		"weight": 72,
		"age": 55
	},
	{ 
		"name": "PIERRE DAVISWOOD",
		"coat": "black hoodie",
		"expression": "empty",
		"accessory": "glass bottle",
		"eyes": "black",
		"height": 176,
		"weight": 54,
		"age": 28
	},
	{ 
		"name": "HANG ZETLAND",
		"coat": "green jacket",
		"expression": "depressed",
		"accessory": "orange tote bag",
		"eyes": "green",
		"height": 184,
		"weight": 66,
		"age": 38
	},
	{ 
		"name": "SUMMER DORCEY",
		"coat": "black overcoat",
		"expression": "sad",
		"accessory": "black duffle bag",
		"eyes": "blue",
		"height": 188,
		"weight": 94,
		"age": 43
	},
	{ 
		"name": "LAVERNE CASIMERE",
		"coat": "yellow poncho",
		"expression": "nerveous",
		"accessory": "brown paper bag",
		"eyes": "blue",
		"height": 172,
		"weight": 60,
		"age": 42
	},
	{ 
		"name": "DARBY ADVERSANE",
		"coat": "green army coat",
		"expression": "blank",
		"accessory": "metal briefcase",
		"eyes": "brown",
		"height": 168,
		"weight": 77,
		"age": 33
	}
];

var myFont;
var backgroundImg;

function preload() {
  myFont = loadFont('SpecialElite.ttf');
  backgroundImg = loadImage("Background.png");
}

function setup()
{
	createCanvas(640,480);
	textFont(myFont);
}

// Declare both your functions here
//witness statement: It all started when I was exiting the store. That's when I noticed them. They were fairly tall, I think between a height of 155 and 192 cm. It was very dark and I could barely see, Their expression seemed blank. I remember they had a chinese lettering tattoo. I'll never forget their brown eyes. They brobably weigh between 70 and 87 kg. It's hard to say. They seemed to be between the age of 19 and 41 years old. They were wearing a green army coat. They had long white hair. I'm not quite sure. They were carrying a metal briefcase. Can I go home now Sir? 


function checkSuspectTraits(suspectObject){
    var matchingProperties = 0;
    if(suspectObject.height > 155 && suspectObject.height < 192){
        matchingProperties += 1;
    }
    if(suspectObject.expression == "blank"){
        matchingProperties += 1;
    }
    if(suspectObject.tatoo == "chinese lettering"){
        matchingProperties += 1;
    }
    if(suspectObject.eyes == "brown"){
        matchingProperties += 1;
    }
    if(suspectObject.weight > 70 && suspectObject.weight < 87){
        matchingProperties += 1;
    }
    if(suspectObject.age > 19 && suspectObject.age < 41){
        matchingProperties += 1;
    }
    if(suspectObject.coat == "green army coat"){
        matchingProperties += 1;
    }
    if(suspectObject.hair == "long white"){
        matchingProperties += 1;
    }
    if(suspectObject.accessory == "metal briefcase"){
        matchingProperties += 1;
    }
    return matchingProperties;
}

function traverseSuspects(){    
   for(var i=0; i<lineupLog.length; i++){
       if(checkSuspectTraits(lineupLog[i]) == 7){
           return lineupLog[i];
       }
   }
}

function draw(){
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  fill(255,0,0);
  text(traverseSuspects().name + " is guilty!", 60, 80);
}
