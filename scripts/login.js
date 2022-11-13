import { isUser } from "./isUser.js";
let firstDiv = document.getElementById("firstDiv");
let secondDiv = document.getElementById("secondDiv");
let thirdDiv = document.getElementById("thirdDiv");
let LoginBtn = document.getElementById("LoginId");
let registerBtn = document.getElementById("registerId");
let emailProcess = document.getElementById("proceedToPass");
let user_email = document.getElementById("emailId");
let login_password = document.getElementById("login_password");

let addNewUser = document.getElementById("register_User");
addNewUser.onclick = async () => {
  let user_name = document.getElementById("user_name").value;
  let user_phone = document.getElementById("user_phone").value;
  let user_mail = document.getElementById("user_mail").value;
  let user_password = document.getElementById("user_password").value;

  let current_user_detail;

  let dataToUser = {
    email: user_mail,
    password: user_password,
    phone: user_phone,
    name: user_name,
  };
  let res = await fetch(
    `https://diva-mock-server.onrender.com/user_login_details`,
    {
      method: "POST",
      body: JSON.stringify(dataToUser),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  firstDiv.style.display = "block";
  thirdDiv.style.display = "none";
  user_email.value = dataToUser.email;
};

let user_data;

const getUsers = async () => {
  try {
    let res = await fetch(
      `https://diva-mock-server.onrender.com/user_login_details`
    );
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
    user_data = isUser(user_email, user_data);
    saveData();
  } else {
    let user_email = document.getElementById("emailId").value;
    document.getElementById("user_mail").value = user_email;
    firstDiv.style.display = "none";
    thirdDiv.style.display = "block";
  }
};

LoginBtn.addEventListener("click", function () {
  if (user_data.password == login_password.value) {
    alert("Login Successfully !");
    sessionStorage.setItem("current_user", JSON.stringify(user_data));
    location.href = "./index.html";
  } else {
    alert("Incorrect Password");
  }
  // window.location = "./index.html";
});
function saveData() {
  firstDiv.style.display = "none";
  secondDiv.style.display = "block";
}
function redirectIndex() {
  window.location = "./index.html";
}
