import { Range, range } from "./main"

test('Integer range contains', ()=>{
    const range1 = [2, 3, 4]
    expect(Range.contain(range, range1)).toBeTruthy()
})