const container=document.querySelector(".product_container");
const product_card=document.querySelector(".product_card");
const sortDropdown = document.getElementById('sort');

//Data for Men
let mensData=[
    {
        name:"Men  Round Neck T-shirt",
        category:"T-Shirts",	
        description:"DILLINGER Men Grey Printed Round Neck T Shirt,  DILLINGER, Tshirts, Topwear, Apparel, Apparel for Men, Buy DILLINGER Men Grey Printed Round Neck T Shirt Online in India, Buy Tshirts at best price	100% cotton",	
        img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6609398/2019/1/30/9e5ac30f-08c4-4fd2-8546-d758d1b5c1f41548843950865-DILLINGER-Men-Grey-Printed-Round-Neck-T-shirt-71015488439477-1.jpg",	
        price:329,
        color:"grey",
        gender:"Men",
        neck:"Round",
        brand:"DILLINGER",
        fabric:"100% cotton",
        discount:38,
        xtraImg:"https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/6609398/2019/1/30/47551e03-18cc-4755-bdbb-5c501447ecbd1548843950822-DILLINGER-Men-Grey-Printed-Round-Neck-T-shirt-71015488439477-4.jpg",
        },
        {
            name:"Men Polo Collar T-shirt",
            category:"T-Shirts",	
            description:"U.S. Polo Assn. Men Orange Solid Polo Collar T Shirt,  U.S. Polo Assn., Tshirts, Topwear, Apparel, Apparel for Men, Buy U.S. Polo Assn. Men Orange Solid Polo Collar T Shirt Online in India, Buy Tshirts at best price 100% cotton",
            img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2365526/2018/2/9/11518169271894-US-Polo-Assn-Orange-Solid-Polo-T-shirt-4301518169271743-1.jpg",
            price:1499,
            color:"Orange",
            gender:"Men",
            neck:"Collar",
            brand:"U.S. Polo Assn.",
            fabric:"100% cotton",
            discount:20,
            xtraImg:"https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2365526/2018/2/9/11518169271821-US-Polo-Assn-Orange-Solid-Polo-T-shirt-4301518169271743-5.jpg"

            },
            {
                name:"Polo T-Shirt",
                category:"T-Shirts",
                description:"Peach Polo T Shirt,  ADIDAS, Tshirts, Topwear, Apparel, Apparel for Men, Buy Peach Polo T Shirt Online in India, Buy Tshirts at best price",
                img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2018/11/24/68dcdb22-5675-4f13-9061-74a7dc78fa6d1543038800613-1.jpg",			
                price:1049,
                color:"Peach",
                gender:"Men",
                neck:"Collar",
                brand:"ADIDAS",
                fabric:"cotton",
                discount:35,
                xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"
                },
            {               
                name:" White Round Neck T-shirt",
                category:"T-Shirts",
                description: "Roadster Men White Printed Round Neck T Shirt,  Roadster, Tshirts, Topwear, Apparel, Apparel for Men, Buy Roadster Men White Printed Round Neck T Shirt Online in India,Buy Tshirts at best price Cotton ",
                img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1824369/2017/5/5/11493980166188-Roadster-Men-White-Printed-Round-Neck-T-shirt-4411493980165893-1.jpg",
                price:419,
                color:"White",
                gender:"Men",
                neck:"Round",
                brand:"Roadster",
                fabric:"cotton",
                discount:18,
                xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"



            },
            {               
                name:"Grey Henley Neck T-shirt",
                category:"T-Shirts",
                description: "Roadster Men Navy Solid Henley Neck T Shirt,  Roadster, Tshirts, Topwear, Apparel, Apparel for Men, Buy Roadster Men Navy Solid Henley Neck T Shirt Online in India, Buy Tshirts at best price ",
                img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/1996756/2018/11/12/df35e7e7-4619-4e78-b64f-c9653f89f2211542017043272-Roadster-Men-Navy-Solid-Henley-Neck-T-shirt-5611542017043106-1.jpg",
                price:249,
                color:"grey",
                gender:"Men",
                neck:"Henley",
                brand:"Roadster",
                fabric:"60% cotton, 40% polyester",
                discount:5,
                xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"


            },
{            name:"Men Blue Polo T-shirt",
             category:"T-Shirts",
             description: "U.S. Polo Assn. Men Blue Printed Polo Collar T Shirt,  U.S. Polo Assn., Tshirts, Topwear, Apparel, Apparel for Men, Buy U.S. Polo Assn. Men Blue Printed Polo Collar T Shirt Online in India, Buy Tshirts at best price",
             price:1379,
             img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7024714/2018/10/4/70a85b8a-43fd-4508-a242-26f8cf29913e1538650772941-US-Polo-Assn-Men-Blue-Printed-Polo-Collar-T-shirt-2671538650-1.jpg",
                color:"Blue",
                gender:"Men",
                neck:"Collar",
                brand:"U.S. Polo Assn.",
                fabric:"100% cotton",
                discount:10,
                xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

},
{
    name:"Jeans Men White T-shirt",
    category:"T-Shirts",
    description: "Calvin Klein Jeans Men White Printed Round Neck T Shirt,  Calvin Klein Jeans, Tshirts, Topwear, Apparel, Apparel for Men, Buy Calvin Klein Jeans Men White Printed Round Neck T Shirt Online in India, Buy Tshirts at best price",
             price:2449,
             img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7766756/2018/11/28/fcacc652-f449-476f-89c0-1450d17ffc9c1543388471585-Calvin-Klein-Jeans-Men-Tshirts-5621543388470189-1.jpg",
                color:"White",
                gender:"Men",
                neck:"Round",
                brand:"U.S. Polo Assn.",
                fabric:"100% cotton",
                discount:12,
                xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

},
{
    name:"Allen Solly Solid T-shirt",
    category:"T-Shirts",
    description:"Allen Solly Sea Green Collar Neck  Polo T Shirt,  ADIDAS, Tshirts,",
    price:1234,
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7812367/2018/12/8/5c8940d1-cb9a-44a1-ad5b-267186b7f7081544259175329-Allen-Solly-Men-Teal-Solid-Polo-Collar-T-shirt-3631544259174-1.jpg",
    color:"Green",
    gender:"Men",
    neck:"Collar",
    brand:"Allen Solly",
    fabric:"100% polyester",
    discount:15,
    xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

},
{
    name:"Lacoste Blue T-shirt",
    category:"T-Shirts",
    description:"Lacoste Men Blue Printed Round Neck T-shirt 100% Cotton",
    price:4300,
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/productimage/2019/1/22/b3c8495b-a6db-41fc-9a64-5f3c568352001548130390356-1.jpg",

    color:"Blue",
    gender:"Men",
    neck:"Round",
    brand:"Lacoste",
    fabric:"100% Cotton",
    discount:5,
    xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"


},
{
    name:"Levis Striped T-shirt",
    category:"T-Shirts",
    description:"Levis Men Orange Striped Round Neck T-shirt 70% Cotton 30% Mix-blend",
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6841037/2018/8/28/b3fe90a4-7613-4d72-9045-b6d042328ede1535448696890-Levis-Men-Rust-Striped-Round-Neck-T-shirt-5571535448696713-1.jpg",
    price:4999,
    color:"Orange",
    gender:"Men",
    neck:"Round",
    brand:"Levis",
    fabric:"70% Cotton 30% Mix-blend",
    discount:14,
    xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"


},

{
    name:"Peter England Men Formal Shirt",
    category:"Shirts",
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2481947/2018/2/26/11519650028346-Peter-England-Men-Green-Regular-Fit-Self-Design-Formal-Shirt-5391519650028136-1.jpg",
    price:999,
    color:"Green",
    gender:"Men",
    brand:"Peter England",
    fabric:"70% Cotton 30% Mix-blend",
    discount:40,
    neck:"Collar",
    description:"Peter England Men Shirt Tailored Fit Self Design Formal Shirt",
    xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

},
{
    name:"Peter England Men Purple Shirt",
    category:"Shirts",
    img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/2481823/2018/6/27/7bc59ee0-e79c-4205-8473-159f50b37eff1530099540110-Peter-England-Men-Shirts-1831530099539931-1.jpg",
    price:1099,
    color:"Purple",
    gender:"Men",
    brand:"Peter England",
    fabric:"70% Cotton 30% Mix-blend",
    discount:16,
    neck:"Collar",
    description:"Peter England Men Purple Shirt Self Design Formal Shirt,  Louis Philippe,formal-shirts",
    xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"


},

{
  name:"Canary London Men Peach Shirt",
  category:"Shirts",
  img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6943782/2018/7/13/a6982d2f-62fd-4762-a93b-8d5e501b153e1531476601539-a-6161531476601280-1.jpg",
  price:824,
  color:"Peach",
  gender:"Men",
  brand:"Canary London",
  fabric:"Cotton",
  discount:10,
  neck:"Collar",
  description:"Canary London Men Peach Coloured & Blue Regular Fit Checked Formal Shirt",
  xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

},
{
  name:"Louis Philippe Men Grey Shirt",
  category:"Shirts",

  img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/8294445/2019/2/1/ca80dd19-cc2a-48fe-9334-705e409ac91d1549024987575-Louis-Philippe-Men-Grey-Slim-Fit-Printed-Formal-Shirt-365154-1.jpg",
  price:2199, 
  color:"grey",
  gender:"Men",
  brand:"Louis Philippe",
  fabric:"Cotton",
  discount:13,
  neck:"Collar",
  description:"Louis Philippe Men Grey Slim Fit Self Design Formal Shirt,  Louis Philippe,formal-shirts",
  xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"



},{
  name:" U.S. Polo Assn. Solid Shirt",
  img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7017594/2018/10/6/90ba12a0-96ed-4f67-8465-4062165286c21538805269416-US-Polo-Assn-Men-Grey-Slim-Fit-Self-Design-Casual-Shirt-6415-1.jpg",
  category:"Shirts",

  price:1259, 
  color:"grey",
  gender:"Men",
  brand:"U.S. Polo Assn.",
  fabric:"Cotton",
  discount:27,
  neck:"Collar",
  description:"U.S. Polo Assn. Men Grey Slim Fit Solid Formal Shirt,  U.S. Polo Assn., Shirts, Topwear, Apparel, ",
  xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

},
{
  name:"Allen Solly Printed Shirt",
  price:1259, 
  category:"Shirts",

  color:"grey",
  gender:"Blue",
  brand:"Allen Solly",
  fabric:"Cotton",
  discount:15,
  neck:"Collar",
  description:"Allen Solly Men Navy Blue & Turquoise Blue Slim Fit Printed Casual Shirt",
  img_url:"https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/6598421/2018/5/31/28dd5425-61a0-41f2-8121-8f967a0441e61527749762763-a-3401527749762598-1.jpg",
                xtraImg:"https://img1.cgtrader.com/items/90545/c839443ba4/rigged-dummy-man-3d-model-rigged-max.jpg"

}
 ]
