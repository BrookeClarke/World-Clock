setInterval(function () {
    // London Date and Time
    let LondonElement = document.querySelector("#London");
    LondonDateElement = LondonElement.querySelector(".date");
    LondonTimeElement = LondonElement.querySelector(".time");
    let LondonTime = moment().tz("Europe/London");
    LondonDateElement.innerHTML = LondonTime.format("dddd Do MMMM YYYY");
    LondonTimeElement.innerHTML = LondonTime.format("H:mm:ss[<small>] A [</small>]");
    
    // Paris Date and Time
    let ParisElement = document.querySelector("#Paris");
    ParisDateElement = ParisElement.querySelector(".date");
    ParisTimeElement = ParisElement.querySelector(".time");
    let ParisTime = moment().tz("Europe/Paris");
    ParisDateElement.innerHTML = ParisTime.format("dddd Do MMMM YYYY");
    ParisTimeElement.innerHTML = ParisTime.format("HH:mm:ss[<small>] A [</small>]");
}, 1000);