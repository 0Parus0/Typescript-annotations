// TypeScript adds types and visibility modifiers to JavaScript classes.

// Members: Types

// The members of a class (properties & methods) are typed using type annotations, similar to variables.

// Members: Visibility

// There are three main visibility modifiers in TypeScript.

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it e.g. child classes

class Vehicle {
    // drive(): void {
    //     console.log('Chugga Chugga');
    // }
   protected honk(): void {
        console.log('beep');
    }
}

class Cars extends Vehicle {
   private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive();
        this.honk();
    }

}

const vehicle1 = new Vehicle();
const car1 = new Cars();
car1.startDrivingProcess();
// car1.honk();
// vehicle1.drive();

class Vehicle2 {


    // color: string
    // constructor(color: string) {
    //     color: this.color;
    // }

    // same as above
    // all the fields/properties can be public private or protected
    constructor(public color: string) {

    }
}

class Cars2 extends Vehicle2 {
    constructor(public wheels: number, color: string) {
        super(color);

    }
}

const vehicle2 = new Vehicle2('orange');
const car2 = new Cars2(4, 'red');
console.log(vehicle2.color)