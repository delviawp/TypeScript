# TypeScript

What is TypeScript?

TypeScript is a JavaScript super set, building up on JavaScript. It's not a new language instead it adds new features + advantages to JavaScript and makes writing JavaScript easier and powerfull.
However browser can't execute even Nodejs, so everything that you write on TypeScript will be compiled to JavaScript in the most complex snippets. Also TypeScript can detect error during development, so it's kinda avoid the mistake you would probaby have with JavaScript.

Core Syntax & Features

TypeScript has many datatypes compare to JavaScript.

- Number
  In TypeScript "1, 5.3, -10" no differentiation between integers or floats.

- String
  In TypeScript Single Quotes, Double Quotes, and Backtick is the same all text values.

- Boolean
  There's no truthy falsy, TypeScript only have true and false.

For syntax example will be on data.ts

- Object
  There are more specific object in TypeScript and any JavaScript object are possible.

For syntax example will be on object.ts

- Array
  It's interesting in here is in TypeScript we can assign specific type of array. For example like we can just assign it for number[] or string[]

For syntax example will be on array.ts

- Tuple
  It's a fixed length array and fixed type

For syntax example will be on array.ts

- Enum
  Automatically enumerated global constant identifiers

For syntax example will be on enum.ts

- Any
  Any kind of value, no specific type
  For example if you have this variable below

  ```
  let hobbies = any
  ```

  When you sign hobbies with any kind of type TypeScript won't yell at you.
  It will be better that you only using this if you didn't know in advance what kind of type you want to have, otherwise assign them specifically it's the best way.

- Union Type
  You can define a variable which can hae multiple types of value like number and string. And you can di that using the pipe symbol between the type

For syntax on union-aliases.ts

- Literal Type
  The string literal types allow you to define a type that accepts only one specified string literal. String literal type is useful to limit a possible string value in a variable

```
for example if we want to mix it with union type
let valuess = 'string' | 'number' | 'boolean;
```

- Type Aliases
  With this one it allows you to create a new name for an existing type. It is really useful to create type aliases for union types.

For syntax on union-aliases.ts

- Function Return Types and Void
  In TypeScript if a function has a return value, it will tell us the type that we will get. And if a function didn't have return value it's going to be called void.

For syntax on function.ts

- Function Types
  Function types allow us to describe which type of function specifically we want to have with parameters and return values, if we expect some callback as well.

For syntax on function.ts

- Function Types and Callbacks
  A callback function is a function which is scheduled to be called after some asynchronous processing is completed, it passed to another function as parameters which allows them to be called when the async processing is completed.

For syntax on function.ts

- Unknown Type
  This is the type-safe counterpart of any. Anything is assignable to unknown but not vice versa without a type of assertion or a control flow based narrowing

For syntax on unknown-never.ts

- Never Type
  This type can be useful if we want to create a function for an error, because it will be completed as a function but if we try to console it. it will not return as a value EVER!!

For syntax on unknown-never.ts

In TypeScript instead of doing tsc all the time and wait for the compilation we can also use watch mode, whereas the file will compile immediately whenever you make changes.

```
-- watch
```

What if you have multiple ts file and then you need to compile them all, you can easily just write this code below

```
tsc -init
```

and then type tsc in your terminal after that, afterwards all the TypeScript file will compile to JavaScript straight away.

If there's a file or some files that we don't want to be compile to javascript we can go to tsconfig.json and go below then add "exclude": ["we can just list the files we don't want to be compiled."].
If we do want to compile a file specifically we can just add inside "include".

Also if we want to setting a compilation target, when you go to tsconfig.json again, on target you can change to es2015 or es2016 etc.

Lib on tsconfig.json is to be able working with dom, if we have button querySelector and listener TypeScript will compile it perfectly, to keep it uncomment is let them to work just fine.

sourcesMap uses if we want to do debugging in the browser, we can pause and start debugging from there.

outDir
After having so many js files of course we want to be more organized and store it in the folder. And we can just wrote where we put the files on outDir.

on the other side rootDir do the same job for ts files.

Uncomment removeComments to remove the comment on your ts files.

downlevelIteration will compile it better if we have loop. So if your compilation act funny we should uncomment this one.

noEmitOnError
On TypeScript there might be just a single character to make it looks like error but on JavaScript it will be fine. So if we turn this on, it will ignore the error and just give you the final result.

noImplicitAny
If we turn this on, when we create a function without declaring the type, TypeScript will yell at you because this function doesn't has a type this is just any.

Long story short, anything on strict mode on tsconfig.json just let it be, it usefull and it's good for the future.

How to debug your project, go to ESLint for the extension, Prettier to have nice format code and Debugger for Chrome.
