import {isUser} from "./isUser.js";
let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");
let LoginBtn = document.getElementById("LoginId");
let registerBtn = document.getElementById("registerId");
let emailProcess = document.getElementById("proceedToPass");
let user_email = document.getElementById("emailId").value;

let addNewUser = document.getElementById("register_User");
addNewUser.onclick = async () => {
let user_name = document.getElementById("user_name").value;
let user_phone = document.getElementById("user_phone").value;
let user_mail = document.getElementById("user_mail").value;
let user_password = document.getElementById("user_password").value;

let dataToUser = {
    email: user_mail,
    password: user_password,
    phone: user_phone,
    name: user_name,
  };

  let res = await fetch(`http://localhost:3000/user_login_details`, {
    method: "POST",
    body: JSON.stringify(dataToUser),
    headers: {
      "Content-Type": "application/json",
    },
  });
  redirectIndex()
}


let user_data;

const getUsers = async () => {
    try {
      let res = await fetch(`http://localhost:3000/user_login_details`);
      let data = await res.json();
      user_data = data;
    } catch (err) {
      console.log(err);
    }
  };
  
  getUsers();

  emailProcess.onclick = () => {
    let user_email = document.getElementById("emailId").value;
    document.getElementById("user_mail").value = user_email;
    if (isUser(user_email, user_data)) {
        console.log(user_email)
      let data = {
        user_email,
        user_data,
      };
      sessionStorage.setItem("user_email", JSON.stringify(data));
      localStorage.setItem("user_email",JSON.stringify())
      saveData()
    } else {
      let user_email = document.getElementById("emailId").value;
      document.getElementById("emailDisabled").value = user_email;
      firstDiv.style.display = "none";
      thirdDiv.style.display = "block";
    }
  };



    LoginBtn.addEventListener("click", function (){
            window.location = "./index.html"
    });
    function saveData(){
        firstDiv.style.display = "none";
        secondDiv.style.display = "block";
    }
    function redirectIndex() {
        window.location = "./index.html"
    }