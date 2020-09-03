//TODO: create a function called 'dayOfTheWeek' that stores the day of the week - using that value, pass it to a function called 'alarmChecker' that will tell you if the alarm is going to go off that day. 

const dayOfTheWeekChecker = (dayOfTheWeek) => {
    return dayOfTheWeek;
}

const alarmCheck = (dayOfTheWeek) => {
    dayOfTheWeek = dayOfTheWeekChecker(dayOfTheWeek)
    switch (dayOfTheWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Alarm")
            break;
        case "Saturday":
        case "Sunday":
            console.log("No alarm")
            break;
        default:
            console.log("I don't know what you mean.");
            break;
    }
}

function praiseTheLordForDolphinFridays() {
    console.log("Thank you for Dolphin Fridays")
}

function curseJamieOliver() {
    console.log("Damn you, Jamie Oliver.")
}

function dolphinDiners(dayOfTheWeek) {
    dayOfTheWeek = dayOfTheWeekChecker(dayOfTheWeek)
    if (dayOfTheWeek == "Friday") {
        praiseTheLordForDolphinFridays()
    }
    else {
        curseJamieOliver()
    }
}


let day = dayOfTheWeekChecker("Friday")
dolphinDiners(day)