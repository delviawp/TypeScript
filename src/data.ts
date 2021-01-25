// Number
// function add(n1 : number, n2 : number) { //with TypeScript under these two parameters has dots telling this could be any type
//     // you can add semicolon to tell the exact datatypes.
//     return n1 + n2
// }

// //const number1 = '5' // This is string instead of numbers below it will come up error
// const number1 = 5 //in case other people will input this as a string, the function instead of sums of the number but concat it together
// const number2 = 2.8

// const result = add(number1, number2)
// console.log(result)

/*
The key difference is: JavaScript uses "dynamic types" (resolved at
    runtime), TypeScript uses "static types" (set during development)
*/

//Boolean + String

function add(n1: number, n2: number, extraResult: boolean, phrase: string) {
    const result = n1 + n2
    if(extraResult) {
        console.log(phrase + result)
    } else {
        return n1 + n2
    }
}

const number1 = 5
const number2 = 2.8
const printResult = true
const printPhrase = 'The result is : '

add(number1, number2, printResult, printPhrase )

/*
Type Assigment and Type Inference is helping us explicitly
assign the value like we planned before. If in the future
for some reason we change re assign const to different value
TypeScript will yell at us,same thing happen if we want to re assign 
number when we explicitly tell the type is string.
*/