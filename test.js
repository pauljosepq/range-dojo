const { Range } = require('./main')
const range = '[2, 6)'
const r = new Range(range)

test('Missing start', ()=>{
    expect(() => new Range('2, 6)')).toThrowError(new Error('The beginning of the range must be ( or ['))
})

test('Non-interger value', ()=>{
    expect(() => new Range('(a, 6)')).toThrowError(new Error('A non-integer value was given'))
})

test('Start greater than the end', ()=>{
    expect(() => new Range('(9, 6)')).toThrowError(new Error('The beginning is greater than the end'))
})

test('Missing end', ()=>{
    expect(() => new Range('(2, 6')).toThrowError(new Error('The end of the range must be ) or ]'))
})

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
    expect(r1.containsRange(r2.start, r2.end)).toBeFalsy()
})

test('Range not contains [3, 10)', () => {
    const range1 = '[2, 5)'
    const r1 = new Range(range1)
    const range2 = '[3, 10)'
    const r2 = new Range(range2)
    expect(r1.containsRange(r2.start, r2.end)).toBeFalsy()
})

test('Range not contains [2, 10)', () => {
    const range1 = '[3, 5)'
    const r1 = new Range(range1)
    const range2 = '[2, 10)'
    const r2 = new Range(range2)
    expect(r1.containsRange(r2.start, r2.end)).toBeFalsy()
})

test('Range contains [3, 5]', () => {
    const range1 = '[2, 10)'
    const r1 = new Range(range1)
    const range2 = '[3, 5]'
    const r2 = new Range(range2)
    expect(r1.containsRange(r2.start, r2.end)).toBeTruthy()
})

test('Range contains [3, 5)', () => {
    const range1 = '[3, 5]'
    const r1 = new Range(range1)
    const range2 = '[3, 5)'
    const r2 = new Range(range2)
    expect(r1.containsRange(r2.start, r2.end)).toBeTruthy()
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
    const r2 = new Range('[3,5)')
    expect(r1.equals(r2)).toBeTruthy()
})

test('Not Equal [2, 10)', () => {
    const r1 = new Range('[2, 10)')
    const r2 = new Range('[3, 5)')
    expect(r1.equals(r2)).toBeFalsy()
})

test('Not Equal [2, 5)', () => {
    const r1 = new Range('[2, 5)')
    const r2 = new Range('[3, 10)')
    expect(r1.equals(r2)).toBeFalsy()
})

test('Not Equal [3, 10)', () => {
    const r1 = new Range('[3, 5)')
    const r2 = new Range('[3, 10)')
    expect(r1.equals(r2)).toBeFalsy()
})