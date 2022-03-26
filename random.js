//Function that changes Html element when a button is clicked
let backgroundChange = document.querySelector("#elementChange");

backgroundChange.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url('images/background.jpg')";
});

//Function that changes css property when button is clicked
let btn2 = document.querySelector("#cssChange");

btn2.addEventListener("click", ()=>{
    document.getElementById("cssChange").style.backgroundColor = "red";
    
})
let textButton = document.querySelector("#textEntry");
let userInput = document.querySelector("#textBox");

function myFunction() {
    var x = "Your name is " + document.getElementById("textBox").value;
    document.getElementById("output").innerHTML = x;
  }
  
function randomFunction() {
    var maxNum = document.getElementById("maxBox").value;
    var minNum = document.getElementById("minBox").value;
    if(minNum < maxNum)
        {
            var finalNum = getRandomIntInclusive(minNum,maxNum)
        }
    document.getElementById("numOutput").innerHTML = finalNum;
  }

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
