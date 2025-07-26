const button = document.querySelector("button");
const body =document.querySelector("body");
body.style.backgroundColor = "green";

const colors = ["red", "yellow","wooden", "pink","blue","chocolate","white","skyblue","orange"
    ]
    
  
    let intervalId;
const startChangingColor = function () {
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }

  function changeBgColor() {
    const colorIndex = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[colorIndex];
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);