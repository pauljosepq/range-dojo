const { Range, range } = require('./main')


test('Integer range contains', ()=>{
    const arr = [2, 3, 4]
    expect(Range.contain(range, arr)).toBeTruthy()
})

test('Integer range not contains', () => {
    const arr = [-1, 1, 6, 10]
    expect(Range.contain(range, arr)).toBeTruthy()
})