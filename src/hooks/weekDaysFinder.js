import {isTuesday, isMonday, isWednesday, isThursday, isFriday, isSaturday, isSunday, addDays, format} from "date-fns"


export const  WeekDaysFinder =() => {
    try {
        let today = new Date()
        let startDay
        switch (today) {
            case isMonday(today):
                startDay = 0
                break
            case isTuesday(today):
                startDay = -1
                break;

            case isWednesday(today):
                startDay = -2
                break
            case isThursday(today):
                startDay = -3
                break
            case isFriday(today):
                startDay = -4
                break
            case isSaturday(today):
                startDay = -5
                break
            case isSunday(today):
                startDay = -6
                break
            default:
                startDay = 0


        }

        const dayList = []


        for (let i = 0; i <= 6; i++) {
            dayList.push({
                day: format(new Date(addDays(new Date(), startDay + i)), 'iii'),
                date: format(new Date(addDays(new Date(), startDay + i)), 'PP')
            })
        }
        return dayList
    } catch (e) {
        console.log('error occurred ', e.message)
        return []

    }


}


export const dayFinder = ()=>{

    return {
        day: format(new Date(), 'iii'),
        date: format(new Date(), 'PP')
    }
}




