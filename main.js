// Range Class
class Range {

    constructor(range){
        this.range = range
        this.trimmedString = this.range.replace(/ /g, '')
        this.start = parseInt(this.trimmedString.slice(1, this.range.indexOf(',')))
        this.end = parseInt(this.trimmedString.slice(this.range.indexOf(',') + 1, -1))
        this.parse()
        this.isCorrect()
    }

    parse(){
        if(this.range[0] == '('){
            this.start += 1
        }

        if(this.range.slice(-1) == ')'){
            this.end -= 1
        }
    }

    isCorrect(){
        if (this.trimmedString[0] !== '(' && this.trimmedString[0] !== '['){
            throw new Error('The beginning of the range must be ( or [')
        }

        if (this.trimmedString[this.trimmedString.length -1] !== ')' && this.trimmedString[this.trimmedString.length -1] !== ']'){
            throw new Error('The end of the range must be ) or ]')

        }
        
        if (Number.isNaN(this.start) || Number.isNaN(this.end)){
            throw new Error('A non-integer value was given')
        }

        if (this.start > this.end) {
            throw new Error('The beginning is greater than the end')
        }

    }

    contains(arr){
        let numbers = []
        let commas = arr.match(/,/g).length
        for (let i = 0; i <= commas; i++){
            arr.indexOf(',') === -1 ? numbers.push(parseInt(arr.slice(0, arr.indexOf(',')))) : numbers.push(parseInt(arr.slice(0, arr.length)))
            arr = arr.slice(arr.indexOf(',') + 1, arr.length)
        }
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] < this.start || numbers[i] > this.end) {
                return false
            }
        }

        return true
    }

    containsRange(s, e){
        if(this.start <= s && this.end >= e){
            return true
        }
        
        return false
    }

    getAllPoints (){
        return Array(this.end - this.start + 1).fill().map((v, i) => this.start + i)
    }

    getEndPoints(){
        let endPoints = [];
        endPoints.push(this.start)
        endPoints.push(this.end)
        return endPoints
    }

    equals(r){
        return this.start === r.start && this.end === r.end
    }
}


module.exports = {
    Range
}