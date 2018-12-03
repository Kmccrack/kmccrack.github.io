// show div function for buttons!!!!!!!!!!!!!!!

var showDiv  = document.getElementById("showDiv");
var showDiv1  = document.getElementById("showDiv1");
var showDiv2  = document.getElementById("showDiv2");
var showDiv3  = document.getElementById("showDiv3");
var about = document.getElementById("about");
var skills = document.getElementById("skills");
var resume = document.getElementById("resume");
var contact = document.getElementById("contact");

showDiv.addEventListener("click", function() {
  about.style.display = (about.dataset.toggled ^= 1) ? "block" : "none";
});
showDiv1.addEventListener("click", function() {
    skills.style.display = (skills.dataset.toggled ^= 1) ? "block" : "none";
});
showDiv2.addEventListener("click", function() {
    resume.style.display = (resume.dataset.toggled ^= 1) ? "block" : "none";
});
showDiv3.addEventListener("click", function() {
    contact.style.display = (contact.dataset.toggled ^= 1) ? "block" : "none";
});
// !!!!!!!!!!!!!!!!!!!!!!!!!!!CANVAS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

var mouse = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = 4;

var colorArray = [
    "#CFADAD",
    "#7F676C",
    "mistyrose",
    "#CD847F",
    "#CFBCAD",
]

window.addEventListener("mousemove", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;


});

function Circle(x,y,sx,sy,radius) {
    this.x = x;
    this.y = y;
    this.sx = sx;
    this.sy = sx;
    this.radius = radius;
    this.minRadius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function(){
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
    

    }

    this.update = function(){

    if (this.x + this.radius > innerWidth || this.x - this.radius < 0){
        this.sx = -this.sx;
    }
    if (this.y + this.radius > innerHeight || this.y - this.radius < 0){
        this.sy = -this.sy;
    }


    this.x += this.sx;
    this.y += this.sy;
// interactivity
    if (mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
     if (this.radius < maxRadius){
     this.radius += 1;   
    }
    }
    else if (this.radius > minRadius) {
     this.radius -= 1;   
    }


    this.draw();
    }
}


var circleArray = [];

function init() {
    circleArray = [];
    for (var i = 0; i < 800; i++){
        var radius = Math.random() * 3 + 1;
         var x = Math.random() * (innerWidth - radius * 2) + radius;
         var y = Math.random() * innerHeight;
         var sx = (Math.random() - 0.5);
         var sy = (Math.random() - 0.5);
    
        circleArray.push(new Circle(x,y,sx,sy,radius))
    }
}


function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();

    }

   


}
init();
animate();   
