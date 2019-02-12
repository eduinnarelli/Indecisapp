// ES5 functions
function square(x) {
    return x*x;
}

console.log(square(2));

// Arrow function first example
const squareArrow = (x) => x*x;
console.log(squareArrow(9));

// Shorthand syntax: retorna implicitamente
const getFirstName = (name) => name.split(' ')[0];

// Regular syntax
const getFirstNameReg = (name) => {
    return name.split(' ')[0];
};

console.log(getFirstName('Eduardo Innarelli'));