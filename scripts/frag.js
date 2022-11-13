import stickOfferSection from "../componets/stickyofferSection.js";
import navbarTop from "../componets/navbarTop.js";
import navbarBottom from "../componets/navbarBottom.js";
import { footer_term } from "../componets/footer_term.js";
import { footer_delivery } from "../componets/footer_delivery.js";

let stick_section = document.getElementById("stick_section");
let navbarDiv = document.getElementById("navbar_top");
let navbarBottomDiv = document.getElementById("navbarBottom");

stick_section.innerHTML = stickOfferSection();
navbarDiv.innerHTML = navbarTop();
navbarBottomDiv.innerHTML = navbarBottom();
let footer_term1 = document.getElementById("footer_term");
footer_term1.innerHTML = footer_term();
let Delivery_footer = document.getElementById("footer-1");
Delivery_footer.innerHTML = footer_delivery();

let bag = JSON.parse(localStorage.getItem("ADD_TO_CART")) || {
  items: [],
  quant: [],
};
let cartCount = document.getElementById("cartCount");
cartCount.innerText = bag.items.length;

const Frag_product = async () => {
  try {
    let res = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

    let data = await res.json();
    console.log(data);

    // if(data.length<10){

    // }else{
    //   createBtn(data.length,12)
    // }

    createBtn(data.length, 12);
  } catch (error) {
    console.log("Product not found");
  }
};

const Paginate_Frag_product = async (clicked_button, limit) => {
  try {
    let res = await fetch(
      `https://diva-mock-server.onrender.com/Fragrance?_page=${clicked_button}&_limit=${limit}`
    );

    let data = await res.json();
    console.log(data);
    appendProducts(data);
  } catch (error) {
    console.log("Product not found");
  }
};

Frag_product();

Paginate_Frag_product(1, 12);

let buttons_div = document.getElementById("footer_btn");

const createBtn = (total_images, images_per_page) => {
  buttons_div.innerHTML = null;
  const buttons = Math.ceil(total_images / images_per_page);

  for (let i = 1; i <= buttons; i++) {
    let Btn = document.createElement("button");
    Btn.setAttribute("class", "btn btn-danger mt-5 mb-5 m-3");

    Btn.innerText = i;

    Btn.onclick = () => {
      Paginate_Frag_product(i, 12);
    };
    buttons_div.append(Btn);
  }
};

let count = 0;

let container = document.getElementById("Products");
const appendProducts = (data) => {
  container.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card p-3 shadow");

    let div_Image = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "product-image");
    div_Image.append(image);

    let div_mid = document.createElement("div");
    div_mid.setAttribute("class", "product-content");
    let Pro_name = document.createElement("p");
    Pro_name.textContent = el.productName;
    Pro_name.setAttribute("class", "Pro_Name");

    // let Reviews=document.createElement("p");
    // Reviews.textContent=el.reviews;

    let Price = document.createElement("p");
    Price.textContent = "MRP" + " : " + "Rs" + " " + +el.price;

    div_mid.append(Pro_name, Price);

    let div_View_btn = document.createElement("div");

    let View_btn = document.createElement("button");
    View_btn.innerText = "Add to Bag";
    View_btn.setAttribute("class", "btn btn-danger w-100");

    if (el.active === true) {
      View_btn.addEventListener("click", function () {
        count++;
        let newQuantity = el.quantity - count;
        console.log(newQuantity);
        AddToCart(el);
        location.reload();
      });
    } else {
      alert("Product is not available");
    }

    div_View_btn.append(View_btn);

    div.append(div_Image, div_mid, div_View_btn);

    container.append(div);
  });
};

// Add to Cart Function

const AddToCart = (el) => {
  let current_cart = JSON.parse(localStorage.getItem("ADD_TO_CART")) || {
    items: [],
    quant: [],
  };
  current_cart.items.push(el);
  current_cart.quant.push(1);
  localStorage.setItem("ADD_TO_CART", JSON.stringify(current_cart));
};

