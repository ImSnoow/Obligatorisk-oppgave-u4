//model
var points = 0;
var pointsPerClick = 1;
var smileyIndex = 0;

//controller
function doClick(){
points += pointsPerClick;
updateView();

}

function ti() {    
    if(points < 10) return;
    points -= 10;
    pointsPerClick++;    
    updateView(); 
}

function femti() {
    if(points < 50) return;
    points -= 50;
    pointsPerClick += 2;
    updateView(); 
}

function hundre() {
    if(points < 100) return;
    points -= 100;
    pointsPerClick += 5; 
    updateView(); 
}

function femHundre() {
    if(points < 500) return;
    points -= 500;
    pointsPerClick += 10;
    updateView(); 
}

function tusen() {
    if(points < 1000) return;
    points -= 1000;
    pointsPerClick += 50;
var pic = "Terje.png"
    document.getElementById('hei').src = pic.replace('2x2', '3x3') ;
    document.getElementById('hei').style.display='block';    
    updateView(); 
}
//view
updateView();
function updateView(){

document.getElementById('app').innerHTML =` 
<div id="pointsInfo">${points}  </div>

`}