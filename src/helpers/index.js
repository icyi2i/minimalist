import { relativeTime } from "human-date"
const trim = (string, len) => {
    return (string.length > len) ? string.slice(0, len) + "..." : string
}

const humanizeDate = (date) => {
    let dt = new Date(date)
    return relativeTime(dt)
}

const removeItem = (list, n) => [...list.slice(0, n), ...list.slice(n+1)]

const helpers = {
    trim : trim,
    humanizeDate : humanizeDate,
    removeItem : removeItem,
}

export default helpers
