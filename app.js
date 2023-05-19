setInterval(function () {
    // London Date and Time
    let LondonElement = document.querySelector("#London");
    LondonDateElement = LondonElement.querySelector(".date");
    LondonDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
    LondonTimeElement = LondonElement.querySelector(".time");
    let LondonTime = moment().tz("Europe/London");
    LondonTimeElement.innerHTML = LondonTime.format("H:mm:ss[<small>] A [</small>]");
    
    // Paris Date and Time
    let ParisElement = document.querySelector("#Paris");
    ParisDateElement = ParisElement.querySelector(".date");
    ParisDateElement.innerHTML = moment().format("dddd Do MMMM YYYY");
    ParisTimeElement = ParisElement.querySelector(".time");
    let ParisTime = moment().tz("Europe/Paris");
    ParisTimeElement.innerHTML = ParisTime.format("H:mm:ss[<small>] A [</small>]");
}, 1000);