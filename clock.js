setInterval(() => {
    d= new Date();
    hour=d.getHours()*30;
    minute=d.getMinutes() * 6;
    second=d.getSeconds() * 6;

    document.getElementById("second").style.transform = "rotate(" +second + "deg)";
    document.getElementById("minute").style.transform = "rotate(" +minute + "deg)";
    document.getElementById("hour").style.transform = "rotate(" +hour + "deg)";
},1000);


