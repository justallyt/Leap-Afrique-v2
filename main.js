const header = document.querySelector("header")
const i_moja = document.querySelectorAll(".navTrigger i")
const trigger_btn = document.querySelector(".navTrigger")
const navbar = document.querySelector("nav")
const landing_content = document.querySelector(".landing-content")

window.addEventListener("scroll", ()=>{
    if(window.scrollY > 100){
        header.classList.add("onscroll")
        landing_content.style.paddingTop = "100px"
    }else{
        header.classList.remove("onscroll")

        landing_content.style.paddingTop = "0px"
    }
})

trigger_btn.addEventListener("click", ()=>{
    trigger_btn.classList.toggle("active")
    navbar.classList.toggle("show")
    if(window.innerWidth < 860){
        header.classList.toggle("whiten")
    }
})
