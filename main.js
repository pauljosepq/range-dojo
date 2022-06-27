class Range {
    
    constructor(range){
        this.range = range
        let start = parseInt(trimmedString.slice(1, this.range.indexOf(',')))
        let end = parseInt(trimmedString.slice(this.range.indexOf(',') + 1, -1))
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

    isCorrect(){
        if (start > end) {
            throw new Error('The end is greater than the beginning')
        }

        if (!Number.isInteger(start) || !Number.isInteger(end)){
            throw new Error('A non-integer value was given')
        }

        return true
    }

    containsRange(s, e){
        
        
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