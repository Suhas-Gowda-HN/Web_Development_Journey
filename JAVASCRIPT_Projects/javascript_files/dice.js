var r1 = Math.floor(Math.random()*6)+1;

var s1 = "../Images_files/"+"dice"+r1+".png";

var img1 = document.querySelectorAll("img")[0];

var p1 = img1.setAttribute("src",s1);

var r2 = Math.floor(Math.random()*6)+1;
var s2 = "../Images_files/"+"dice"+r2+".png";
var img2 = document.querySelectorAll("img")[1];
var p2 = img2.setAttribute("src",s2);

if(r1>r2){
    document.querySelector("h1").textContent="⛳️ Player 1 Wins !";
}else if(r2>r1){
    document.querySelector("h1").textContent="Player 2 Wins! ⛳️";
}else{
    document.querySelector("h1").textContent="Draw ! Try Again...";
}