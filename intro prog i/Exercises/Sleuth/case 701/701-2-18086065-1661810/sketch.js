/*

Officer: 1661810
CaseNum: 701-2-18086065-1661810

Case 701 - Recognisable robber - stage 3

Kid you’re becoming a victim of your own success.
I just had a call from DI Max down at the precinct. He specifically requested your services.
They finally have a reliable witness for a robber who has been causing mayhem for some months.
Luckily they have a witness statement from hang daviswood. You know what to do kid.

Please create a function that takes a suspect object as parameter from the data structure below.
Your function should return a number value indicating how many of their properties match the witness statement.
You should use conditional statements to compare the suspect's properties to the statement.

The function is already being called in draw() but it is your job to implement it.

There are many possible ways of carrying out your duties,
but you should complete this task using ONLY the following
commands:

 - function matchProperties(suspectObj){}
 - if()

Witness statement:

I remember walking down the street and then I saw them. It's hard to say. They were fairly tall, I think between a height of 160 and 190 cm. Their expression seemed sad. I distinctly remember that they were wearing a purple hat, I remember thinking that was quite unusual. They were carrying a brown paper bag. It was very dark and I could barely see, They had ginger hair. They seemed to be between the age of 28 and 50 years old. They brobably weigh between 64 and 100 kg. I'll never forget their brown eyes. I hope I never have to go through that again. 

*/

var allSuspects = [
	{ 
		"name": "MALINDA DURANTS",
		"expression": "depressed",
		"accessory": "big black envelope",
		"item": "pair of leather trousers",
		"hair": "thin blond",
		"height": 157,
		"age": 29,
		"weight": 76
	},
	{ 
		"name": "JULIANA CROME",
		"expression": "blank",
		"accessory": "black duffle bag",
		"item": "red necktie",
		"hair": "white",
		"height": 174,
		"age": 41,
		"weight": 78
	},
	{ 
		"name": "KITTY MONKSFORD",
		"expression": "sad",
		"accessory": "brown paper bag",
		"item": "purple hat",
		"hair": "ginger",
		"height": 176,
		"age": 35,
		"weight": 73
	},
	{ 
		"name": "LAKESHA DEAUVILLE",
		"expression": "nerveous",
		"accessory": "glass bottle",
		"item": "orange socks",
		"hair": "short black",
		"height": 180,
		"age": 61,
		"weight": 71
	},
	{ 
		"name": "GAYLA THAXTER",
		"expression": "empty",
		"accessory": "laptop bag",
		"item": "fur vest",
		"hair": "dark brown",
		"height": 190,
		"age": 41,
		"weight": 80
	},
	{ 
		"name": "JESSIA SILVEIRA",
		"expression": "confused",
		"accessory": "red backpack",
		"item": "dotted necktie",
		"hair": "shaved",
		"height": 176,
		"age": 29,
		"weight": 83
	},
	{ 
		"name": "ERMELINDA ADVERSANE",
		"expression": "menacing",
		"accessory": "orange plasic bag",
		"item": "net weave shirt",
		"hair": "long white",
		"height": 152,
		"age": 53,
		"weight": 69
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

// Declare your function here
//witness statement: I remember walking down the street and then I saw them. It's hard to say. They were fairly tall, I think between a height of 160 and 190 cm. Their expression seemed sad. I distinctly remember that they were wearing a purple hat, I remember thinking that was quite unusual. They were carrying a brown paper bag. It was very dark and I could barely see, They had ginger hair. They seemed to be between the age of 28 and 50 years old. They brobably weigh between 64 and 100 kg. I'll never forget their brown eyes. I hope I never have to go through that again. 

function matchProperties(suspectObject){
    var matchingProperties = 0;
    if(suspectObject.height > 160 && suspectObject.height < 190){
        matchingProperties += 1;
       }
    if(suspectObject.expression == "sad"){
        matchingProperties += 1;
    }
    if(suspectObject.item == "purple hat"){
        matchingProperties += 1;
    }
    if(suspectObject.accessory == "brown paper bag"){
        matchingProperties += 1;
    }
    if( suspectObject.hair == "ginger"){
        matchingProperties += 1;
    }
    if(suspectObject.age > 28 && suspectObject.age < 50){
        matchingProperties += 1;
    }
    if(suspectObject.weight > 64 && suspectObject.weight < 100){
        matchingProperties += 1;
    }
    if(suspectObject.eyes == "brown"){
        matchingProperties += 1;
    }
       return matchingProperties;
}



function draw()
{
  //You don't need to alter this code
  image(backgroundImg, 0, 0);

  for(let i = 0 ; i < allSuspects.length; i++){
    let matchingProperties = matchProperties(allSuspects[i]);
    fill(50 * matchingProperties,250 - (50 * matchingProperties),0);
    text("found " + matchingProperties + " matching properties for " + allSuspects[i].name, 60, 60 + i * 20);
  }
}
