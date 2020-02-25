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
