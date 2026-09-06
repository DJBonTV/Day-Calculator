function DateCal() {
    const solution = document.getElementById("solution")
    const dayel = document.getElementById("day");
    const day = dayel.value;
    const monthel = document.getElementById("month");
    const month = monthel.value;
    const yearel = document.getElementById("year");
    const year = yearel.value;
    var leapyear = 0;
    if (month === "January" || month === "February") {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            leapyear = 1;
        }
    }

    var centcode = year.slice(0,2)
    var centval = 0;
    if (centcode === "17") {
        centval = 4;
    } else if (centcode === "18") {
        centval = 2;
    } else if (centcode === "19") {
        centval = 0;
    } else if (centcode === "20") {
        centval = 6;
    }

    var yearcode = parseInt(year.slice(2,4));
    var yearcal = (yearcode + (yearcode / 4));
    var yearval = parseInt(yearcal.toString().split(".")[0]) % 7;
    
    var monthval = 0;
    if (month === "May") {
        monthval = 1;
    } else if (month === "August") {
        monthval = 2;
    } else if (month === "February" || month === "March" || month === "November") {
        monthval = 3;
    } else if (month === "June") {
        monthval = 4;
    } else if (month === "September" || month === "December") {
        monthval = 5;
    } else if (month === "July") {
        monthval = 6;
    }

    //final formula
    var finalval = (yearval + monthval + centval + parseInt(day) - leapyear) % 7;
    const week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    console.log(leapyear)
    solution.innerHTML = week[finalval]
    solution.classList.remove("hidden")
}