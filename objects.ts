const profile = {
    personName: 'alex', 
    age: 20,
    coords: {
        lat: 0,
        lng: 15
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const {age, personName } : {age: number; personName: string} = profile;
// ES 2015 syntax destructuring
// const {coords: {lat, lng}} = profile;

// TS destructing nested objects
const {coords: {lat, lng}}: {coords: {lat: number; lng: number}} = profile;

