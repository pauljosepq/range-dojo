const range = [2, 3, 4, 5]

class Range {
    
    contains(range, arr){
        for (let index = 0; index < arr.length; index++) {
            if (range.includes(arr[index])) {
                return true
            }else{
                return false
            }
        }
    }
}

module.exports = {
    Range,
    range
}