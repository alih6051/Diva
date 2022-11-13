import { isAdmin } from "./isAdmin.js";

// Getting Admin users
let admin_users;

const getAdminUsers = async () => {
  try {
    let res = await fetch(`https://diva-mock-server.onrender.com/admin_users`);
    let data = await res.json();
    admin_users = data;
    console.log(admin_users);
  } catch (err) {
    console.log(err);
  }
};

getAdminUsers();

let login_btn = document.getElementById("login_btn");
login_btn.onclick = () => {
  let username = document.getElementById("login_username").value;
  let password = document.getElementById("login_password").value;
  if (isAdmin(username, password, admin_users)) {
    let data = {
      username,
      password,
    };
    sessionStorage.setItem("admin_user", JSON.stringify(data));
    alert("Login Sucessfull!");
    location.href = "dashboard.html";
  } else {
    alert("Invaild Username or Password");
  }
};
