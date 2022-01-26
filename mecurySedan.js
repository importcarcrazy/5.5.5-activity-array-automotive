import { Vehicle } from "./vehicleBaseClass";

class Car extends Vehicle {
    constructor (make, model, year, color) {
        super(make, model, year, color);
        this.maximumPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maximumSpeed = 200;
        this.fuel = 100;
        this.scheduleService = false;
    }

    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) < this.maxPassengers) {
                return this.passenger;               
            } 
            else {
                console.log("Too many passengers for the" + this.make + " " + this.model);
            }
        } 
    
    start() {
        if (this.fuel > 0) {            
            console.log("engine running.");
            } 
            else { return this.started = false;
                console.log("fuel empty";
            }
        }
    
    scheduleService(mileage) {
        if (this.mileage > 30000) {            
            this.scheduleService == true
            return this.scheduleService;                       
        }



}

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

