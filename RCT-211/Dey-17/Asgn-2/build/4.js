// Class
class Car {
    chasisNo;
    name;
    constructor(chasisNo, name) {
        this.chasisNo = chasisNo;
        this.name = name;
    }
}
class Indica extends Car {
    fuelCapacity;
    engineCC;
    tyreSize;
    place;
    constructor(place, fuelCapacity, engineCC, tyreSize) {
        super(Date.now(), "Indica");
        this.place = place;
        this.fuelCapacity = fuelCapacity;
        this.engineCC = engineCC;
        this.tyreSize = tyreSize;
    }
}
class Nexon extends Car {
    place;
    carType;
    tyreSize;
    fuelCapacity;
    engineCC;
    constructor(place, carType, tyreSize, fuelCapacity, engineCC) {
        super(Date.now(), "Nexon");
        this.place = place;
        this.carType = carType;
        if (fuelCapacity) {
            this.fuelCapacity = fuelCapacity;
        }
        ;
        if (engineCC) {
            this.engineCC = engineCC;
        }
        ;
        this.tyreSize = tyreSize;
    }
}
;
let indica1 = new Indica("Gujrat", 20, 1000, "22");
let nexon1 = new Nexon("Factory-2", "EV", "26");
