class ElectricLamp{  
    constructor(status){
        this.status = status;
    }
    getStatus(){
        return this.status;
    }
}

class SwitchButton {
    constructor(lamp, status){
        this.lamp = lamp;
        this.status = status
    }
    switchOff(){
        this.lamp.status = false;
        return this.status = false;
    }
    switchOn (){
        this.lamp.status = true;
        return this.status = true;
    }
    connectToLamp(ElectricLamp){
        return this.lamp = ElectricLamp;
    }
}

let electricLamp_1 = new ElectricLamp(false);
let switchButton_1 = new SwitchButton(electricLamp_1, false)

console.log(electricLamp_1.getStatus());
console.log(switchButton_1.switchOn());
console.log(electricLamp_1.getStatus());
console.log(switchButton_1.switchOff());
console.log(electricLamp_1.getStatus());



