import {isUser} from "./isUser.js";
let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");

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
    document.getElementById("user_mail").value = user_email
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