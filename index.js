setInterval(()=>{
    a = new Date();
    hourr = a.getHours();
    min = a.getMinutes();
    sec = a.getSeconds();

    hourRotation = 30*hourr + min/2;
    minRotation = 6*min;
    secRotation = 6*sec;

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minRotation}deg)`;
    second.style.transform = `rotate(${secRotation}deg)`;
},1000)