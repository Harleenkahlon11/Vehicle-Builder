// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';
//  The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  
    // Declare properties of the Motorbike class
    //  The properties should include vin, color, make, model, year, weight, top speed, and wheels
    // Declare properties with types
    //  The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])
      wheels: Wheel[];
      topSpeed: number;
      color: string;
      model: string;
      override vin: string;
      make: string;
      weight: number;
      year: number;

   //  Create a constructor that accepts the properties of the Motorbike class
      constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels = []) {
     
    // The constructor should call the constructor of the parent class, Vehicle
      super();
    // The constructor should initialize the properties of the Motorbike class
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        //  The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
        //Implement the wheelie method
        if (this.wheels.length !== 2) {
            this.wheels = [new Wheel(), new Wheel()];
        }
    }
    //  The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
        console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }
    //  Override the printDetails method from the Vehicle class
    override printDetails() {
        //The method should call the printDetails method of the parent class
        super.printDetails();
        //  The method should log the details of the Motorbike
        //  The details should include the VIN, make, model, year, weight, top speed, color, and wheels
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight} kg`);
        console.log(`Top Speed: ${this.topSpeed} km/h`);
        console.log(`Color: ${this.color}`);
        console.log(`Wheels: ${this.wheels.length} wheels`);
    }
}
// Export the Motorbike class as the default export
export default Motorbike;
