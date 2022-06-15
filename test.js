

test('Integer range contains', ()=>{
    expect(Range.contain([2,4,5])).toContain([2, 3, 4])
})