let data=[...mensData]
mensData.forEach((val)=>{
  const card=document.createElement("div");
  const image=document.createElement("img");
  const brand=document.createElement("p");
  const name=document.createElement("p");
  const priceDiv=document.createElement("div");
  const price=document.createElement("span");
  const strikePrice=document.createElement("span");
  const discount=document.createElement("span");
  const AddToCart=document.createElement("button");

  image.addEventListener("click",function(){
    setDetails(val);
  })
  name.addEventListener("click",function(){
    setDetails(val);
  })


  const btnDiv=document.createElement("div");
  btnDiv.classList.add("hiddenDiv");
  image.classList.add("prod_img");
  AddToCart.textContent="Add To Cart";
  AddToCart.classList.add("btns");
  AddToCart.addEventListener("click",function(){
    addingToCart(val,this);
    displayCartTotal();
  })
  btnDiv.append(AddToCart);
  card.setAttribute("class", "product_card");
  image.setAttribute("src",val.img_url);
  name.textContent=val.name;
  price.textContent=`₹ ${val.price}`;
  brand.textContent=val.brand;
  strikePrice.textContent=`₹ ${Math.round(val.price + val.price*(val.discount/100))}`;
  discount.textContent=`(${val.discount} % OFF)`;
  
  priceDiv.append(price,strikePrice,discount);
  card.append(image,btnDiv,brand,name,priceDiv);

  container.append(card);
 
  filterColor(val,container,card);
  filterCollar(val,container,card);
  filterBrand(val,container,card);
  filterCategory(val,container,card);
  
  // displayCartTotal();

});
function ckChange(ckType) {
                var checkboxes = document.querySelectorAll('[name="color"]');
                
                checkboxes.forEach(function (checkbox) {
                  if (!ckType.checked) {
                    checkbox.disabled = false;
                  } else {
                    if (!checkbox.checked) {
                      checkbox.disabled = true;
                    } else {
                      checkbox.disabled = false;
                    }
                  }
                 }
               
)};
function ckCollar(ckType) {
var checkboxes = document.querySelectorAll('[name="collar"]');
checkboxes.forEach(function (checkbox) {
if (!ckType.checked) {
  checkbox.disabled = false;
                  } else {
                    if (!checkbox.checked) {
                      checkbox.disabled = true;
                    } else {
                      checkbox.disabled = false;
                    }
                  }
                 }
               
)};
function ckBrand(ckType) {
    var checkboxes = document.querySelectorAll('[name="brand"]');
    checkboxes.forEach(function (checkbox) {
    if (!ckType.checked) {
      checkbox.disabled = false;
                      } else {
                        if (!checkbox.checked) {
                          checkbox.disabled = true;
                        } else {
                          checkbox.disabled = false;
                        }
                      }
                     }
                   
)};  
function ckCategories(ckType) {
        let checkboxes = document.querySelectorAll('[name="categories"]');
        checkboxes.forEach(function (checkbox) {
        if (!ckType.checked) {
          checkbox.disabled = false;
                          } else {
                            if (!checkbox.checked) {
                              checkbox.disabled = true;
                            } else {
                              checkbox.disabled = false;
                            }
                          }
                         }
                       
)};       
           
