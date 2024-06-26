function setup(){
    canvas = createCanvas(500,350);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500,350);
    video.hide();
    model = ml5.poseNet(video,modelLoaded);
    model.on('pose',showResult)
}
function draw(){
    image(video,0,0,500,350);
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function showResult(error,result){
    if(error){
        console.log(error);
    }
    if(result){
        console.log(result);
    }
}