class Building {
    constructor(name) {
        this.name = name
    }
    getName = () => {
        return this.name
    }
    setName = (name) => {
        this.name = name
    }
}
// with catching
// module.exports = new Building('House') 
module.exports=Building