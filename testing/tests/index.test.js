const app = require('../index')

test("should return 11 when 7 and 4 are passed", () => {
    expect(app.add(7,4)).toBe(11);
});