import clean from "del"

function cleanDist() {
    return clean(["./dist"])
}

export default cleanDist