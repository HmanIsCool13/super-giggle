function setup() {
    video = createCapture (VIDEO)
    video.size(550,500)

    canvas = createCanvas(550, 500)
    canvas.position(560,150)   
    
    poseNet = ml5.poseNet(video, modelLoded)
    poseNet.on('pose',gotPoses)
}

function draw() {
    background('pink')
}
function modelLoded() 
{
    console.log('poseNet is Initiliziled')
}
function gotPoses(results){
    if(results.length >0){
    console.log(results)
    }
}