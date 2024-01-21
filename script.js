const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navmenu");

hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
})

const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll",()=>{
    const currentScroll = window.pageYOffset;

    if(currentScroll<=0){
body.classList.remove("scroll-up")
    }
if(currentScroll>lastScroll && !body.classList.contains("scroll-down")){
    body.classList.add("scroll-down")
    body.classList.remove('scroll-up')
}

if(currentScroll<lastScroll && body.classList.contains("scroll-down")){
body.classList.remove("scroll-down");
body.classList.add("scroll-up")
}

    lastScroll=currentScroll;
})
