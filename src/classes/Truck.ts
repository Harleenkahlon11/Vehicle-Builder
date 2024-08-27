// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
// The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
    //The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)
        vin: string;
        color: string;
        make: string;
        model: string;
        year: number;
        weight: number;
        topSpeed: number;
        wheels: Wheel[];
        towingCapacity: number;

    // Create a constructor that accepts the properties of the Truck class
    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels = [], towingCapacity: number) {
        // The constructor should call the constructor of the parent class, Vehicle
        super();
        //  The constructor should initialize the properties of the Truck class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;
        //  The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
        if (this.wheels.length !== 4) {
            this.wheels = [new Wheel(), new Wheel(), new Wheel(), new Wheel()];
        }
    }
    //  Implement the tow method from the AbleToTow interface
    tow(vehicle: { make: string; model: string; weight: number; }) {
        //  Get the make an model of the vehicle if it 
        const { make, model, weight } = vehicle;
        //  Check if the vehicle's weight is less than or equal to the truck's towing capacity
        //  If it is, log that the vehicle is being towed
        if (weight <= this.towingCapacity) {
            console.log(`Towing ${make} ${model}`);
        }
        // If it is not, log that the vehicle is too heavy to be towed
        else {
            console.log(`The ${make} ${model} is too heavy to be towed`);
        }
    }
    //  Override the printDetails method from the Vehicle class
    override printDetails() {
        //  The method should call the printDetails method of the parent class
        super.printDetails();
        //  The method should log the details of the Truck
        //  The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Top Speed: ${this.topSpeed} km/h`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity} kg`);
        console.log(`Wheels: ${this.wheels.length} wheels`);
    }
}
// Export the Truck class as the default export
export default Truck;
