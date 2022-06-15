status="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.position(550,200);
    objectDetection=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status: detecting objets";
}
img="";
function preload(){
    img=loadImage('dog_cat.jpg');
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
text("dog",40,70);
noFill();
stroke("blue");
rect(30,60,350,350);
fill("pink");
text("cat",400,70);
noFill();
stroke("green");
rect(300,60,300,450);
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

}