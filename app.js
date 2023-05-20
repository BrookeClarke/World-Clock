function updateTime() {
    // London Date and Time
    let LondonElement = document.querySelector("#London");
    if (LondonElement) {
        LondonDateElement = LondonElement.querySelector(".date");
        LondonTimeElement = LondonElement.querySelector(".time");
        let LondonTime = moment().tz("Europe/London");
        LondonDateElement.innerHTML = LondonTime.format("dddd Do MMMM YYYY");
        LondonTimeElement.innerHTML = LondonTime.format("H:mm:ss[<small>] A [</small>]");
    }
    // Paris Date and Time
    let ParisElement = document.querySelector("#Paris");
    if (ParisElement) {
        ParisDateElement = ParisElement.querySelector(".date");
        ParisTimeElement = ParisElement.querySelector(".time");
        let ParisTime = moment().tz("Europe/Paris");
        ParisDateElement.innerHTML = ParisTime.format("dddd Do MMMM YYYY");
        ParisTimeElement.innerHTML = ParisTime.format("HH:mm:ss[<small>] A [</small>]");
    }
}
    
    function updateCity(event) {
        let cityTimeZone = event.target.value;
        let cityName = cityTimeZone.replace("_", " ").split("/")[1];
        let cityTime = moment().tz(cityTimeZone);
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML =
            `<div class="city">
        <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("dddd Do MMMM YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format("A")}</small>
    </div>
</div>`;
    }
updateTime();
setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);