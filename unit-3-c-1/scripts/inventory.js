let datals = JSON.parse(localStorage.getItem("products"))||[];
display(datals)
function display(datals){
    datals.forEach(function(el,ind){
let div = document.createElement("div")

let image= document.createElement("img")
image.setAttribute("src",el.image);

let type = document.createElement("p");
type.innerText = el.type;

let price = document.createElement("p");
price.innerText = el.price;

let desc = document.createElement("h2");
desc.innerText=el.desc;

let remove = document.createElement("button")
remove.innerText="Remove Products";
remove.id="remove_product";
remove.style.backgroundColor="red";
remove.addEventListener("click",function(){
    removefun(el,ind);
})
div.append(image,type,price,desc,remove);
document.querySelector("#all_products").append(div);
    });
    function removefun(el,ind){
        let removedata = datals.splice(ind,1)
        localStorage.setItem("products",JSON.stringify(datals));
        window.location.reload()
    }
    document.querySelector("#add_more_product").addEventListener("click",menufun)
    function menufun(){
        window.location.href="index.html"
    }
        
    }
