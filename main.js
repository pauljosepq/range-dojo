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

    getEndPoint(){
        let endPoints = [];
        this.range[0]
    }
}


module.exports = {
    Range
}