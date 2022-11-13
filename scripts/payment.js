let paymentDone = document.getElementById("paymentDone");
paymentDone.addEventListener("click", function () {
  localStorage.removeItem("ADD_TO_CART");
  prompt("Enter OTP");
  alert("Order Placed Successfully!");
  location.href = "./index.html";
});

let total = sessionStorage.getItem("totalCartValue") || 0;
let totalpayment = document.getElementById("totalpayment");
let finalpayment = document.getElementById("finalpayment");

totalpayment.innerText = total;
finalpayment.innerText = total;
