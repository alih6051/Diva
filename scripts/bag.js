let bag = JSON.parse(localStorage.getItem("ADD_TO_CART")) || [];
let container = document.getElementById("cartSection");
let totalMrp = document.getElementById("totalMrp");
let finalMrp = document.getElementById("finalMrp");
let payAmount = document.getElementById("payAmount");
let cartCount = document.getElementById("cartCount");

function cartData(data) {
  cartCount.innerText = data.length;
  let total = 0;
  container.innerHTML = null;
  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card p-3 mt-3");
    let div2 = document.createElement("div");
    div2.setAttribute("class", "row");
    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "image-cart col-3");
    let name = document.createElement("p");
    name.innerText = el.productName;
    name.setAttribute("class", "col-8 mt-2");
    let icon = document.createElement("span");
    icon.innerHTML = "<i class='fa fa-trash pe-2'></i>";
    icon.setAttribute("class", "col-1 mt-2");
    let hr = document.createElement("hr");
    hr.setAttribute("class", "mt-2");
    let price = document.createElement("b");
    price.setAttribute("class", "col-12 text-end");
    price.innerText = "₹" + el.price;
    total += el.price;
    div2.append(image, name, icon, hr, price);
    div.append(div2);
    let div3 = document.createElement("div");
    div3.setAttribute("class", "row");
    container.append(div);
  });
  totalMrp.innerText = total;
  finalMrp.innerText = total;
  payAmount.innerText = total;
}
cartData(bag);
