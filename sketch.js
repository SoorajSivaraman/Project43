// Variable declarations.
var hours, minutes, seconds, secondsAngle, minutesAngle, hoursAngle;

function setup() 
{
  // Creating the canvas for the project.
  createCanvas(400, 480);
}

function draw() 
{
  // Giving a background.
  background(140, 35, 35);

  fill(255);
  textFont("Lucida Calligraphy");
  textSize(30);

  // Displaying the numbers for keeping track on the exact time.
  text("12", 185, 30);
  text("1", 290, 60);
  text("2", 350, 130);
  text("3", 365, 210);
  text("4", 340, 290);
  text("5", 290, 360);
  text("6", 185, 390);
  text("7", 100, 360);
  text("8", 35, 290);
  text("9", 10, 200);
  text("10", 25, 125);
  text("11", 90, 60);

  // Displaying the warning message.
  textSize(15);
  text("Tick Tock Goes The Clock !!", 90, 415);
  text("Help Yourself And Your Crew Out at 12 Noon !!", 10, 440);
  text("That's your last chance of escaping Boss !!", 30, 465)

  push();
  translate(200,200);
  rotate(-90);

  angleMode(DEGREES);

  // Fetching the values of the current Hour, Minutes and Seconds into the variables.
  hours = hour();
  minutes = minute();
  seconds = second();

  // Fetching the values from the current time variables into angles.
  secondsAngle = map(seconds,0,60,0,360);
  minutesAngle = map(minutes,0,60,0,360);
  hoursAngle = map(hours%12,0,12,0,360);

  // Creation of the Seconds Hand.
  push();

  rotate(secondsAngle);
  stroke(255, 43, 142);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  // Creation of the Minutes Hand.
  push();
  rotate(minutesAngle);
  stroke(0, 255, 216);
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  // Creation of the Hour Hand.
  push();
  rotate(hoursAngle);
  stroke(189, 158, 0);
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  // Creation of the Centre Point.
  stroke(255,0,255);
  point(0,0);

  // Creation of the Arcs.
  strokeWeight(10);
  noFill();

  stroke(255, 43, 142);
  arc(0,0,300,300,0,secondsAngle);

  stroke(0, 255, 216);
  arc(0,0,280,280,0,minutesAngle);

  stroke(189, 158, 0);
  arc(0,0,260,260,0,hoursAngle);
  pop();
}