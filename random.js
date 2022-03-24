//Function that changes Html element when a button is clicked
let backgroundChange = document.querySelector("#elementChange");

backgroundChange.addEventListener("click", () =>{
    document.body.style.backgroundImage = "url('images/background.jpg')";
});