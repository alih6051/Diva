const Hair_product = async () => {
  try {
    let res = await fetch(
      `https://diva-mock-server.onrender.com/hair?_limit=20`
    );

    let data = await res.json();
    console.log(data);
    appendProducts(data);
  } catch (error) {
    console.log("Product not found");
  }
};

Hair_product();

let container = document.getElementById("Bestseller");
const appendProducts = (data) => {
  container.innerHTML = null;

  data.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "Best_Pro_Hair");

    let image = document.createElement("img");
    image.src = el.image;

    let Pro_name = document.createElement("p");
    Pro_name.textContent = el.productName;
    // Pro_name.classList.add("text-truncate")

    // let Reviews=document.createElement("p");
    // Reviews.textContent=el.reviews;

    let Price = document.createElement("p");
    Price.textContent = "Rs" + " " + el.price;

    let View_btn = document.createElement("button");
    View_btn.innerText = "View";

    div.append(image, Price);

    container.append(div);
  });
};
