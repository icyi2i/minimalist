import { relativeTime } from "human-date"
const trim = (string, len) => {
    return (string.length > len) ? string.slice(0, len) + "..." : string
}

const humanizeDate = (date) => {
    let dt = new Date(date)
    return relativeTime(dt)
}

const helpers = {
    trim : trim,
    humanizeDate : humanizeDate,
}

export default helpers
