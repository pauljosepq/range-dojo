const range = [2, 3, 4, 5]

test('Integer range contains', ()=>{
    const range1 = [2, 3, 4]
    expect(Range.contain(range)).toContain([2, 3, 4])
})