const date22 = new Date("February 23, 2027 12:00:00").getTime();
const dateNow = Date.now()
let milirestant = date22  - dateNow

let div = document.querySelector("div")

setInterval(()=>{
    milirestant-=1000
    convertMsToTime(milirestant) 
},1000)


function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function convertMsToTime(milliseconds) {
    console.log(milliseconds);
    
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);

    seconds = seconds % 60;
    minutes = minutes % 60;
    div.innerText = `${hours}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`
}
