# The Basics

## Browsers, Editor and Terminal Setup

- Browsers
  - Google Chrome, Mozilla Firefox, etc
  - learn the shortcut keys
- Terminal
  - Install the latest/current [Node.js](https://nodejs.org/en/) & check version `node -v`
  - Check iTerm, hyper terminals Mac
  - command prompt (Windows default), check Cmder which is a portable console emulator for Windows
  - basic commands:
    - `ls -l` to check the list of directory
    - `cd` to change directory
    - `pwd` to print the currect directory
- Editor
  - High Recommended Editor is Visual Studio Code (vscode)

### Browser (chrome) shortcuts

- `Ctrl+Shift+I` open "Elements" tab in dev tools
- `Ctrl+Shift+J` open "Console" tab in dev tools


## Running and Loading JavaScript

- Simplest way to run JS is using browser's console then it will run on the page you are currently using.
- You can run it also using `script` tag in HTML:

```js
<script>
  console.log('Hey');
</script>
```

**Note**: Always try to put your `script` tag before the closing `body` tag, to make sure all the HTML elements are loaded first so you can access them using JS in `script` tag.

- Recommeded way is linking `script` tag file with `src` attribute for the relative path:

```js
<script src='./script.js'></script>
```

**Note**: Make sure to include the `script` closing tag because it's not a self closing tag.

- Lastly you can run it via Node.js using terminal, E.g., `node index.js`


## Variables and Statements

- A Statement is an instruction to the computer/browser/js interpreter to do something, E.g.:
  - a variable is being declared/updated
  - function is being called
  - anytime you want to do something in javaSript, that's refer to as statement
- Semicolons used to end/terminate a statement
  - you can choose to omit them because there is something called _Automatic Semicolon Insertion in Javascript (ASI)_

### Declaring a variable

- `let` and `const` were introduced in ES6 (newer)
- `var` and `let` can be updated but not `const`

```js
// function scoped
var first = 'Genesis'; // variable declaration statement

// block scoped
let age = 27;
const cool = true;


first = 'gen';
cool = false; // Error: Assignment to constant variable.

console.log(first) // function call statement
```

- In **strict mode**, you have to define a variable first before assigning a value to it.

```js
dog = 'snickers'; // snickers (no error, but bad coding, don't do this)

'use strict';
dog = 'snickers'; // Error: dog is not defined
```

- If you write `var dog;`, dog is _undefined_ because you did not assign a value to it

### Scoping

- `var` is _function scoped_ (only available inside parent functions)

- `let` and `const` are _block scoped_ (available inside a block denoted by _{ }_)

### Opinion (what to use)

- Use `const` by default
- If the value of the variable needs to change then use `let`
- Almost never use `var`

### Variable naming conventions

- By convention variable should not start with capital unless they are a _class_
- Must start with **a-z** or **_** or **$**
- If a variable is multi-word, you can use:
  - camelCase is the recommended naming convention for javaScript
  - PascalCase or UpperCamelCase
  - snake_case
  - kebab-case is not allowed in javaScript

```js
const iLovePizza = true;
let ILoveToEatHotDogs = false;
let this_is_snake_case = 'cool';
let this-is-kebab-case = 'cool';
```


## Code Quality Tooling

- Use _ESLint_ and _Prettier_.
- **ESLint** is a Javascript linting tool for identifying and reporting potential issues on your codes
- **Prettier** is use to format your codes

### Installation Setup (Local)

1. Create a `package.json` file with `npm init`
2. Install everything needed by the config:

```sh
npx install-peerdeps --dev eslint-config-wesbos
```

3. Create a `.eslintrc` file in the root of your project's directory. then add:

```js
{
  "extends": [
    "wesbos"
  ]
}
```

4. Update your `settings.json` in vscode by adding these:

```js
// These are all my auto-save configs
"editor.formatOnSave": true,
// turn it off for JS and JSX, we will do this via eslint
"[javascript]": {
  "editor.formatOnSave": false
},
"[javascriptreact]": {
  "editor.formatOnSave": false
},
// tell the ESLint plugin to run on save
"editor.codeActionsOnSave": {
  "source.fixAll": true
},
// Optional BUT IMPORTANT: If you have the prettier extension enabled for other languages like CSS and HTML, turn it off for JS since we are doing it through Eslint already
"prettier.disableLanguages": ["javascript", "javascriptreact"],
```


## Types (**SNOBUS'N**)

1. String
2. Number
3. Object
4. Boolean
5. Undefined
6. Symbol (Always give us a guaranteed unique identifier inside an object)
7. Null

Everything except Object is Primitive type, Object is special one.


## Strings

- used for holding text
- 3 ways to create strings using:
    1. single (`'`) quotes: `'Genesis'`
    2. double (`"`) quotes: `"Britanico"`
    3. backticks (`` ` ``): `` `Gabiola` ``
- single (`'`) and double (`"`) quotes are the same thing
  - used for: `"she's cool"` 
  - or escaping: `'she\'s cool'`
- backticks: `` `she's so "cool"` `` -> `she's so "cool"`
- Multi-line string:
  1. single (`'`) quotes

```js
const song = 'Oh \
I like \
pizza';

console.log(song); // Oh I like pizza
```

  2. backticks (`` ` ``) which is mostly used

```js
const song = `Oh
I like
pizza`;

console.log(song); 
/*
Oh
I like
pizza
*/
```

### String concatenation and interpolation

- **Concatenation** is when two (2) or more strings combined into one using `+`, which is also use for adding two (2) numbers
- **Interpolation** is when you put a variable inside a string

```js
// Example
const name = 'Genesis';
const hello = 'Hello my name is ' + name + '. Nice to meet you.'

// Example
1 + 1 // 2
'1' + '1' // 11
1 + '1' // 11

// Example
const hello = `Hello my name is ${name}. Nice to meet you. I am ${100+1} years old.`;
console.log(hello); // Hello my name is Genesis. Nice to meet you. I am 101 years old.
```

- Backticks are also used for _tagged template literals_ and helpful for creating HTML

```js
const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`;
```


## Numbers

- There's only _one_ (1) type of number in JavaScript whether it is _integer_ (just a number) or _float_ (with decimal point)
- `typeof` operator is used to find out the data type of a variable

```js
const age = 100.5;
typeof age // number
```

- Various operators can be done such as: **Addition**, **Subtraction**, **Multiplication**, **Division**,  **Module**, and **Power**

```js
"10" * "10" // 100 (number) - converts the strings to number
```

The operations above works with _Multiplication_, _Division_ and _Subtraction_ but not in Addition, because the `+` sign is also used for concatenation.

- **Math** helper methods: `round`, `floor`, `ceil`, `random` and many others

```js
Math.round(20.5); // 21
Math.floor(20.99); // 20
Math.ceil(20.99); // 21
Math.random(); // 0.4280450510815832 will give random number between 0 and 1
```

- **Modulo** and **Power** operators

```js
const smarties = 20;
const kids = 3;
const eachKidGets = Math.floor(smarties/kids); // 6
const leftSmarties = smarties % kids; // 2
console.log(`Each kids gets ${eachKidGets}`);

2 ** 3; // 8 - power operation using power operator (**)
Math.pow(2, 3); // 8 - power operation using pow method

0.1 + 0.2 // 0.30000000000000004 See the explanation link below
```

[Floating Point Math Explanation](https://0.30000000000000004.com/)

**Note**: So, when working with money, don't store them as dollars and cents. Store all of the money in cents as you won't have to deal with fractions only whole numbers. When need to display to user, just convert them back.

- **Infinity** and **Negative Infinity**

```js
typeof Infinity; // number
typeof -Infinity; // number
```

- **Not a Number (NaN):**

```js
10 / 'dog' // NaN
typeof NaN // number
```


## Object

- Everything in JavaScript is an Object.
- Objects are used for collections of data, collection of functionality.
- Order of properties doesn't matter in an object
- **Accessing properties**: using dot notation

```js
const person = {
  first: 'Genesis', // property: value
  last: 'Gabiola',
  age: 100
};

typeof person // object

person.age = 101; // dot noation
console.log(person.age); // 101
```

- **Symbol** is one of the data types, and it's a unique identifier in general in Javascript


## Null and Undefined

- **Null** is used to express _nothing_ in JavaScript
- **Undefined** is when you declare a variable, and don't set anything to it, then it is automatically set to `undefined`
  - when you try to access a variable that is created but not defined/set a value, you will get `undefined`
  - `const` declaration variables without an assignment will get an error, so it cannot be `undefined`

```js
let dog;
console.log(dog); // undefined
```

- **null:** value of nothing

```js
const somethingNull = null; // you have explicitly set the value to be nothing with null
```


## Booleans and Equality

- A **boolean** variable can be either `true` or `false` (on and off)
- Used for logic like **if statements**, they can be manually set or calculated

```js
const age = 18;
const ofAge = age > 18;
console.log(ofAge); // false
```

- `=` is used for assignment/ updating values

```js
let name = 'Soumya';
name = 'Raja';
```

- `==` and `===` are used for equality comparison.
- `==` only check the _values_, but `===` will check both _types_ and _values_
- **Note**: _almost always_ use strict equality (`===`)

```js
10 == "10" // true as values are same
10 === "10" // false as values are same but types are not
```
