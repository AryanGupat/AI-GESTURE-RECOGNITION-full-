left_wristX=0;
left_wristy=0;
right_wristX=0;
right_wristy=0;
difference=0;
noseX=0;
noseY=0;
function preload()
{

}
function setup()
{
video=createCapture(VIDEO);
video.size(550 , 450);

console.log("ml5" , ml5.version);

canvas=createCanvas(550,450);
canvas.position(560 , 150);

poseNet=ml5.poseNet(video , ModelLoaded);
poseNet.on("pose" , gotPoses);
}
function draw()
{
background('#969A97');
fill('#fc03ca');
stroke('#fc03ca');
square(noseX , noseY , difference);
document.getElementById("W&H").innerHTML=difference+" px";
}

function ModelLoaded()
{
console.error("poseNet is Working!!");
}
function gotPoses(result)
{
    if(result.length > 0)
   { console.log(result); 
left_wristX=result[0].pose.leftWrist.x;
console.log("Left X "+left_wristX);
left_wristy=result[0].pose.leftWrist.y;
console.log("Left Y "+left_wristX);
right_wristX=result[0].pose.rightWrist.x;
console.log("Right X "+left_wristX);
right_wristy=result[0].pose.rightWrist.y;
console.log("Right Y "+right_wristy)
noseX=result[0].pose.nose.x;
console.log("Nose X "+noseX);
noseY=result[0].pose.nose.y;
console.log("Nose Y "+noseY);
difference=floor(left_wristX-right_wristX);
console.log("difference Ans"+ difference);
};



   }
