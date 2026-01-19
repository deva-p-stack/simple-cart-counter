import './style.css'

let counte = 0; 

let addbtn = document.querySelectorAll('.addbtn');
let counters = document.querySelector('.counter');
let cart = document.querySelector('.cart');
let parent = document.querySelector(".parent");

addbtn.forEach((btn)=>{

btn.addEventListener("click",function(){

counte++;
counters.classList.remove("hidden")   
counters.textContent = counte;

let newdiv = document.createElement('div');
newdiv.className = " flex absolute  top-9.5 left-[-45px] px-2 text-xs mx-auto justify-center items-center py-2  w-full min-w-35 rounded-lg bg-gray-300";
newdiv.textContent = "product add to cart";
counters.append(newdiv);

   setTimeout(() => {
      newdiv.remove();
    }, 1000);

})
});

cart.addEventListener("click",function(){

    parent.classList.add("hidden");
    

})








let count = 0;

let add = document.querySelector('#add');
let sub = document.querySelector('#sub');
let reset = document.querySelector('#reset');
let counter = document.querySelector('#counter');


function updatevalue(){
    counter.textContent = count;

    if (count === 0){
        counter.classList.remove("text-green-500");
        counter.classList.add("text-red-500");
    }
    else{
        counter.classList.remove("text-red-500");
        counter.classList.add("text-green-500");
    }
}

add.addEventListener("click",function(){

count++;
updatevalue();

})

sub.addEventListener("click",function(){
if (count>0){
    count--;
    updatevalue();

}
})

reset.addEventListener("click",function(){
    
     counter.textContent = "0";
})































