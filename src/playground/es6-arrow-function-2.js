// arguments object - no longer bound

const add = (a,b) => {
    // console.log(arguments); not defined
    return a + b;
};

console.log(add(55, 4));

// this keyword - no longer bound

const user = {

    name: 'Edu',
    cities: ['Campinas', 'São Paulo'],

    printPlacesLived () {
        return this.cities.map((city) => 
            this.name + ' lived in ' + city
        );
    }

};

console.log(user.printPlacesLived());

// obs: ver links salvos sobre ponto e vírgula

const multiplier = {

    numbers: [1, 2, 4, 123],
    multiplyBy: 2,

    multiply() {
        return this.numbers.map( n => n * this.multiplyBy );
    }

};

console.log(multiplier.multiply());