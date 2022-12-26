export const MONTHS_BY_NUMBER: {[key: number]: string} = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
}

export const getDate = (month: number, day: number, year: number) => new Date(`${MONTHS_BY_NUMBER[month]} ${day}, ${year} 00:00:00`); 
export const getUnixTime = (date: Date) => Math.floor(date.getTime() / 1000);