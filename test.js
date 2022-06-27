const { Range } = require('./main')
const range = '[2, 6)'
const r = new Range(range)


test('Integer range contains', ()=>{
    const arr = '2, 4'
    expect(r.contains(arr)).toBeTruthy()
})

test('Integer range not contains', () => {
    const arr = '-1, 1, 6, 10'
    expect(r.contains(arr)).toBeFalsy()
})

test('Range not contains [7, 10)', () => {
    const range1 = '[2, 5)'
    const r1 = new Range(range1)
    const range2 = '[7, 10)'
    const r2 = new Range(range2)
    expect(r1.contains(r2.range)).toBeFalsy()
})

test('Range not contains [3, 10)', () => {
    const range1 = '[2, 5)'
    const r1 = new Range(range1)
    const range2 = '[3, 10)'
    const r2 = new Range(range2)
    expect(r1.contains(r2.range)).toBeFalsy()
})

test('Range not contains [2, 10)', () => {
    const range1 = '[3, 5)'
    const r1 = new Range(range1)
    const range2 = '[2, 10)'
    const r2 = new Range(range2)
    expect(r1.contains(r2.range)).toBeFalsy()
})

test('Range contains [3, 5]', () => {
    const range1 = '[2, 10)'
    const r1 = new Range(range1)
    const range2 = '[3, 5]'
    const r2 = new Range(range2)
    expect(r1.contains(r2.range)).toBeTruthy()
})

test('Range contains [3, 5)', () => {
    const range1 = '[3, 5]'
    const r1 = new Range(range1)
    const range2 = '[3, 5)'
    const r2 = new Range(range2)
    expect(r1.contains(r2.range)).toBeTruthy()
})

test('get all points', () => {
    
    expect(r.getAllPoints()).toStrictEqual([2, 3, 4, 5])
})

test('get end points [2,6)', () => {
    
    expect(r.getEndPoints()).toStrictEqual([2, 5])
})

test('get end points [2,6]', () => {
    const range1 = '[2, 6]'
    const r2 = new Range(range1)
    expect(r2.getEndPoints()).toStrictEqual([2, 6])
})

test('get end points (2, 6)', () => {
    const range1 = '(2, 6)'
    const r3 = new Range(range1)
    expect(r3.getEndPoints()).toStrictEqual([3, 5])
})

test('get end points (2,6]', () => {
    const range1 = '(2, 6]'
    const r4 = new Range(range1)
    expect(r4.getEndPoints()).toStrictEqual([3, 6])
})

test('Equal [3, 5)', () => {
    const r1 = new Range('[3, 5)')
    const r2 = new Range('[3, 5)')
    expect(r1.Equals(r2)).toBeTruthy()
})

test('Not Equal [2, 9]', () => {
    const r1 = new Range('[3, 5)')
    const r2 = new Range('[3, 5)')
    expect(r1.Equals(r2)).toBeFalsy()
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