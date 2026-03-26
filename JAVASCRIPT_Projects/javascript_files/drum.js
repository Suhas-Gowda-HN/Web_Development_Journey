var l = document.querySelectorAll(".drum").length;

for(var i = 0 ; i<l ; i++){
    document.querySelectorAll("button")[i].addEventListener
    ("click",function(){
        var buttonPressed = this.innerHTML;
        sound(buttonPressed);
        animation(buttonPressed);
    });
}

document.addEventListener("keydown",function(Event){
    
    sound(Event.key);
    animation(Event.key);
});

function sound(key){
    switch (key) {
            case 'w':
                var a1 = new Audio("../sound/sounds/tom-1.mp3");
                a1.play();
                break;
            case 'a':
                var a1 = new Audio("../sound/sounds/tom-2.mp3");
                a1.play();
                break;
            case 's':
                var a1 = new Audio("../sound/sounds/tom-3.mp3");
                a1.play();
                break;
            case 'd':
                var a1 = new Audio("../sound/sounds/tom-4.mp3");
                a1.play();
                break;
            case 'j':
                var a1 = new Audio("../sound/sounds/kick-bass.mp3");
                a1.play();
                break;
            case 'k':
                var a1 = new Audio("../sound/sounds/snare.mp3");
                a1.play();
                break;
            case 'l':
                var a1 = new Audio("../sound/sounds/crash.mp3");
                a1.play();
                break;
        
            default: console.log(buttonPressed);
                break;
        }
}
function animation(key){
    var c = document.querySelector("."+key);
    c.classList.add("pressed");
    setTimeout(function(){
        c.classList.remove("pressed");
    }, 100);
}
