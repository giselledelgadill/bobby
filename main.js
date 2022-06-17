objects=[];
status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(550,200);
    objectDetection=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objets";
}
img="";
function preload(){
    img=loadImage('bluey.jpeg');
}
function draw(){
    image(img,0,0,640,420);
    if(status!=""){
        for(i=0;i<objects.length;i++){
            document.getElementById("status").innerHTML="status: detected objects";
            fill("green");
            percent=floor(objects[i].confidence*100);
            text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
            noFill();
            stroke("green");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
  
}
function modelLoaded(){
    console.log("modelLoaded");
    status=true;
    objectDetection.detect(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.log(error);
}
console.log(results);
objects=results;
}