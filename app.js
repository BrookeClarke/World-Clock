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
    // Madrid Date and Time
    let SpainElement = document.querySelector("#Spain");
    if (SpainElement) {
        SpainDateElement = SpainElement.querySelector(".date");
        SpainTimeElement = SpainElement.querySelector(".time");
        let SpainTime = moment().tz("Europe/Madrid");
        SpainDateElement.innerHTML = SpainTime.format("dddd Do MMMM YYYY");
        SpainTimeElement.innerHTML = SpainTime.format("HH:mm:ss[<small>] A [</small>]");
    }
    // Cairo Date and Time
    let CairoElement = document.querySelector("#Cairo");
    if (CairoElement) {
        CairoDateElement = CairoElement.querySelector(".date");
        CairoTimeElement = CairoElement.querySelector(".time");
        let CairoTime = moment().tz("Africa/Cairo");
        CairoDateElement.innerHTML = CairoTime.format("dddd Do MMMM YYYY");
        CairoTimeElement.innerHTML = CairoTime.format("HH:mm:ss[<small>] A [</small>]");
    }
    // New York Date and Time
    let NewYorkElement = document.querySelector("#New_York");
    if (NewYorkElement) {
        NewYorkDateElement = NewYorkElement.querySelector(".date");
        NewYorkTimeElement = NewYorkElement.querySelector(".time");
        let NewYorkTime = moment().tz("America/New_York");
        NewYorkDateElement.innerHTML = NewYorkTime.format("dddd Do MMMM YYYY");
        NewYorkTimeElement.innerHTML = NewYorkTime.format("HH:mm:ss[<small>] A [</small>]");
    }
}



    // Cities change when the select is used
    function updateCity(event) {
        let cityTimeZone = event.target.value;
        if (cityTimeZone === "current") {
            cityTimeZone = moment.tz.guess();
        }
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
</div>
<a href="index.html"> All Cities </a>`;
    }
updateTime();
setInterval(updateTime, 1000);

    let citiesSelectElement = document.querySelector("#city");
    citiesSelectElement.addEventListener("change", updateCity);