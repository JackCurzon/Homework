/* I commented out anything having to do with the L function, I messed with it for along time
and couldn't get it to work. Is that becuase since I made a maze, it can't actually "repeat" a pattern?
Reguardless I couldn't even seem to get it to repeat the string in the first place */

var x, y; // some variables for the current position of the turtle
var currentangle = 90; // we start out facing north
var step = 15; // how many pixels do we move forward when we draw?
var angle = 90; // how many degrees do we turn with '+' and '-'

//var thestring = 'A'; // "axiom" or start of the string
/*var numloops = 1; // how many iterations of the L-system to pre-compute
var therules = []; // array for rules
therules[0] = ['A', 'fffff,ffffffff,ffffffffff,ffffffff.ffff.ffffffffffff.fffffffffffff,ffff.ffffffffffff,fffffff,fffffffffffffffffffffffffffffffff,fffffffffffffffffffffffffffffffffffffffffffffff,ffffffffffffffffffffffffffffffffff,ffffffffffffffffffffff'];

var whereinstring = 0; // where in the L-system are we drawing right now?
*/

function setup()
{
  createCanvas(800, 580);
  background(255);
  stroke(0, 0, 0, 255);
  
  // start our turtle in the middle of the screen
  x = width/2;
  y = height/2;
  
  // COMPUTE THE L-SYSTEM
 //for(var i = 0;i<numloops;i++) {
   // thestring = lindenmayer(thestring);
//}
  fill(0)
  rect(0,0,30,600)
  rect(780,0,10,600)
  rect(0,560,790,30)
  rect(0,0,790, 15)
  rect(300,225,200,20)
  rect(300,325,70,20)
  rect(430,325,70,20)
  rect(300,225,20,100)
  rect(480,225,20,100)
  rect(200,380,360,20)
  rect(240,175,20,210)
  rect(540,175,20,75)
  rect(540,310,20,75)
  rect(240,175,130,20)
  rect(430,175,170,20)
  rect(600,115,20,345)
  rect(240,440,360,20)
  rect(180,380,20,140)
  rect(200,500,540,20)
  rect(660,115,20,345)
  rect(180,115,480,20)
  rect(180,115,20,200)
  rect(720,55,20,445)
  rect(120,55,600,20)
  rect(120,55,20,465)
  rect(120,295,80,20)
  rect(360,520,20,40)
  rect(70,500,60,20)
  rect(70,55,20,465)
  
  text("End", width/2, 550)
  text("Start", width/2, 280)
  fill(255,255,255)
  text("M", 10, 75)
  text("A", 10, 225)
  text("Z", 10, 375)
  text("E", 10, 525)
}
  

function draw()
{

  // draw the stuff:
  fill(255,0,0); // interior fill color
  ellipse(x,y,5,5); // circle that chases the mouse

  
  // draw the current character in the string:
  //drawIt(thestring.charAt(whereinstring)); 
  
  // increment the point for where we're reading the string.
  // wrap around at the end.
 // whereinstring++;
  //if(whereinstring>thestring.length-1) whereinstring = 0;
}

// interpret an L-system
/*function lindenmayer(s)
{
  var outputstring = ''; // start a blank output string
  
  // go through the string, doing rewriting as we go
  
  // iterate through 'therules' looking for symbol matches:
  for(var i=0;i<s.length;i++) // every symbol in 's'
  {
    var ismatch = 0; // by default, no match
    for(var j = 0;j<therules.length;j++) // every rule in 'therules'
    {
      if(s.charAt(i)==therules[j][0]) // MATCH!
      {
        outputstring+=therules[j][1]; // write substitution
        ismatch = 1; // we have a match, so don't copy over symbol
        break; // get outta this for() loop
      }
    }
    // if nothing matches in 'therules' array, just copy the symbol over.
    if(ismatch===0) outputstring+= s.charAt(i); 
  }
  
  return(outputstring); // send out the modified string
}
*/


function keyTyped()
{
  if(key=='f') // draw forward
  {
    // polar to cartesian transformation based on step and currentangle:
    var x1 = x + step*cos(radians(currentangle));
    var y1 = y + step*sin(radians(currentangle));
    stroke(255,0,0)
    line(x, y, x1, y1);// connect the old and the new
    // update the turtle's position:
    x = x1;
    y = y1;
  }
  else if(key==',')
  {
   currentangle+=angle; // turn left
  }
  else if(key=='.')
  {
   currentangle-=angle; // turn right   
  }
  else if(key=='e'){
    setup()
    x = width/2 + 40
    y = 540
    currentangle = 0;
  }
  else if(key==' '){
    setup()
  }
}

