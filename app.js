const clock = document.querySelector(".clock");
const date = document.querySelector(".date");

const time = function(){
    // Shows current date, time & GMT
    const now = new Date();
    
    // returns current date
    // return "Date: ", now.toDateString();
    const officialDate = now.toDateString();

    // return "Hours: ", now.getHours();
    const h = now.getHours();

    // How many minutes there are in the current time
    // return "Minutes: ", now.getMinutes();
    const m = now.getMinutes();


    // return "Get Seconds: ", now.getSeconds();
    const s = now.getSeconds();

    const d = `
    <span>${officialDate}</span>
    `;

    date.innerHTML = d;

    const html = `
     <span>${h}:</span>  
     <span>${m}:</span>  
     <span>${s}</span>
    `;

    // innerText shows the span tags on screen
    // innerHTML only shows h,m,s on screen
    clock.innerHTML = html;
}

// console.log(time());
// Call function every 0.1 seconds to update clock
setInterval(time, 500);

console.log(time());