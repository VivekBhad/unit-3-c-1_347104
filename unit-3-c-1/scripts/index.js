//store the products array in localstorage as "products"
let form = document.querySelector("#products");
form.addEventListener("submit",submitfun);
function submitfun(){
    // event.preventDefult();

    let type = form.type.value;
    let desc = form.desc.value;
    let price = form.price.value;
    let image = form.image.value;

    // console.log(type,desc,price,image);
    let datacon =new contfun(type,desc,price,image)
    let data= JSON.parse(localStorage.getItem("data")) || []
    data.push(datacon)

    localStorage.setItem("products",JSON.stringify(data))
    console.log(data);
}
function  contfun (type,desc,parse,image){
    this.type=type;
    this.desc=desc;
    this.parse=parse;
    this.image=image;
}
document.querySelector("#show_products").addEventListener("click",showproductfun)
function showproductfun(){
    window.location.href="inventory.html";
}