const count=document.getElementById('count_of_items');
count.textContent=`${mensData.length} items`;

const menu =document.querySelector(".ham");

menu.addEventListener("click",function() {
  const functionality=document.querySelector(".functionality");
  functionality.classList.toggle("hamFilter");
})
function setDetails(a){
localStorage.setItem("details",JSON.stringify(a));
window.location.assign("../product_details/details.html");
}


function filterColor(val,container,card){
    const checkBoxClr=document.querySelectorAll(".checkbox"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;

        if(checkbox.checked && selectedColor.toLowerCase()==val.color.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);

        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}
function filterCollar(val,container,card){
    const checkBoxClr=document.querySelectorAll(".collarChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;
        if(checkbox.checked && selectedColor.toLowerCase()==val.neck.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}
function filterBrand(val,container,card){
    const checkBoxClr=document.querySelectorAll(".brandChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;

        if(checkbox.checked && selectedColor.toLowerCase()==val.brand.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);
        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}
function filterCategory(val,container,card){
    const checkBoxClr=document.querySelectorAll(".categoriesChk"); 
        let selectedColor="all";       
        checkBoxClr.forEach(checkbox => {
        checkbox.addEventListener('change', function(){
        selectedColor=checkbox.value;
        if(checkbox.checked && selectedColor.toLowerCase()==val.category.toLowerCase()){
          container.append(card);
        }
        else if(!checkbox.checked){
            console.log("Please select a color");
            container.append(card);

        }
        else {
            container.removeChild(card);
        }
         console.log(selectedColor)
        });

        });
}

function sortByBetterDiscount(a, b) {
  return b.discount - a.discount;
}
function sortByHighToLow(a, b) {
  return b.price - a.price;
}
function sortByLowToHigh(a, b) {
  return a.price - b.price;
}

sortDropdown.addEventListener('change', function displaySortedProducts() {
  const container=document.querySelector(".product_container");

  const sort = document.getElementById('sort');
  const sortValue = sort.value;

  if (sortValue.toLowerCase() === 'discount') {
   mensData.sort(sortByBetterDiscount);
  } else if (sortValue.toLowerCase() === 'high'){
    mensData.sort(sortByHighToLow);
  }else if(sortValue.toLowerCase() === 'low'){
      mensData.sort(sortByLowToHigh);
  }
  else{
     mensData=[...data]; 
  }
  container.innerHTML="";
  mensData.forEach((val)=>{
    const card=document.createElement("div");
    const image=document.createElement("img");
    const brand=document.createElement("p");
    const name=document.createElement("p");
    const priceDiv=document.createElement("div");
    const price=document.createElement("span");
    const strikePrice=document.createElement("span");
    const discount=document.createElement("span");
    const AddToCart=document.createElement("button");

    const btnDiv=document.createElement("div");
    btnDiv.classList.add("hiddenDiv");
    image.classList.add("prod_img");

    AddToCart.textContent="Add To Cart";
    AddToCart.classList.add("btns");
    btnDiv.append(AddToCart);
    card.setAttribute("class", "product_card");
    image.setAttribute("src",val.img_url);
    name.textContent=val.name;
    price.textContent=`₹ ${val.price}`;
    brand.textContent=val.brand;
    strikePrice.textContent=`₹ ${Math.round(val.price + val.price*(val.discount/100))}`;
    discount.textContent=`(${val.discount} % OFF)`;
    
    priceDiv.append(price,strikePrice,discount);
    card.append(image,btnDiv,brand,name,priceDiv);

    container.append(card);
   
    filterColor(val,container,card);
    filterCollar(val,container,card);
    filterBrand(val,container,card);
    filterCategory(val,container,card);

});
});


let items = JSON.parse(localStorage.getItem("cartData")) || [];
function addingToCart(val,a){
  const existingItem = items.find(item => item.name === val.name);
 if (existingItem) {
  existingItem.quantity = (existingItem.quantity || 1) + 1;
 }
 else {
  const currFav = {
    image: val.img_url,
    name: val.name,
    price: val.price,
    descriptions: val.description,
    fabric: val.fabric,
    discount: val.discount,
    brand: val.brand,
    color: val.color,
    category: val.category,
    gender: val.gender,
    discription: val.discription,
    strikedOffPrice:Math.round(val.price + val.price*(val.discount/100)), 
    quantity: 1, 
  };
  
  items.push(currFav);

}
       

        a.classList.add("added");
   localStorage.setItem("cartData", JSON.stringify(items));
}
displayCartTotal();
function displayCartTotal() {
  localStorage.setItem("cartTotalBag", JSON.stringify(items.length));
  var addressTotalObj = JSON.parse(localStorage.getItem("cartTotalBag"));
  var cartCurrentItemShow = document.getElementById("cartCurrentItemShow");
  if (addressTotalObj > 0) {
    cartCurrentItemShow.setAttribute("class", "desktop-badge desktop-melon");
    document.getElementById("cartCurrentItemShow").innerText = addressTotalObj;

    localStorage.setItem("cartTotalBag", JSON.stringify(addressTotalObj));
  }
}

