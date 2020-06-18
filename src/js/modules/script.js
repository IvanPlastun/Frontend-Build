// test code
const sum = (a, b) => {
    return a + b
}

const result = sum(5, 10)
console.log(result)

class User {

    constructor(name) {
        this.name = name
    }

    getName() {
        return this.name
    }

    nameContains(str) {
        return this.getName().includes(str)
    }
}

class ContentWriter extends User {
    constructor(name, posts) {
        super(name)
        this.posts = posts
    }
}

const writer = new ContentWriter("John Smith", ["Leaning frontend build"])
console.log(writer.getName())
console.log(writer.posts)