//ex 1
const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
    rectangleArea(...rectangle1, ...rectangle2, ...rectangle3) // altere a chamada da funcao rectangleArea
    console.log(rectangle[0] * rectangle[1]);
});

// ex 2
const sum = (...numbers) => {
    return numbers.reduce((acc, valorAtual) => acc + valorAtual, 0);
};
console.log(sum(1, 2, 3, 4));

// ex 3
const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
};

const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
};

const personLikes = ({
    name,
    age,
    likes
}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

console.log(personLikes(alex));
console.log(personLikes(gunnar));

// ex 4
const people = [{
        name: 'Nicole',
        bornIn: 1992,
        nationality: 'Australian',
    },
    {
        name: 'Harry',
        bornIn: 2008,
        nationality: 'Australian',
    },
    {
        name: 'Toby',
        bornIn: 1901,
        nationality: 'Australian',
    },
    {
        name: 'Frida',
        bornIn: 1960,
        nationality: 'Dannish',
    },
    {
        name: 'Fernando',
        bornIn: 2001,
        nationality: 'Brazilian',
    },
];

const personAust = (array) => array.filter(({
    nationality,
    bornIn
}) => nationality === 'Australian' && bornIn > 1900 && bornIn <= 2000);

console.log(personAust(people));

// ex 5
const myList = [1, 2, 3];

const swap = ([a, b, c]) => [c, b, a];
console.log(swap(myList));

// ex 6
const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObj = ([nome, marca, ano]) => ({
    nome,
    marca,
    ano
});
console.log(toObj(palio));

// ex 7
const ships = [{
        name: 'Titanic',
        length: 269.1,
        measurementUnit: 'meters',
    },
    {
        name: 'Queen Mary 2',
        length: 1132,
        measurementUnit: 'feet',
    },
    {
        name: 'Yamato',
        length: 256,
        measurementUnit: 'meters',
    },
];

const shipLength = ({name, length, measurementUnit}) => (`${name} is ${length} ${measurementUnit} long`);

console.log(shipLength(ships[0])); 
console.log(shipLength(ships[1])); 
console.log(shipLength(ships[2]));

// ex 8
const greet = (name, msg = 'Hi') => (`${msg} ${name}`); 

console.log(greet('John'));
console.log(greet('John', 'Good morning'));
console.log(greet('Isabela', 'Oi'));