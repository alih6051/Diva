


const Skin_product=async() =>{
    try{
        let res=await fetch(`http://localhost:3000/skincare`);
          
        let data=await res.json();
        console.log(data)
       
        createBtn(data.length,12)
      
    }
    catch(error){
        console.log("Product not found")
    }
}
 

const Paginate_Skin_product=async(clicked_button,limit) =>{
  try{
      let res=await fetch(`http://localhost:3000/skincare?_page=${clicked_button}&_limit=${limit}`);
        
      let data=await res.json();
      console.log(data)
      appendProducts(data)
      
    
  }
  catch(error){
      console.log("Product not found")
  }
}

Skin_product()

Paginate_Skin_product(1,12)

let buttons_div=document.getElementById("footer_btn");

const createBtn=(total_images,images_per_page)=>{
  const buttons=Math.ceil(total_images/images_per_page);

  for(let i=1;i<=buttons;i++){
    let Btn=document.createElement("button");
    Btn.setAttribute("class","FooterBtn")

    Btn.innerText=i;

    Btn.onclick=()=>{
      Paginate_Skin_product(i,12)
    }
    buttons_div.append(Btn)
  }
}



let container=document.getElementById("Products")
const appendProducts=(data)=>{
  container.innerHTML=null;

  

  data.forEach((el)=>{
    let div=document.createElement("div");
    div.setAttribute("class","SkinProduct")

    let div_Image=document.createElement("div");
    div_Image.setAttribute("class","div_img")
    let image=document.createElement("img");
    image.src=el.image;
    div_Image.append(image)

    let div_mid=document.createElement("div");
    div_mid.setAttribute("class","div_mid")
    let Pro_name=document.createElement("p");
    Pro_name.textContent=el.productName;
    Pro_name.setAttribute("class","Pro_Name")

    // let Reviews=document.createElement("p");
    // Reviews.textContent=el.reviews;

    let Price=document.createElement("p");
    Price.textContent="MRP"+" : "+ "Rs"+" " +(+(el.price));

    div_mid.append(Pro_name,Price)

    let div_View_btn=document.createElement("div");
    div_View_btn.setAttribute("class","div_View_btn")


    let View_btn=document.createElement("button")
    View_btn.innerText="Add to Bag"
    View_btn.setAttribute("class","View_Btn")
    
    View_btn.addEventListener("click",function(){
    console.log("HI");
    })
     
    div_View_btn.append(View_btn)

    div.append(div_Image,div_mid,div_View_btn)

    container.append(div);
  })
}




