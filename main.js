leftWristY = 0;
rightWristY = 0;
leftWristX = 0;
rightWristX = 0;
song1 = "";
song2 = "";

function preload(){
    song1 = loadSound('heatwaves.mp3');
    song2 = loadSound('peaches.mp3'); 
}
function setup(){
    canvas = createCanvas(450, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.position(450, 200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("PoseNet Initialized!");
}
function gotPoses(results){
    if(results.length > 0){
        leftWristY = results[0].pose.leftWrist.y;
        rightWristY = results[0].pose.rightWrist.y;
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        console.log("leftWristX= " + leftWristX + " leftWristY= " + leftWristY);
        console.log("rightWristX= " + rightWristX + "rightWristY= " + rightWristY);
    }
}
