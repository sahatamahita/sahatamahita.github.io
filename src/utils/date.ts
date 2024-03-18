export const getCurrentTimestamp = () => {
    return Math.round((new Date()).getTime() / 1000)
}

export const secondsToHourFormat = (timestamp: number): string => {
    if (timestamp < 0) {
        return "0";
    }

    let hours = `${Math.floor(timestamp/ 3600)}`;
    let minutes = `${Math.floor((timestamp % 3600) / 60)}`;
    let seconds = `${(timestamp % 60)}`;

    if (hours.length === 1) {
        hours = `0${hours}`;
    }

    if (minutes.length === 1) {
        minutes = `0${minutes}`;
    }

    if (seconds.length === 1) {
        seconds = `0${seconds}`;
    }

    hours = hours ? `${hours}:` : '';
    minutes = minutes ? `${minutes}:` : '';
    seconds = `${seconds}`;

    return `${hours}${minutes}${seconds}`;
}