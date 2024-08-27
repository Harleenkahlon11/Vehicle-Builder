# Vehicle-Builder
Vehicle builder

## Description
The Vehicle Builder is a command-line application that allows users to manage a collection of vehicles. Users can create different types of vehicles (e.g., trucks, motorbikes, cars, buses) and perform various actions on them through a CLI interface. The application supports functionalities like vehicle selection, action execution, and vehicle-specific operations.

## Table of Contents
 Features
 Installation
 Usage
 API
 Contributing
 License

* Features
Vehicle Management: Create, select, and manage various types of vehicles.
Vehicle Actions: Perform actions such as start, accelerate, decelerate, turn, reverse, and more.
Special Actions: Specific actions for certain vehicle types (e.g., wheelies for motorbikes, towing for trucks).
Interactive CLI: A user-friendly CLI interface for managing and interacting with vehicles.
Vehicle Types
1. Truck
Actions:
Tow: Tow another vehicle.
Load/Unload Cargo: Manage cargo in the truck.
Special Features:
Large capacity for towing and cargo.
2. Motorbike
Actions:
Wheelie: Perform a wheelie.

Special Features:
Maneuverable and lightweight.
3. Car
Actions:
Drift: Perform a drift turn.

Special Features:
Balanced handling and comfort features.

* Installation
Clone the Repository:

bash
Copy code
git clone : https://github.com/Harleenkahlon11/Vehicle-Builder.git
cd Vehicle-Builder

* Install Dependencies:

Make sure you have Node.js and npm installed. Then, install the required packages:

bash
Copy code
npm install

* Usage
Start the Application:

To start the CLI interface, run:

bash
Copy code
npm start
Create a New Vehicle:

Follow the prompts to create a new vehicle. You can choose from different vehicle types and specify their attributes.

Select an Existing Vehicle:

Choose from the list of existing vehicles to perform various actions.

Perform Actions:

Depending on the vehicle type, you can perform actions such as starting the vehicle, accelerating, and more. Specific actions include:

For Trucks: Tow other vehicles.
For Motorbikes: Perform a wheelie.


* API
Cli Class
findVehicleToTow(truck: Truck): void
Prompts the user to select a vehicle to tow. Only trucks can perform this action.

performActions(): void
Prompts the user to select an action to perform on the currently selected vehicle.

startCli(): void
Starts the CLI prompt for creating or selecting a vehicle.

Contributing
Contributions are welcome! Please fork the repository, make your changes, and submit a pull request. Ensure your code follows the project's style guidelines and includes appropriate tests.

* License
This project is licensed under the MIT License. See the LICENSE file for details.

Notes:
# link to Video

https://watch.screencastify.com/v/KEMv8N5CblRwD7NJtZAR