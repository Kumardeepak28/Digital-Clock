const hour = document.querySelector(".time");
const minutes = document.querySelector(".tim");
const seconds = document.querySelector(".ti");
const shifts = document.querySelector("#ampm");

function time(){
    let timer = new Date();
    let shift = "PM";
    let hr  = timer.getHours();
    if(hr>=0 && hr<12){
        shift = "AM";
    }
    // console.log(hr);
    let mt = timer.getMinutes();
    // console.log(minutes);
    let sd = timer.getSeconds();
    // console.log(seconds);
    hour.innerText = hr;
    minutes.innerText = mt;
    seconds.innerText = sd;
    shifts.innerText = shift;
}
setInterval(time,1000);