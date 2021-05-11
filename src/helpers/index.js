const trim = (string, len) => {
    return (string.length > len) ? string.slice(0, len) + "..." : string
}

const helpers = {
    trim : trim
}

export default helpers
