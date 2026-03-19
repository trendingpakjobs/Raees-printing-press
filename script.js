// Menu toggle
document.getElementById("menu").onclick = () =>{
document.getElementById("nav").classList.toggle("active");
};

// Counter animation
document.querySelectorAll("[data-target]").forEach(counter=>{
let update = ()=>{
let target = +counter.getAttribute("data-target");
let count = +counter.innerText;
let inc = target / 50;

if(count < target){
counter.innerText = Math.ceil(count + inc);
setTimeout(update,20);
}else{
counter.innerText = target + "+";
}
}
update();
});
