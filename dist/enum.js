// const admin = 0
// const read_only = 1
// const coder = 2
//instead of doing what we wrote above,
//we can easily just use enum
//if you don't want to sign it as number we can
// also use it as string, or even if you want 
// to start the number for 5 or 10. even mix it up with string with enum it is possible
var Role;
(function (Role) {
    Role[Role["admin"] = 0] = "admin";
    Role[Role["read_only"] = 1] = "read_only";
    Role[Role["author"] = 2] = "author";
})(Role || (Role = {}));
var person = {
    name: 'Delvia',
    age: 26,
    hobbies: ['eating', 'sleeping'],
    role: Role.admin
};
if (person.role === Role.admin) {
    console.log('is an admin');
}
