

let bag=JSON.parse(localStorage.getItem("ADD_TO_CART"));

let container=document.getElementById("imgDiv");

function ImageJOIN (data) {


 container.innerHTML=null;

  data.forEach((el)=>{ 

    let image=document.createElement("img");

    image.src=el.image;

   container.append(image)

})
}

ImageJOIN(bag)


let container1=document.getElementById("NameDiv");

function NameJOIN (data) {


 container1.innerHTML=null;

  data.forEach((el)=>{ 

    let name=document.createElement("p");

    name.innerText=el.productName
    
   container1.append(name)

})
}

NameJOIN(bag)





let container2=document.getElementById("PriceDiv");



function PriceJOIN (data) {


 container2.innerHTML=null;
 data.forEach((el)=>{ 

    let price=document.createElement("b");


price.innerText="₹"+(el.price)
    
   container2.append(price)

})

}
PriceJOIN(bag)


let PriceArr=[]
let ExactPrice=0
let Quantity=document.getElementById("Quantity")

Quantity.addEventListener("change",function(){
  quantProduct(bag)
})

function quantProduct(data){
  let Quant=document.getElementById("Quantity").value 
  console.log(Quant)
  if(Quant==="1"){
    
   function PriceJOIN (data) {


  container2.innerHTML=null;
    data.forEach((el)=>{ 

      let price=document.createElement("b");
      ExactPrice+=(el.price)*1
      console.log(ExactPrice)
      price.innerText="₹"+ExactPrice

      container2.append(price)
  })
}
}
}
// let RemovePro=document.getElementById("remove");
// RemovePro.addEventListener("click",function(){
//     RemoveProduct()
// })


// function RemoveProduct(data){
//   for(let i=0;i<data.length;i++){
//     data.splice(i,1)
//   }
// }
// RemoveProduct(bag)




let TotalCount=document.getElementById("totalQty");
TotalCount.innerText=bag.length;


let TotalPrice=document.getElementById("totalPrice");
let total=0;
for(let i=0;i<bag.length;i++){
  total+=bag[i].price
}
TotalPrice.innerText="₹"+total;


let ShippingCharge=document.getElementById("shipping")
let Pay=document.getElementById("Pay");
let FinalPay=document.getElementById("finalPay");
if(total>10000){
 ShippingCharge.innerText="Free"
 Pay.innerText="₹"+(total)
 FinalPay.innerText="₹"+(total)
}else if(total>4000){
    total=total+100
    ShippingCharge.innerText=+(100)
    Pay.innerText="₹"+(total)
    FinalPay.innerText="₹"+(total)
}else{
    total+=200;
    ShippingCharge.innerText="₹"+(200)
    Pay.innerText="₹"+(total)
    FinalPay.innerText="₹"+(total)
}