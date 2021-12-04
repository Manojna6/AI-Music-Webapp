song1 = "";
song2 = "";
lx = 0;
ly = 0;
rx = 0;
ry = 0;

function preload() {
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded() {
    console.log("model loaded")
}
function gotPoses(results) {
    if(results != 0){
        console.log(results)
        lx = results[0].pose.leftWrist.x;
        ly = results[0].pose.leftWrist.y;
        rx = results[0].pose.rightWrist.x;
        ry = results[0].pose.rightWrist.y;
    }
}
