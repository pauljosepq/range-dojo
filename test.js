const { Range } = require('./main')
const range = [2, 3, 4, 5]
const r = new Range(range)


test('Integer range contains', ()=>{
    const arr = [2, 3, 4]
    expect(r.contains(arr)).toBeTruthy()
})

test('Integer range not contains', () => {
    const arr = [-1, 1, 6, 10]
    expect(r.contains(arr)).toBeFalsy()
})

test('get all points', () => {
    
    expect(r.getAllPoints()).toBe(range)
})

test('get end points', () => {
    
    expect(r.getEndPoints()).toStrictEqual([2, 5])
})

test('get end points', () => {
    const r2 = new Range([2, 3, 4 , 5, 6])
    expect(r.getEndPoints()).toStrictEqual([2, 6])
})

test('get end points', () => {
    const r3 = new Range([3, 4 , 5])
    expect(r.getEndPoints()).toStrictEqual([3, 5])
})

test('get end points', () => {
    const r4 = new Range([3, 4 , 5, 6])
    expect(r.getEndPoints()).toStrictEqual([3, 6])
})