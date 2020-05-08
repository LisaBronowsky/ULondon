/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 1661810
CaseNum: 201-3-24315320-1661810

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...

You should need around 20 vertices to draw round the judge and make sure you close your shape!


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(765,280);
    vertex(740,223);
    vertex(720,220);
    vertex(703,205);
    vertex(685,210);
    vertex(655,135);
    vertex(660,95);
    vertex(630,95);
    vertex(620,130);
    vertex(665,255);
    vertex(580,273);
    vertex(405,305);
    vertex(420,343);
    vertex(385,325);
    vertex(365,330);
    vertex(410,385);
    vertex(389,390);
    vertex(393,415);
    vertex(417,421);
    vertex(482,409);
    vertex(490,426);
    vertex(540,415);
    vertex(568,393);
    vertex(630,375);
    vertex(668,373);
    vertex(667,425);
    vertex(760,435);
    vertex(760,405);
    vertex(700,405);
    vertex(720,358);
    vertex(740,355);
    vertex(748,332);
    vertex(762,309);
    vertex(765,280);
    endShape();
}
