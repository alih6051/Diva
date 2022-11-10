

function slideshow(){
    let imageArr=['https://images-static.nykaa.com/uploads/4ff2b551-827d-42b1-9662-9ea9271cfc3e.jpg?tr=w-1200,cm-pad_resize','https://images-static.nykaa.com/uploads/321d36b3-9253-444d-9256-ff6778c43ca3.jpg?tr=w-1200,cm-pad_resize','https://images-static.nykaa.com/uploads/02ec95ca-f0c3-4499-9c42-a232672d1aa1.gif?tr=w-1200,cm-pad_resize'];


    let i=0;
    let div=document.getElementById("carousel");

    let img=document.createElement("img")
    img.src=imageArr[0];

    div.append(img);
    i=i+1;

    setInterval(function (){
        if(i===imageArr.length){
            i=0;
        }

        img.src=imageArr[i];

        i=i+1;
        div.append(img);
    },3000)
console.log("hi")
}

slideshow()


const Hair_product=async() =>{
    try{
        let res=await fetch(`http://localhost:3000/hair?_limit=20`);
          
        let data=await res.json();
        console.log(data)
        appendProducts(data)
      
    }
    catch(error){
        console.log("Product not found")
    }
}
 

Hair_product()

let container=document.getElementById("Bestseller")
const appendProducts=(data)=>{
  container.innerHTML=null;

  

  data.forEach((el)=>{
    let div=document.createElement("div");
    div.setAttribute("class","Best_Pro_Hair")

    let image=document.createElement("img");
    image.src=el.image;

    let Pro_name=document.createElement("p");
    Pro_name.textContent=el.productName;
    Pro_name.classList.add("text-truncate")

    let Reviews=document.createElement("p");
    Reviews.textContent=el.reviews;

    let Price=document.createElement("p");
    Price.textContent=+(el.price);

    let View_btn=document.createElement("button")
    View_btn.innerText="View"


    div.append(image,Pro_name,Reviews,Price,View_btn)

    container.append(div);
  })
}


