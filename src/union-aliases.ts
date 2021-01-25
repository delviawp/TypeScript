// with the union type if you want to have property with 2 different kind of value you can.
// the property can be flexible however you still need to do run time check on the logic.

//Aliases type is to define new name for existing types

type Combinable = number | string

function combine(
    input1: Combinable, 
    input2: Combinable) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === "number") {
        result = input1 + input2
    } else {
        result = input1.toString() + input2.toString()
    }
        return result
}

const combinedAges = combine(30, 24)
console.log(combinedAges)

const combinedNames = combine('Max', 'Anna')
console.log(combinedNames)