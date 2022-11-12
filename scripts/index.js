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

let footer_term1 = document.getElementById("footer_term");
footer_term1.innerHTML = footer_term();

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
