import stickOfferSection from "../componets/stickyofferSection.js";
import carousalHomepage from "../componets/carouselHomepage.js";
import navbarTop from "../componets/navbarTop.js";
import navbarBottom from "../componets/navbarBottom.js";
import smallCarousalHomepage from "../componets/smallCarousalHomepage.js";
import offerBanner from "../componets/offerBanner.js";
import topBrands from "../componets/topBrands.js";
import onlyDiva from "../componets/onlyDiva.js";
import featureBrand from "../componets/featureBrand.js";
import categoryFocus from "../componets/categoryFocus.js";
import featureBrandSeaction from "../componets/featureBrandSection.js";
import giftCard from "../componets/giftCard.js";
import { footer_term } from "../componets/footer_term.js";
import { footer_delivery } from "../componets/footer_delivery.js";

let stick_section = document.getElementById("stick_section");
let carousalDiv = document.getElementById("carousal");
let navbarDiv = document.getElementById("navbar_top");
let navbarBottomDiv = document.getElementById("navbarBottom");
let smallCarousalHomepageDiv = document.getElementById("smallCarousalHomepage");
let offerBannerDiv = document.getElementById("offerBanner");
let topBrandsDiv = document.getElementById("topBrands");
let onlyDivaDiv = document.getElementById("onlyDiva");
let featureBrandDiv = document.getElementById("featureBrand");
let featureBrandSeactionDiv = document.getElementById("featureBrandSeaction");
let categoryFocusDiv = document.getElementById("categoryFocus");
let giftCardDiv = document.getElementById("giftCard");
stick_section.innerHTML = stickOfferSection();
carousalDiv.innerHTML = carousalHomepage();
navbarDiv.innerHTML = navbarTop();
navbarBottomDiv.innerHTML = navbarBottom();
smallCarousalHomepageDiv.innerHTML = smallCarousalHomepage();
offerBannerDiv.innerHTML = offerBanner();
topBrandsDiv.innerHTML = topBrands();
onlyDivaDiv.innerHTML = onlyDiva();
featureBrandDiv.innerHTML = featureBrand();
featureBrandSeactionDiv.innerHTML = featureBrandSeaction();
categoryFocusDiv.innerHTML = categoryFocus();
giftCardDiv.innerHTML = giftCard();
let Delivery_footer = document.getElementById("footer-1");
Delivery_footer.innerHTML = footer_delivery();

// document.getElementById("cartSection").innerText = "Testing";
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

$(document).ready(function () {
  $(".dropdown").hover(
    function () {
      $(".dropdown-menu", this)
        .not(".in .dropdown-menu")
        .stop(true, true)
        .slideDown(10);
      $(this).toggleClass("open");
    },
    function () {
      $(".dropdown-menu", this)
        .not(".in .dropdown-menu")
        .stop(true, true)
        .slideUp(10);
      $(this).toggleClass("open");
    }
  );
});

// Checking for User Login
let sign_btn = document.getElementById("sign_btn");
let account_div = document.getElementById("account_div");
let login_user_name = document.getElementById("login_user_name");

let current_user = JSON.parse(sessionStorage.getItem("current_user"));

if (current_user) {
  sign_btn.style.display = "none";
  login_user_name.innerText = current_user.name;
  account_div.style.display = "block";
}
