// Data variables
const SUBJECTS = ["Wit", "Presence", "Dress", "Appearance", "Hygiene"];
const ADJECTIVES = ["Oafish","Disinteresting", "Dimwitted", "Ill-begotten", "Jibbering", "Foolish", "Artless", "Villainous"];
const WORDS = ["Fly", "Marmot", "Stick", "Rapscallion", "Delinquent", "Oaf", "Fool", "Dimwit", "Villain"];
const NUM_EMOJIS = 15;
let EMOJI = null;

// State variables
let emojis = []; // List of emojis to spin
let insult = ""; // Current random insult
let lastChange = 0; // Last time the random insult was changed
let paused = false; // Flag whether the app is paused


function setup() {
    createCanvas(windowWidth, windowHeight);
    EMOJI = loadImage("face.png")
    // Create all the emojis at random positions
    for(let i = 0; i < NUM_EMOJIS; i++){
        emojis.push({
            x: random(0, width),
            y: random(0, height),
            angle: 0
        })
    }
}

function draw() {
    background(0);
    // Draw everything
    drawEmojis()
    drawInsult()
    drawHelpText()
    // Possibly change the insult
    if (Date.now() > lastChange + 500 && !paused){
        insult = randomInsult();
        lastChange = Date.now();
    }
}

function randomInsult(){
    // Grab random items from the arrays
    let subject = SUBJECTS[Math.floor(random(SUBJECTS.length))];
    let adj = ADJECTIVES[Math.floor(random(ADJECTIVES.length))];
    let word = WORDS[Math.floor(random(WORDS.length))];
    // Create the insult
    let result = `Your ${subject} is that of a ${adj} ${word}.`
    return result;
}

function mousePressed(){
    // Toggle pause state
    paused = !paused;
}

function calcTextSize(){
    let sz = 32;
    // Check whether the screen can fit the insult
    while(width < insult.length * sz / 2){
        sz*= .75;
    }
    return sz;
}

function drawEmojis(){
    EMOJI.resize(50,50)
    for(let emoji of emojis){
        push()
        translate(emoji.x, emoji.y)
        rotate(emoji.angle)
        imageMode(CENTER)
        image(EMOJI, 0, 0)
        emoji.angle += Math.PI / 60;
        pop()
    }
}

function drawInsult() {
    push()
    let sz = calcTextSize();
    // Draw the box for the text
    fill('red')
    rectMode(CENTER)
    rect(width / 2, height / 2 - .32*sz, insult.length * sz / 2, 1.25*sz)
    // Draw the actual text
    fill('white')
    textAlign(CENTER)
    textStyle(BOLD)
    textSize(sz)
    text(insult, width / 2, height / 2)
    pop()
}

function drawHelpText() {
    push()
    let sz = calcTextSize();
    fill('white')
    textAlign(CENTER)
    textSize(.75*sz)
    text("Click to Toggle Pause", width/2, height - 24)
    pop()
}