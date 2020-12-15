console.log("work?");

var isblack = true;

function changeTextColor() {
  var elBall = document.querySelector(".elball");
  if (isblack) {
    elBall.style.color = "yellow";
    isblack = false;
  } else {
    elBall.style.color = "black";
    isblack = true;
  }
}

function changeTextSize() {
  var size = document.getElementById("size").value;
  var elBall = document.querySelector(".elball");
  elBall.style.fontSize = size + "px";
}

var isRound = true;
function changeBallShape() {
  var elBall = document.querySelector(".elball");
  var elbtn2 = document.querySelector(".elbtn2");
  if (isRound) {
    elBall.style.borderRadius = "0%";
    elbtn2.innerHTML = "To Round";
    isRound = false;
  } else {
    elBall.style.borderRadius = "50%";
    elbtn2.innerHTML = "To Square ";
    isRound = true;
  }
}
