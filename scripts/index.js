import { footer_term } from "../componets/footer_term.js";

import { footer_delivery } from "../componets/footer_delivery.js";


let Delivery_footer=document.getElementById("footer-1");
Delivery_footer.innerHTML=footer_delivery()

let footer_term1=document.getElementById("footer_term");
footer_term1.innerHTML=footer_term()