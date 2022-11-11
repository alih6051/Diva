let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");
let loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", function (){
        saveData()
    });

function saveData(){
    firstDiv.style.display = "none";
    secondDiv.style.display = "block";
    console.log("checking");
}
