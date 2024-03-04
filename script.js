document.querySelector(".b1").addEventListener("click",()=>{
    let number = document.querySelector(".zero")
    let currentValue = parseInt(number.textContent)
    let newvalue = currentValue +1
    number.textContent = newvalue

})

document.querySelector(".b2").addEventListener("click",()=>{
    let number = document.querySelector(".zero")
    let currentValue = parseInt(number.textContent)
    let newvalue = currentValue -1
    number.textContent = newvalue
})
