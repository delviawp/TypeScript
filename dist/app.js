"use strict";
// with the union type if you want to have property with 2 different kind of value you can.
// the property can be flexible however you still need to do run time check on the logic.
function combine(input1, input2) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 24);
console.log(combinedAges);
var combinedNames = combine('Max', 'Anna');
console.log(combinedNames);
//# sourceMappingURL=app.js.map