import { deactiveLinks, hidePages } from "./func.js";

// Toggle Pages

const link_items = document.querySelectorAll(".link_item");
let pages = document.querySelectorAll(".page");

link_items.forEach((el, i) => {
  el.addEventListener("click", function () {
    hidePages(pages);
    pages[i].classList.add("active");
    deactiveLinks(link_items);
    el.classList.add("link_active");
  });
});

const getProductData = async (cat) => {
  try {
    let res = await fetch(`http://localhost:3000/${cat}`);
    let data = await res.json();

    console.log(data);
    appendProducts(data, cat);
  } catch (err) {}
};

getProductData("skincare");

const appendProducts = (data, cat) => {
  document.getElementById("product_tbody").innerHTML = "";
  data.forEach(({ id, image, productName, quantity, price, active }) => {
    let tr = document.createElement("tr");

    let img_td = document.createElement("td");
    let img = document.createElement("img");
    img.src = image;
    img_td.append(img);

    let name = document.createElement("td");
    name.innerText = productName;

    let inventory = document.createElement("td");
    let inv_span = document.createElement("span");
    inv_span.innerText = quantity;
    let inv_icon = document.createElement("i");
    inv_icon.classList.add("fa-solid", "fa-pencil", "edit_icon");
    inventory.append(inv_span, inv_icon);

    // adding EventListner
    inv_icon.onclick = (e) => {
      let new_quantity = +prompt("Enter New Quantity");
      if (new_quantity == 0) return;
      updateInvetory(id, cat, new_quantity);
      e.target.previousSibling.innerText = new_quantity;
    };

    let pri = document.createElement("td");
    let pri_span = document.createElement("span");
    pri_span.innerText = price;
    let pri_icon = document.createElement("i");
    pri_icon.classList.add("fa-solid", "fa-pencil", "edit_icon");
    pri.append(pri_span, pri_icon);

    let status = document.createElement("td");
    let btn = document.createElement("button");
    if (active) {
      btn.classList.add("status_active");
      btn.innerText = "Active";
    } else {
      btn.classList.add("status_inactive");
      btn.innerText = "Inactive";
    }
    status.append(btn);

    // <i class="fa-solid fa-trash-can"></i>
    let del = document.createElement("td");
    let del_icon = document.createElement("i");
    del_icon.classList.add("fa-solid", "fa-trash-can", "del_icon");
    del.append(del_icon);

    tr.append(img_td, name, inventory, pri, status, del);
    document.getElementById("product_tbody").append(tr);
  });
};

const updateInvetory = async (id, cat, new_quantity) => {
  let data = {
    quantity: new_quantity,
  };

  let res = await fetch(`http://localhost:3000/${cat}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  alert("Updated");
};
