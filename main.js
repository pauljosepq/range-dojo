class Range {
    
    constructor(range){
        this.range = range
        let start = trimmedString.slice(1, this.range.indexOf(','))
        let end = trimmedString.slice(this.range.indexOf(',') + 1, -1)
        let trimmedString = range.trim()
    }

    parse()

    parse(){
        if(this.range[0] == '('){
            start += 1
        }

        if(this.range.slice(-1) == ')'){
            start -= 1
        }
    }

    validation(){
        if () {
            
        }
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

    Equals(arr){
        return JSON.stringify(arr) === JSON.stringify(this.range)
    }
}


module.exports = {
    Range
}