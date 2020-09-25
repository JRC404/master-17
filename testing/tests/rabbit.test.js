const app = require('../rabbit');

// setup: prep for our tests
// teardown: prep for our next set of tests
describe("freddy instance tests", () => {
    test("should show that Freddy's name is Freddy", () => {
        expect(app.freddy.name).toBe("Freddy");
    })
    
    test("should show an increase in health when increaseHealth is called", () => {
        expect(app.freddy.health).toBe(100);
        app.freddy.increaseHealth();
        expect(app.freddy.health).toBe(101);
        app.freddy.health = 100;
    })

    test("should show a decrease in health when decreaseHealth is called", () => {
        expect(app.freddy.health).toBe(100);
        app.freddy.decreaseHealth();
        // insert *it's a trap gif*
        expect(app.freddy.health).toBe(99);
    })
    
    test("should show a decrease in hunger when decreaseHunger is called", () => {
        expect(app.freddy.hunger).toBe(100);
        app.freddy.decreaseHunger()
        expect(app.freddy.hunger).toBe(99);
        app.freddy.hunger = 100;
    })

    test("should show that freddy.hunger is 100", () => {
        expect(app.freddy.hunger).toBe(100)
    })
    
    test("should show an increase of 5 in strength when train is called", () => {
        expect(app.freddy.strength).toBe(25);
        app.freddy.train()
        expect(app.freddy.strength).toBe(30);
        app.freddy.strength = 25;
    })

    test("should show a decrease of 5 in strength when takeaway is called", () => {
        expect(app.freddy.strength).toBe(25);
        app.freddy.takeaway();
        expect(app.freddy.strength).toBe(20);
        app.freddy.strength = 25;
    })

    test("should check if a rabbit is eligible to fight", () => {
        app.freddy.eligibleToFight = true
        expect(app.freddy.eligibleToFight).toBeTruthy();
    })

    test("should check if a rabbit has a name", () => {
        // app.freddy.name = 0
        expect(app.freddy.name).toBeTruthy();
        // 7 false values: false, NaN, undefined, '', null, 0, -0
    })

    test("should show if a value is defined", () => {
        // app.freddy.name = undefined;
        expect(app.freddy.name).toBeDefined();
    })
})

describe("brian instance tests", () => {
    
})