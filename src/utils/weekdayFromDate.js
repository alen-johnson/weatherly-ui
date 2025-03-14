export const weekdayFromDate = (dateString) => {
    const date = new Date(dateString)
    const days = ["Sunday","Monday","Tueday","Wednesday","Thursday","Friday","Saturday"]
    return days[date.getDay()]
}

