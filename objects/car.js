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
    }
}

console.log(car);
car.drive();