// Class
class Car {
    chasisNo: number;
    name: string;
    constructor(chsisNo: number, name: string ){
        this.chasisNo = chasisNo ;
        this.name = name ;
    }
}

type IndicaPlace = "Gujrat" | "Factory_2" | "Factory_3" ;
type IndicaEngineCC = 1000 | 1200 | 4000 ;
type IndicaTyreSize = "18" | "20 " | "22" ;

class Indica extends Car {
    fuelCapacity: number;
    engineCC: IndicaEngineCC;
    tyreSizes: IndicaTyreSize;
    place: IndicaPlace;
    constructor(
        place: IndicaPlace,
    )
}