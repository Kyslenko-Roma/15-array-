/**
 *
 * @type {[{lastName: string, name: string, age: number},{lastName: string, name: string, age: number},{lastName: string, name: string, age: number}]}
 */

let peoples = [
    {name: 'Roman', lastName: 'Kyslenko', age: 25},
    {name: 'Bohdan', lastName: 'Onatskyi', age: 26},
    {name: 'Maksim', lastName: 'Kalynychenko', age: 25},
];

let names = [];

for (let i = 0; i < peoples.length; i++){
    names.push(peoples[i].name)
}

console.log(names);

let lastName = [];

for (let i = 0; i <peoples.length; i++) {
    lastName.push(peoples[i].lastName);
}

console.log(lastName);

let ages = [];

for (let i = 0; i < peoples.length; i++){
    ages.push(peoples[i].age);
}

console.log(ages);