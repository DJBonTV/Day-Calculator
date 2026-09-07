function DateVal() {
    const dayel = document.getElementById("day");
    const day = dayel.value;
    const monthel = document.getElementById("month");
    const month = monthel.value;
    const yearel = document.getElementById("year");
    const year = yearel.value;

    var valid = true
    if (month === "February") {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            if (day > 29) {
                valid = false
                dayel.classList.add("fault")
                solution.innerHTML = "Date is not real"
            }
        } else {
            if (day > 28) {
                valid = false
                dayel.classList.add("fault")
                solution.innerHTML = "Date is not real"
            }
        }
    }

    if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
        if (day > 31) {
            valid = false
            dayel.classList.add("fault")
            solution.innerHTML = "Date is not real"
        }
    } else if (month === "April" || month === "June" || month === "September" || month === "November") {
        if (day > 30) {
            valid = false
            dayel.classList.add("fault")
            solution.innerHTML = "Date is not real"
        }
    } else if (month !== "February") {
        valid = false
        monthel.classList.add("fault")
        solution.innerHTML = "Month not recognised"
    }

    if (year < 1582) {
        valid = false
        yearel.classList.add("fault")
        solution.innerHTML = "Year is before 1582, please use the Gregorian calendar"
    }

    if (valid) {
        DateCal(day, month, year)
        dayel.classList.remove("fault")
        monthel.classList.remove("fault")
        yearel.classList.remove("fault")
    } else {
        const solution = document.getElementById("solution")
        solution.classList.remove("hidden")
    }
}

function DateCal(day, month, year) {
    const solution = document.getElementById("solution")

    var leapyear = 0;
    if (month === "January" || month === "February") {
        if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
            leapyear = 1;
        }
    }

    var centcode = year.slice(0,2)
    var centval = 0;
    var centvals = [6, 4, 2, 0];
    centval = centvals[centcode % 4];

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
    solution.innerHTML = week[finalval]
    solution.classList.remove("hidden")
}

function HideDate() {
    const solution = document.getElementById("solution")
    solution.classList.add("hidden")
}