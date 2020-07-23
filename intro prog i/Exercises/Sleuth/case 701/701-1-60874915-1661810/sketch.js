/*

Officer: 1661810
CaseNum: 701-1-60874915-1661810

Case 701 - Credible cat thief - stage 2

Kid they need you down at the precinct again.
This time it's a sneaky cat thief who has been absconding with the neighbourhoods felines for some time.
Luckily old Mrs Olivetti caught a glimpse of them as they disappeared over her back fence.
We’ve a bunch of likely characters lined-up but we need your brains to solve the mystery.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a boolean value indicating whether or not they match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.
It should only return "true" if the suspect matches the description in full.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. They had short black hair. It was very dark and I could barely see, They were wearing a black overcoat. Their expression seemed menacing. They were quite big, they probably weigh more than 64 Kg. It's hard to say. I'll never forget their green eyes. I'm pretty sure they were above the age of 42. That's all I can remember about them. 

*/

var allSuspects = [
	{ 
		"name": "LAVERNE TINTLE",
		"coat": "blue overcoat",
		"hair": "red",
		"expression": "nerveous",
		"weight": 78,
		"age": 34
	},
	{ 
		"name": "JULIANA PHINNEY",
		"coat": "green army coat",
		"hair": "long white",
		"expression": "empty",
		"weight": 92,
		"age": 72
	},
	{ 
		"name": "GAYLA DAVISWOOD",
		"coat": "green jacket",
		"hair": "shaved",
		"expression": "blank",
		"weight": 71,
		"age": 58
	},
	{ 
		"name": "NELSON FORSLIN",
		"coat": "black overcoat",
		"hair": "short black",
		"expression": "menacing",
		"weight": 69,
		"age": 47
	},
	{ 
		"name": "LESLEY MAUBERT",
		"coat": "red parka",
		"hair": "white",
		"expression": "menacing",
		"weight": 80,
		"age": 45
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

//witness statement: I remember walking down the street and then I saw them. They had short black hair. It was very dark and I could barely see, They were wearing a black overcoat. Their expression seemed menacing. They were quite big, they probably weigh more than 64 Kg. It's hard to say. I'll never forget their green eyes. I'm pretty sure they were above the age of 42. That's all I can remember about them. 

// Declare your function here
function matchProperties(suspectObject){
    if(suspectObject.hair == "short black" && suspectObject.coat == "black overcoat" && suspectObject.expression == "menacing" && suspectObject.weight > 64 && suspectObject.age > 42){
        return true;
    }
    else{
        return false;
    }
}


function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    if(matchProperties(allSuspects[i]) == true){
      fill(255,0,0);
      text(allSuspects[i].name + " is guilty!", 60, 60 + i * 20);
    }else{
      fill(0,155,0);
      text(allSuspects[i].name + " is not guilty", 60, 60 + i * 20 );
    }
  }
}
