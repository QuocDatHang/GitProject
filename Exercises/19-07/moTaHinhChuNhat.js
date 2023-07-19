class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    perimeter(){
        return (this.length+this.width)*2;
    }
    acreage(){
        return this.length*this.width;
    }
}

let length_1 = new Rectangle(10, 5);
console.log(length_1.perimeter());
console.log(length_1.acreage());
document.write(length_1.perimeter());
document.write(length_1.acreage());


