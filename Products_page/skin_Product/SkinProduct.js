const Skin_product = async () => {
  try {
    let res = await fetch(`https://diva-mock-server.onrender.com/skincare`);

    let data = await res.json();
    console.log(data);

    createBtn(data.length, 12);
  } catch (error) {
    console.log("Product not found");
  }
};

const Paginate_Skin_product = async (clicked_button, limit) => {
  try {
    let res = await fetch(
      `https://diva-mock-server.onrender.com/skincare?_page=${clicked_button}&_limit=${limit}`
    );

    let data = await res.json();
    console.log(data);
    appendProducts(data);
  } catch (error) {
    console.log("Product not found");
  }
};

Skin_product();

Paginate_Skin_product(1, 12);

let buttons_div = document.getElementById("footer_btn");

const createBtn = (total_images, images_per_page) => {
  const buttons = Math.ceil(total_images / images_per_page);
  buttons_div.innerHTML = null;
  for (let i = 1; i <= buttons; i++) {
    let Btn = document.createElement("button");
    Btn.setAttribute("class", "btn btn-danger mt-5 mb-5 m-3");

    Btn.innerText = i;

    Btn.onclick = () => {
      Paginate_Skin_product(i, 12);
    };
    buttons_div.append(Btn);
  }
};

let container = document.getElementById("Products");
const appendProducts = (data) => {
  container.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card p-3");

    let div_Image = document.createElement("div");
    div_Image.setAttribute("class", "div_img");
    let image = document.createElement("img");
    image.src = el.image;
    image.setAttribute("class", "product-image");
    div_Image.append(image);

    let div_mid = document.createElement("div");
    div_mid.setAttribute("class", "div_mid");
    let Pro_name = document.createElement("p");
    Pro_name.textContent = el.productName;
    Pro_name.setAttribute("class", "Pro_Name");

    // let Reviews=document.createElement("p");
    // Reviews.textContent=el.reviews;

    let Price = document.createElement("p");
    Price.textContent = "MRP" + " : " + "Rs" + " " + +el.price;

    div_mid.append(Pro_name, Price);

    let div_View_btn = document.createElement("div");
    div_View_btn.setAttribute("class", "div_View_btn");

    let View_btn = document.createElement("button");
    View_btn.innerText = "Add to Bag";
    View_btn.setAttribute("class", "View_Btn");

    if (el.active === true) {
      View_btn.addEventListener("click", function () {
        console.log("HI");
        AddToCart(el);
      });
    } else {
      alert("Product is not available");
    }

    // View_btn.addEventListener("click",function(){
    // console.log("HI");
    // })

    div_View_btn.append(View_btn);

    div.append(div_Image, div_mid, div_View_btn);

    container.append(div);
  });
};

const AddToCart = (el) => {
  let SKINPRODUCT = JSON.parse(localStorage.getItem("ADD_TO_CART")) || [];
  SKINPRODUCT.push(el);
  localStorage.setItem("ADD_TO_CART", JSON.stringify(SKINPRODUCT));
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
        `https://diva-mock-server.onrender.com/skincare?_sort=price&_order=asc`
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
        `https://diva-mock-server.onrender.com/skincare?_sort=price&_order=desc`
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
        `https://diva-mock-server.onrender.com/skincare?_limit=12`
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
        `https://diva-mock-server.onrender.com/skincare?_sort=rating&_order=asc`
      );

      let data = await resp.json();
      //  console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (SortValue === "High") {
    try {
      let res1 = await fetch(
        `https://diva-mock-server.onrender.com/skincare?_sort=rating&_order=desc`
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
        `https://diva-mock-server.onrender.com/skincare?_limit=12`
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
        `https://diva-mock-server.onrender.com/skincare?_sort=reviews&_order=asc`
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
        `https://diva-mock-server.onrender.com/skincare?_sort=reviews&_order=desc`
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
        `https://diva-mock-server.onrender.com/skincare?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  }
}

/////filter  1.tula 2.dr. dennis 3.ren clean  4.dr. brandt

let Brand = document.getElementById("FilterByBrand");
Brand.addEventListener("change", function () {
  BrandFilter();
});

async function BrandFilter() {
  let brand = document.getElementById("FilterByBrand").value;

  if (brand === "1") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "TULA Skincare";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 9);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brand === "2") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "Dr. Dennis Gross Skincare";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 9);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brand === "3") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "Dr. Brandt Skincare";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 9);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else if (brand === "4") {
    try {
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

      let data = await resp.json();
      //  console.log(data)

      let filterData = data.filter((el) => {
        return el.brandName === "REN Clean Skincare";
      });

      appendProducts(filterData);
      createBtn(filterData.length, 9);
      console.log(filterData);
    } catch (error) {
      console.log("Product not found");
    }
  } else {
    try {
      let res2 = await fetch(
        `https://diva-mock-server.onrender.com/skincare?_limit=12`
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
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

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
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

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
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

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
      let resp = await fetch(`https://diva-mock-server.onrender.com/skincare`);

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
        `https://diva-mock-server.onrender.com/skincare?_limit=12`
      );

      let data = await res2.json();
      // console.log(data)
      appendProducts(data);
    } catch (error) {
      console.log("Product not found");
    }
  }
}
