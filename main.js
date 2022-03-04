const header = document.querySelector("header")
const i_moja = document.querySelectorAll(".navTrigger i")
const trigger_btn = document.querySelector(".navTrigger")
const navbar = document.querySelector("nav")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
         header.classList.add("onscroll")
        
    }else{
        header.classList.remove("onscroll")
    }
})

trigger_btn.addEventListener("click", ()=>{
    trigger_btn.classList.toggle("active")
    navbar.classList.toggle("show")
    if(window.innerWidth < 860){
        header.classList.toggle("whiten")
    }
})
