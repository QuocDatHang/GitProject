
class Battery {
    constructor(energy) {
        this.energy = energy;
    }
    setEnergy(energy) {
        this.energy = energy;
    }
    getEnergy() {
        return this.energy;
    }
    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy--;
        }
    }
}

let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status){
            console.log('Lighting');
            this.battery.decreaseEnergy();
            // alert('Lighting')
        }
        else 
            console.log('Not lighting');
            // alert('Not lighting')
    }
    this.turnOn = function () {
        if (this.battery !=0){
            this.status = true;
        }
    }
    this.turnOff = function () {
        this.status = false;
    }
}
let bat = new Battery();
bat.setEnergy(3);
console.log(bat.getEnergy());
let lamp = new FlashLamp();
lamp.setBattery(bat);

while (lamp.getBatteryInfo() != 0){
lamp.turnOn();
    console.log(lamp.status);
lamp.light();
    console.log(lamp.getBatteryInfo());
lamp.turnOff();
    console.log(lamp.status);
lamp.light();
}

