let bgColor = 'white';
let redButton;
let greenButton;
let blueButton;


function setup() {
  createCanvas(innerWidth, windowHeight);
    noStroke();
    let redButton;
    redButton = createButton('red');
    redButton.size(200,100);
    redButton.position(240,50);
    redButton.style('background:red');
    redButton.mousePressed(changeRed);
    
    let greenButton;
    greenButton = createButton('green');
    greenButton.size(200,100);
    greenButton.position(460,50);
    greenButton.style('background:green');
    greenButton.mousePressed(changeGreen);
    
    let blueButton;
    blueButton = createButton('blue');
    blueButton.size(200,100);
    blueButton.position(20,50);
    blueButton.style('background:blue');
    blueButton.mousePressed(changeBlue);
    
    let eraseButton;
    eraseButton = createButton('Erase');
    eraseButton.size(200,100);
    eraseButton.position(680,50);
    eraseButton.style('background:white');
    eraseButton.mousePressed(changeWhite);
}

function changeRed(){
    
    fill('Red');
}

function changeGreen(){
    
    fill('Green');
}

function changeBlue(){
    
    fill('Blue');
}

function changeWhite(){
    
    fill('White')
}


function draw() {
    if(mouseIsPressed === true){
        ellipse(mouseX, mouseY, 10, 10);
    
    }
    print(mouseIsPressed);
    
}