// Exercise #1

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}


for (let i = 0; i < Object.keys(person3).length;i++){
    if (Array.isArray(Object.values(person3)[i])){
        for (let j = 0; j < Object.values(person3)[i].length;j++){
            if (typeof(Object.values(person3)[i][j]) === 'string'){
                console.log(Object.values(person3)[i][j])
            }
            else{
                for (let k in Object.keys(Object.values(person3)[i][j])){
                    console.log(Object.values(Object.values(person3)[i][j])[k])
                }
            }
        }
    }
    else{
        console.log(Object.values(person3)[i])
    }
}


// Exercise #2

function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;

    this.printInfo = (fav_color, fav_food='pizza') => {
        console.log(`${name}(${gender}) is ${age} years old. Favorite color is ${fav_color}. Favorite food is ${fav_food}`)
    }

    this.count_up = (num) =>{
        return `In 3 years, ${name} will be ${this.age += num}`
    }
}

let john = new Person('John', 27, 'Male')
console.log(john.printInfo())
console.log(john.count_up(3))

// Exercise #3
const tenOrMore = (string) =>{
    return new Promise((resolve, reject) => {
        if (string.length > 10){
            resolve(string)
        } else {
            reject(string)
        }
    })
};
string = '01234567891'
tenOrMore(string)
    .then((result)=>{
        console.log(`${result} is more than 10 chars long`)
    })
    .catch((error)=>{
        console.log(`${error} is 10 chars long or less`)
    })

// Codewars #1
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// https://www.codewars.com/kata/55b42574ff091733d900002f

function friend(friends){
    frnds = []
    for (let i = 0; i < friends.length;i++){
        if (friends[i].length == 4){
            frnds.push(friends[i])
        }
    };
    return frnds
};

friends = ["Ryan", "Kieran", "Mark"]

console.log(friend(friends))

// Codewars #2
//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
function evenOrOdd(number) {
    if (number % 2 == 0){
        return 'Even'
    } else {
        return 'Odd'
    }
}

console.log(evenOrOdd(12))