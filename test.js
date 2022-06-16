const { Range } = require('./main')
const range = [2, 3, 4, 5]
const r = new Range(range)


test('Integer range contains', ()=>{
    const arr = [2, 4]
    expect(r.contains(arr)).toBeTruthy()
})

test('Integer range not contains', () => {
    const arr = [-1, 1, 6, 10]
    expect(r.contains(arr)).toBeFalsy()
})

test('Range not contains [7, 9]', () => {
    const arr = [7, 8, 9]
    expect(r.contains(arr)).toBeFalsy()
})

test('Range not contains [3, 9]', () => {
    const arr = [3, 4, 5, 6 ,7 ,8, 9]
    expect(r.contains(arr)).toBeFalsy()
})

test('Range not contains [2, 9]', () => {
    const r1 = new Range([3, 4])
    const arr = [2, 3, 4, 5, 6, 7, 8, 9]
    expect(r1.contains(arr)).toBeFalsy()
})

test('Range contains [3, 5]', () => {
    const ran = new Range([3, 4, 5])
    const arr = [3, 4, 5]
    expect(ran.contains(arr)).toBeTruthy()
})

test('Range contains [3, 4]', () => {
    const rang = new Range([2, 3, 4, 5, 6, 7, 8, 9])
    const arr = [3, 4]
    expect(rang.contains(arr)).toBeTruthy()
})

test('get all points', () => {
    
    expect(r.getAllPoints()).toBe(range)
})

test('get end points [2,5]', () => {
    
    expect(r.getEndPoints()).toStrictEqual([2, 5])
})

test('get end points [2,6]', () => {
    const r2 = new Range([2, 3, 4 , 5, 6])
    expect(r2.getEndPoints()).toStrictEqual([2, 6])
})

test('get end points [3,5]', () => {
    const r3 = new Range([3, 4 , 5])
    expect(r3.getEndPoints()).toStrictEqual([3, 5])
})

test('get end points [3,6]', () => {
    const r4 = new Range([3, 4 , 5, 6])
    expect(r4.getEndPoints()).toStrictEqual([3, 6])
})

test('Equal [3,4]', () => {
    const ra = new Range([3, 4])
    const arr = [3, 4]
    expect(ra.Equals(arr)).toBeTruthy()
})

test('Not Equal [2, 9]', () => {
    const ra2 = new Range([2, 3, 4, 5, 6, 7, 8, 9])
    const arr = [3, 4]
    expect(ra2.Equals(arr)).toBeFalsy()
})

test('Not Equal [2,4]', () => {
    const ra3 = new Range([3, 4, 5, 6, 7, 8, 9])
    const arr = [2, 4, 5]
    expect(ra3.Equals(arr)).toBeFalsy()
})

test('Not Equal [3,4]', () => {
    const ra4 = new Range([2, 3, 4, 5, 6, 7, 8, 9])
    const arr = [3, 4]
    expect(ra4.Equals(arr)).toBeFalsy()
})