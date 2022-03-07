song1 = "";
song2 = "";

function preload(){

    song1 = loadSound("ENHYPEn - FEVER.mp3");
    song2 = loadSound("music.mp3");

    rightWristX = 0;
    rightWristY = 0;

    leftWristX = 0;
    leftWristY = 0;
}

function setup(){

    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){

    console.log('Posenet is initialized');
}

function gotPoses(){

    rightWristX = results[0].pose.rightWrist.x;
    rightWristY = results[0].pose.rightWrist.y;
    console.log("rightWristX = " +rightWristX + "rightWristY = " +rightWristY );

    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("leftWristX = " +leftWristX+ "leftWristY = " +leftWristY );
}

function draw(){

    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
}

function play(){

    song1.play();
    song2.play();
    
}