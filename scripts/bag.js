let bag = JSON.parse(localStorage.getItem("ADD_TO_CART")) || {
  items: [],
  quant: [],
};
let container = document.getElementById("cartSection");
let totalMrp = document.getElementById("totalMrp");
let finalMrp = document.getElementById("finalMrp");
let payAmount = document.getElementById("payAmount");
let cartCount = document.getElementById("cartCount");

//*************************************************************************** */

function cartData(data) {
  cartCount.innerText = data.items.length;
  let total = 0;
  container.innerHTML = null;
  data.items.forEach((el, i) => {
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
    icon.onclick = (e) => {
      e.target.parentNode.parentNode.parentNode.remove();
      handleItemRemove(i);
    };

    let hr = document.createElement("hr");
    hr.setAttribute("class", "mt-2");
    let quantity = document.createElement("select");
    quantity.setAttribute("class", "col-5 text-start");
    quantity.innerHTML = `<option value='1'>Quantity 1</option><option value='2'>Quantity 2</option><option value='3'>Quantity 3</option><option value='4'>Quantity 4</option><option value='5'>Quantity 5</option>`;
    quantity.value = `${data.quant[i]}`;
    quantity.onchange = (e) => {
      handleQuantity(i, e.target.value);
    };

    let price = document.createElement("b");
    price.setAttribute("class", "col-7 text-end");
    let total_price = el.price * data.quant[i];
    price.innerText = "₹" + total_price;
    total += total_price;
    div2.append(image, name, icon, hr, quantity, price);
    div.append(div2);
    let div3 = document.createElement("div");
    div3.setAttribute("class", "row");
    container.append(div);
  });
  totalMrp.innerText = total;
  finalMrp.innerText = total;
  payAmount.innerText = total;
  sessionStorage.setItem("totalCartValue", total);
}
cartData(bag);

const handleQuantity = (i, val) => {
  bag.quant[i] = +val;
  localStorage.setItem("ADD_TO_CART", JSON.stringify(bag));
  cartData(bag);
};

const handleItemRemove = (i) => {
  bag.items.splice(i, 1);
  bag.quant.splice(i, 1);
  localStorage.setItem("ADD_TO_CART", JSON.stringify(bag));
  cartData(bag);
};
//*************************************************************************** */

let Proceed = document.getElementById("Proceed");
Proceed.addEventListener("click", function () {
  window.location = "./checkout.html";
});
