





const Hair_product=async() =>{
    try{
        let res=await fetch(`http://localhost:3000/hair`);
          
        let data=await res.json();
        console.log(data)
       
        createBtn(data.length,12)
      
    }
    catch(error){
        console.log("Product not found")
    }
}
 

const Paginate_Hair_product=async(clicked_button,limit) =>{
  try{
      let res=await fetch(`http://localhost:3000/hair?_page=${clicked_button}&_limit=${limit}`);
        
      let data=await res.json();
      console.log(data)
      appendProducts(data)
      
    
  }
  catch(error){
      console.log("Product not found")
  }
}

Hair_product()

Paginate_Hair_product(1,12)

let buttons_div=document.getElementById("footer_btn");

const createBtn=(total_images,images_per_page)=>{
  const buttons=Math.ceil(total_images/images_per_page);

  for(let i=1;i<=buttons;i++){
    let Btn=document.createElement("button");
    Btn.setAttribute("class","FooterBtn")

    Btn.innerText=i;

    Btn.onclick=()=>{
      Paginate_Hair_product(i,12)
    }
    buttons_div.append(Btn)
  }
}



let container=document.getElementById("Products")
const appendProducts=(data)=>{
  container.innerHTML=null;

  

  data.forEach((el)=>{
    let div=document.createElement("div");
    div.setAttribute("class","HairProduct")

    let image=document.createElement("img");
    image.src=el.image;

    let Pro_name=document.createElement("p");
    Pro_name.textContent=el.productName;
    Pro_name.setAttribute("class","Pro_Name")

    let Reviews=document.createElement("p");
    Reviews.textContent=el.reviews;

    let Price=document.createElement("p");
    Price.textContent="MRP"+" : "+"Rs"+(+(el.price));

    let View_btn=document.createElement("button")
    View_btn.innerText="Add to Bag"


    div.append(image,Pro_name,Reviews,Price,View_btn)

    container.append(div);
  })
}





