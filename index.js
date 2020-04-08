var colors = [
    "rgb(0, 0, 255)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(255, 0, 255)",
    "rgb(128, 0, 128)",
    "rgb(0, 128, 128)",
];
var boxes = document.querySelectorAll(".box");
var s = document.querySelector('span');
var pickedColor = colors[ Math.floor(Math.random()*6)];
s.textContent = pickedColor;
s.style.background = pickedColor;
for (var i = 0; i<colors.length ; i++){
    boxes[i].style.background = colors[i]; 

    boxes[i].addEventListener('click',function(){
        var selectedColor = this.style.background;
        console.log(selectedColor);
        console.log(pickedColor);
        if( selectedColor === pickedColor){
            win();
        }
        else{
            // console.log(this);
            loose(this);
        }
    });
}
function win(){
for (var i = 0; i<colors.length ; i++){
    boxes[i].style.background = pickedColor;
}
}
function loose(a){
    console.log(a);
    a.style.background = "#2f2f2f"
}