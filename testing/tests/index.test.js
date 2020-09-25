const app = require('../index');
// import { add, nameArray, favouriteNumber } from '../index';

test("should return 11 when 7 and 4 are passed", () => {
    expect(app.add(7,4)).toBe(11);
});
describe("the nameArray tests", () => {
    test("that array does contain Shaun", () => {
        expect(app.nameArray).toContain("Shaun");
    })
    test("that array has a length of 4 names", () => {
        expect(app.nameArray).toHaveLength(4);
    })
    // test("that array should be Shaun", () => {
    //     expect(app.nameArray).toBe("Shaun"); // checks the whole array, not single items
    // })
})

test("should show that favouriteNumber is 7", () => {
    expect(app.favouriteNumber).toEqual(7);
})

test("should total 0.3 when 0.1 and 0.2 are returned", () => {
    expect(app.flowerShop()).toBeCloseTo(0.3)
    // difference can be 0.005
})

/**
 * .toBe()
 * .toHaveLength()
 * .toEqual()
 * .toContain()
 * .toBeDefined()
 * .toHaveBeenCalled()
 * .toBeCloseTo()
 * 
 * .not.toBe()
 */
