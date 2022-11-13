// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add_product");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// add new products
let addNewProducts = document.getElementById("add_new_product");
addNewProducts.onclick = async () => {
  let category = document.getElementById("new_prod_category").value;
  let ProdName = document.getElementById("new_prod_name").value;
  let ProdImage = document.getElementById("new_prod_img").value;
  let ProdPrice = document.getElementById("new_prod_price").value;
  let ProdBrand = document.getElementById("new_prod_brandName").value;
  let ProdQuantity = document.getElementById("new_prod_quantity").value;
  let ProdDescription = document.getElementById("new_prod_description").value;

  let dataToSend = {
    active: true,
    productName: ProdName,
    image: ProdImage,
    price: ProdPrice,
    brandName: ProdBrand,
    quantity: ProdQuantity,
    description: ProdDescription,
  };

  let res = await fetch(`https://diva-mock-server.onrender.com/${category}`, {
    method: "POST",
    body: JSON.stringify(dataToSend),
    headers: {
      "Content-Type": "application/json",
    },
  });
  category.value = "";
  ProdName.value = "";
  ProdImage.value = "";
  ProdPrice.value = "";
  ProdBrand.value = "";
  ProdQuantity.value = "";
  ProdDescription.value = "";
  alert("Product Added");
};
