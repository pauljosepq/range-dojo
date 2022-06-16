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