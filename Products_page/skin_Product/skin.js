// import navbarTop from "../../componets/navbarTop.js"

// let navbar=document.getElementById("navbar")
// navbar.innerHTML=navbarTop()

const skin_product = async () => {
  try {
    let res = await fetch(
      `https://diva-mock-server.onrender.com/skincare?_limit=20`
    );

    let data = await res.json();
    console.log(data);
    appendProducts(data);
  } catch (error) {
    console.log("Product not found");
  }
};

skin_product();

let container = document.getElementById("Best_Sellers");
const appendProducts = (data) => {
  container.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "Best_Pro");

    let image = document.createElement("img");
    image.src = el.image;

    let Pro_name = document.createElement("p");
    Pro_name.textContent = el.productName;

    let Reviews = document.createElement("p");
    Reviews.textContent = el.reviews;

    let Price = document.createElement("p");
    Price.textContent = "Rs" + " " + el.price;

    let View_btn = document.createElement("button");
    View_btn.innerText = "View";

    div.append(image, Price);

    container.append(div);
  });
};
