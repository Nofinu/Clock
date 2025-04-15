const date22 = new Date("April 22, 2025 12:00:00").getTime();
const dateNow = Date.now()
let milirestant = date22  - dateNow

let div = document.querySelector("div")

setInterval(()=>{
    milirestant-= 173
    div.innerText = milirestant
},113)

