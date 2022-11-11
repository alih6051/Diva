let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");
let processBtn = document.getElementById("proceedToPass");
let LoginBtn = document.getElementById("LoginId");
let registerBtn = document.getElementById("registerId");
let email = document.getElementById("emailId").value;;

processBtn.addEventListener("click", function (){
        saveData()
 });
LoginBtn.addEventListener("click", function (){
        window.location = "./index.html"
});
registerBtn.addEventListener("click", function (){
    window.location = "./index.html"
});

function saveData(){
    firstDiv.style.display = "none";
    secondDiv.style.display = "block";
}
