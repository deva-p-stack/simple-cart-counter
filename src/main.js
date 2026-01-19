import './style.css'

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
