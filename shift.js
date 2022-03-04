
const shift_btns = document.querySelectorAll(".services-shifts ul li")
const shift_containers = document.querySelectorAll(".service-moja-row")

const showActive = (index)=>{
    shift_btns.forEach((btn)=>{
        btn.classList.remove("active")
    })
    shift_btns[index].classList.add('active')

    shift_containers.forEach((container)=>{
        container.style.display = "none"
    })
    shift_containers[index].style.display = 'flex'
}

showActive(0)

for(let i = 0; i < shift_btns.length; i++){
    shift_btns[i].addEventListener("click", ()=>{
        showActive(i)
    })
}