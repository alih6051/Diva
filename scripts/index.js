// import prodlist from "../componets/prodlist.js"





// let productFrag=document.getElementById('productFrag')
// productFrag.innerHTML=prodlist();


const getData = async() => {

let res = await fetch (`http://localhost:3000/Fragrance`)

let data = await res.json();
console.log("data",data)

appendData(data)
}


getData();


let productFrag_div = document.getElementById("productFrag")
const appendData=(data ) =>{

data.forEach((el) => {
   let div = document.createElement("div");

   let image =document.createElement('img')
    image.src=el.image;

    let name=document.createElement('productName')
name.innerHTML=el.productName;

let price=document.createElement('p')
price.innerHTML=el.price;

div.append(image,name,price)
productFrag_div.append(div)

});
} 

