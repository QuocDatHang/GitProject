class Temperature {
    constructor(degreeC) {
        this.degreeC = degreeC;
    }
    convertCtoF() {
        return this.degreeC * 1.8 + 32;
    }
    convertCtoK() {
        return this.degreeC + 273.15;
    }
}
let degreeC = new Temperature(25);

console.log(degreeC.convertCtoF());
console.log(degreeC.convertCtoK());
