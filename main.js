class Range {
    
    constructor(range){
        this.range = range
    }

    contains(arr){
        for (let index = 0; index < arr.length; index++) {
            if (!this.range.includes(arr[index])) return false
        }
        return true
    }

    getAllPoints (){
        return this.range
    }

    getEndPoints(){
        let endPoints = [];
        endPoints.push(this.range[0])
        endPoints.push(this.range.slice(-1).pop())
        return endPoints
    }
}


module.exports = {
    Range
}