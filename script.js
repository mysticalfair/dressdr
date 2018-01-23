var c=document.getElementById("dress");
var ctx=c.getContext("2d");
ctx.beginPath();
ctx.arc(100,75,50,0,2*Math.PI);
ctx.stroke();
var colour="";

var my_gradient=ctx.createLinearGradient(0,0,170,0);
my_gradient.addColorStop(0,"rgb(255,255,255)");
my_gradient.addColorStop(0.2,"rgb(255,153,255)");
my_gradient.addColorStop(0.4,"rgb(255,0,102)");
my_gradient.addColorStop(0.6,"rgb(102,0,255)");
my_gradient.addColorStop(0.8,"rgb(153,255,102)");
my_gradient.addColorStop(1,"rgb(0,153,0)");

var circles=document.getElementsByClassName("palette-circle");
for (var circle of circles)
{
  circle.addEventListener('click', function(event){
    colour=event.target.id;
    ctx.clear;
    if (colour == "multicolour") {
      ctx.fillStyle=my_gradient;
    } else {
      ctx.fillStyle=event.target.attributes.fill.value;
    }

    ctx.fill()
    console.log(event.target.attributes.fill.value);
    console.log(ctx);


  }, false);
}


console.log("done");
