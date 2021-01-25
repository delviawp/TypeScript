let userInput: unknown;
// with unknown is more restricted. we need to the run check first to store unknown type to the new value
// unknown is better choice to any because is make sure you dont allow to do anything unless you do the run check first
let unserName: string;

userInput = 'delvia';
if(typeof userInput === 'string') {
    unserName = userInput
}

function generateError(message: string, code:number) {
    throw {message: message, erroCode: code};
}

generateError('Sorry!', 400)

//it doesnt always just return void, this function return never
//for example if we store generateError to the variable if we console it
//it will NEVER return anything as a value.
