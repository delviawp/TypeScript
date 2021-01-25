//If we hover the function add it will written : number, that's means return value it's going to be numbers

function add(n1: number, n2: number) : number  {
    return n1 + n2
    // return n1.toString() + n2.toString() // then typescript will return this as string
}

function printResult(num: number) : void {
    console.log('Result: ' + num)
    // void in here explained that this function doesn't return anything
    // the function it completed but still doesnt has anything to return 
}

printResult(add(5, 12))
console.log(printResult(add(5, 12))) // if we try to do this the result is goin to be undefined

// let combineValues: Function;

//Function is the type that provided by typescript
//If we re assign combineValues to different type it will give an error
// because we did tell typescript that combineValues is for function only


// combineValues = add
// combineValues = printResult 

//however if we re assign this to the function below, it still ok but the run time will come up
// as an error because that function didnt take 2 parameters.

let combineValues: (a: number, b: number) => number

combineValues = add

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2
    cb(result)
}

//That's why function type will help us to define our function regarding the parameters and return 

addAndHandle(12, 22, (result) => {
    console.log(result)
})
console.log(combineValues(8, 8))