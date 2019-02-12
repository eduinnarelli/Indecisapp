// reassign and redefine
var nameVar = 'Edu';
var nameVar = 'Eduardo';
console.log('nameVar', nameVar);

// reassign
let nameLet = 'Edu';
nameLet = 'Innarelli';
console.log('nameLet', nameLet);

const nameConst = 'Duds';
console.log('nameConst', nameConst);

// var: function scoped
// let and const: block level scoped

const fullName = 'Edu Innarelli';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);

// usamos const e let, nessa ordem, se preciso