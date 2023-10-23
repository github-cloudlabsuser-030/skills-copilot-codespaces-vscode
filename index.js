
const arrayOfArrays = [
    [{ name: 'John', age: 25 }, { name: 'Jane', age: 30 }],
    [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 27 }]
];

const names = arrayOfArrays.flatMap(array => array.map(person => person.name));

console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']
