const person: {
    name: string,
    age: number,
    hobbies: string[],
    score: number[],
    role: [number, string] // in here we tell exactly the number of array we want to have and how many values we want to have.
} = {
    name: 'Delvia',
    age: 26,
    hobbies: ['EATING', 'SLEEPING'], //if we hover it will written string[]
    score: [1, 3], // this will be number[]
    role: [2, 'coder'] // if the order is the other way around it will get an error, because we have already declare this array only have 2 values start with number then string
}

let favoriteAct: string[] // in here we assigned specifically for string of array
favoriteAct = ["sports"] // if we assign any number here it will come up as an error

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby.toLowerCase) // it gets interesting in here after we try to loop it,
    // typescript knows they're string so you can do anything you want with string
    // but of course if you try to map it it will get an error because it's not an array
    //console.log(hobby.map())
}