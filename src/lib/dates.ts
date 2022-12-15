const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsShort = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];
const monthsLong = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

function ordinalSuffix(num: number): string {
    if (num == 1 || num == 21 || num == 31) {
        return `${num}st`;
    } else if (num == 2 || num == 22) {
        return `${num}nd`;
    } else if (num == 3 || num == 23) {
        return `${num}rd`;
    } else {
        return `${num}th`;
    }
}

export function dateFormatShort(date: Date): string {
    const weekday = days[date.getDay()];
    const day = ordinalSuffix(date.getDate());
    const month = monthsShort[date.getMonth()];
    return `${weekday} ${day} ${month}`;
}

export function dateFormatLong(date: Date): string {
    const weekday = days[date.getDay()];
    const day = ordinalSuffix(date.getDate());
    const month = monthsLong[date.getMonth()];
    const year = date.getFullYear()
    return `${weekday} ${day} ${month} ${year}`;
}