// Price Sorting

let Sort = document.getElementById("SORT");
Sort.addEventListener("change", function () {
  SortByPrice();
});

async function SortByPrice() {
  let SortValue = document.getElementById("SORT").value;

  if (SortValue === "Low") {
    try {
      let resp = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_sort=price&_order=asc`
      );

      let data = await resp.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (SortValue === "High") {
    try {
      let res1 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_sort=price&_order=desc`
      );

      let data = await res1.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else {
    try {
      let res2 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  }
}

//  Rating Sorting

let SortByRating = document.getElementById("SortByRating");
SortByRating.addEventListener("change", function () {
  SortByRate();
});

async function SortByRate() {
  let SortRate = document.getElementById("SortByRating").value;

  if (SortRate === "Low") {
    try {
      let resp = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_sort=rating&_order=asc`
      );

      let data = await resp.json();
      //  console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (SortRate === "High") {
    try {
      let res1 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_sort=rating&_order=desc`
      );

      let data = await res1.json();
      //  console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else {
    try {
      let res2 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  }
}

// Review Sorting

let SortByReview1 = document.getElementById("SortByReview");
SortByReview1.addEventListener("change", function () {
  SortByReview();
});

async function SortByReview() {
  let SortReview = document.getElementById("SortByReview").value;

  if (SortReview === "Low") {
    try {
      let resp = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_sort=reviews&_order=asc`
      );

      let data = await resp.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (SortReview === "High") {
    try {
      let res1 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_sort=reviews&_order=desc`
      );

      let data = await res1.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else {
    try {
      let res2 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  }
}

/////filter

let Brand = document.getElementById("FilterByBrand");
Brand.addEventListener("change", function () {
  BrandFilter();
});

async function BrandFilter() {
  let brand = document.getElementById("FilterByBrand").value;

  if (brand === "1") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "Yves Saint Laurent";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 6);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brand === "2") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "Marc Jacobs Fragrances";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 12);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brand === "3") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "Atelier Cologne";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 6);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else {
    try {
      let res2 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
      createBtn(data.length, 12);
    } catch (error) {
      console.log("Product not found");
    }
  }
}

//filter price

let BrandPrice = document.getElementById("FilterByPrice");
BrandPrice.addEventListener("change", function () {
  BrandPriceFilter();
});

async function BrandPriceFilter() {
  let brandPrice = document.getElementById("FilterByPrice").value;

  if (brandPrice === "1") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.price <= 999;
      });

      appendProducts(filterData);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brandPrice === "2") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.price <= 1499;
      });

      appendProducts(filterData);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brandPrice === "3") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.price <= 2999;
      });

      appendProducts(filterData);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brandPrice === "4") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/Fragrance`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.price > 2999;
      });

      appendProducts(filterData);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else {
    try {
      let res2 = await fetch(
        `https://diva-mock-server.onrender.com/Fragrance?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  }
}

$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(".dropdown-menu", this)
        .not(".in .dropdown-menu")
        .stop(true, true)
        .slideDown(100);
      $(this).toggleClass("open");
    },
    function () {
      $(".dropdown-menu", this)
        .not(".in .dropdown-menu")
        .stop(true, true)
        .slideUp(100);
      $(this).toggleClass("open");
    }
  );
});

// Checking for User Login
let sign_btn = document.getElementById("sign_btn");
let account_div = document.getElementById("account_div");
let login_user_name = document.getElementById("login_user_name");
let logoutFun = document.getElementById("logoutFun");

let current_user = JSON.parse(sessionStorage.getItem("current_user"));
logoutFun.addEventListener("click", function () {
  sessionStorage.removeItem("current_user");
  location.reload();
  sign_btn.style.display = "block";
  account_div.style.display = "none";
});

if (current_user) {
  sign_btn.style.display = "none";
  login_user_name.innerText = current_user.name;
  account_div.style.display = "block";
}
