// Class
class Car {
    chasisNo: number;
    name: string;
    constructor(chasisNo: number, name: string ){
        this.chasisNo = chasisNo ;
        this.name = name ;
    }
}

type IndicaPlace = "Gujrat" | "Factory_2" | "Factory_3" ;
type IndicaEngineCC = 1000 | 1200 | 4000 ;
type IndicaTyreSize = "18" | "20" | "22" ;

class Indica extends Car {
    fuelCapacity: number;
    engineCC: IndicaEngineCC;
    tyreSize: IndicaTyreSize;
    place: IndicaPlace;
    constructor(
        place: IndicaPlace,
        fuelCapacity: number,
        engineCC: IndicaEngineCC,
        tyreSize: IndicaTyreSize
    ){
        super(Date.now(),"Indica");
        this.place = place;
        this.fuelCapacity = fuelCapacity;
        this.engineCC = engineCC;
        this.tyreSize = tyreSize
    }
}

type NexonPlace = "Factory-2" | "Factory-3";
type NexonEngineCC = 1000 | 1500 | 4000;
type NexonTyreSize = "22" | "26";
type NexonCarType = "Petrol" | "Diesel" | "EV";

class Nexon extends Car {
    place : NexonPlace;
    carType : NexonCarType;
    tyreSize : NexonTyreSize; 
    fuelCapacity ?: number;
    engineCC : NexonEngineCC;

    constructor(
        place: NexonPlace,
        carType: NexonCarType,
        tyreSize: NexonTyreSize,
        fuelCapacity ?: number,
        engineCC ?: NexonEngineCC,
    ){
        super(Date.now(),"Nexon");
        this.place = place;
        this.carType = carType;
        if(fuelCapacity){
        this.fuelCapacity = fuelCapacity;
        };
        if(engineCC){
        this.engineCC = engineCC;
        };
        this.tyreSize = tyreSize;
    }
} ;

let indica1 = new Indica("Gujrat", 20, 1000, "22");

let nexon1 = new Nexon("Factory-2", "EV", "26");