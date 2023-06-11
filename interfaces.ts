// An interface is a syntactical contract that an entity should conform to. In other words, an interface defines the syntax that any entity must adhere to.

// Interfaces define properties, methods, and events, which are the members of the interface. Interfaces contain only the declaration of the members. It is the responsibility of the deriving class to define the members. It often helps in providing a standard structure that the deriving classes would follow.

interface Vehicle1 {
    name: string;
    year: number;
    broken: boolean
}

const oldCivic = {
    name: 'civic',
    year: 2000,
    broken: true
}

const printVehicle = (vehicle: Vehicle1): void => {
    console.log(`Name: ${vehicle.name}`)
    console.log(`Year: ${vehicle.year}`)
    console.log(`Broken? ${vehicle.broken}`)
}

printVehicle(oldCivic);

interface Car {
    name: string;
    summary(): string 
}

const vehicleSummary = (car: Car): void => {
    console.log(car.summary());
}

const newCivic = {
    name: 'new-civic',
    year: 2023,
    broken: false,
    summary():string {
        return `Name: ${this.name}`
    }
}

vehicleSummary(newCivic);

interface Reportable {
    summary(): string;
}

const xli = {
    name: 'toyota-xli',
    year: 2017,
    broken: false,
    summary(): string {
        return `Name: ${this.name}`
    }
}

const printItem = (item: Reportable): void => {
    console.log(item.summary());
}

printItem(xli);
printItem(newCivic);
// printItem(oldCivic); Typescript Error because oldCivic doesn't have summary method;