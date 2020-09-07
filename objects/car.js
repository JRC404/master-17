const car = {
    name: 'Elizabeth',
    make: 'Ford',
    model: 'Focus',
    EngineSize: 1.6,
    Doors: 5,
    Transmission: 'Automatic',
    FuelType: 'Petrol',
    drive() {
        console.log('vroom');
    },
    park() {
        console.log('beep beep, I am locked.');
    }
}

console.log(car);
car.drive();