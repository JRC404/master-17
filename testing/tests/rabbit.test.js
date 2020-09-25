const app = require('../rabbit');
describe("freddy instance tests", () => {
    test("should show that Freddy's name is Freddy", () => {
        expect(app.freddy.name).toBe("Freddy");
    })
    
    test("should show an increase in health when increaseHealth is called", () => {
        expect(app.freddy.health).toBe(100);
        app.freddy.increaseHealth()
        expect(app.freddy.health).toBe(101);
    })
    
    test("should show a descrease in hunger when descreaseHunger is called", () => {
        expect(app.freddy.hunger).toBe(100);
        app.freddy.decreaseHunger()
        expect(app.freddy.hunger).toBe(99);
    })
    
    test("should show an increase of 5 in strength when train is called", () => {
        app.freddy.train()
        expect(app.freddy.strength).toBe(30);
    })
})