
import stickOfferSection from '../componets/stickyofferSection.js';
import carousalHomepage from "../componets/carouselHomepage.js";
import navbarTop from "../componets/navbarTop.js"
import { footer_term } from "../componets/footer_term.js";
import { footer_delivery } from "../componets/footer_delivery.js";


let stick_section =  document.getElementById("stick_section");
let carousalDiv = document.getElementById("carousal");
let navbarDiv = document.getElementById("navbar_top")
stick_section.innerHTML = stickOfferSection();
carousalDiv.innerHTML = carousalHomepage();
navbarDiv.innerHTML = navbarTop();
let Delivery_footer=document.getElementById("footer-1");
Delivery_footer.innerHTML=footer_delivery()

let footer_term1=document.getElementById("footer_term");
footer_term1.innerHTML=footer_term()
$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideDown("400");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).slideUp("400");
            $(this).toggleClass('open');       
        }
    );
});

