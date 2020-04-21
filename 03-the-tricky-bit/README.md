# The Tricky Bits

- [Scope](#scope)
- [Hoisting](#hoisting)
- [Closures](#closures)


## Scope

Scope answers the question: _"Where are my variables and functions available to me?"_

### Global Variables

Available anywhere, these are not created inside a function, module, if statement etc.

In the browser, the global scope is called _window_. `setTimeout` and `setInterval` methods are available on the _window_ object.

`var` variables are attached to the window object and are globally scoped, whereas `const` and `let` variables are globally scoped but not attached to the _window_ object.

Anything except `let` and `const` declared things which are globally declared are attached to _window_ object.

**Note**: Using global scoped variables are not advised in general.

Function scoping means anything declared inside of a function is only accessible inside the function and not outside (unless we return it from the function and store the returned value in a variable when the function is run)

**Scope Lookup:** If variables are not found inside a function, it goes a level higher to look for the variable in that scope and if it's not available in that scope as well, it goes another level higher.

**Shadow variable**: A variable is already declared in the upper scope, but declared it again inside the current scope.

### Block Scope

A set of curly brackets are referred to as a block.

```js
if (1 === 1){
  const cool = true;
}

console.log(cool);
// const Output: Uncaught ReferenceError: cool is not defined
// let Output: Uncaught ReferenceError: cool is not defined
// var Output: true (var varibales leak outside the block)
```

- To access a variable outside a block:

  ```js
  let cool;
  if (1 === 1){
    cool = true;
  }

  console.log(cool); // true
  ```

- `var` variables are _function scoped_

  ```js
  function isCool(name) {
    if (name === 'wes') {
      var cool = true;
    }
    console.log(cool);
    return cool;
  }

  isCool('wes'); // true
  ```

  `cool` was declared using `var` keyword, it was not limited within the `if` block, rather it was available inside the entire `isCool` function.

- `let` and `const` variables are _block scoped_

  ```js
  const dog = 'snickers';
  
  function logDog() {
    console.log(dog);
  }
  
  function go() {
    const dog = 'sunny';
    logDog();
  }
  
  go(); // snickers
  ```

  In the above example, `logDog` function is defined above where there is no `dog` variable inside its definition, so it goes in upper scope to find value as `'snickers'`. It doesn't care where it is run, in this case inside `go` function.

- _Lexical Scoping_ or _Static Scoping_ means _variable lookup_ or _scope lookup_ happens is where the functions are defined not where they are run

  ```js
  const dog = 'snickers';
  
  function logDog(dog) {
    console.log(dog);
  }
  
  function go() {
    const dog = 'sunny';
    logDog('Rufus');
  }
  
  go(); // Rufus
  ```

  `'Rufus'` is the output because function `logDog` creates a local variable for parameter `dog` which has value `'Rufus'` passed to it.

**Best practice**: Try not to create global variables.

### Function Scope

Variables created inside the function are only available inside the function.

Functions are scoped the exact same way as variables.

```js
function sayHi(name) {
  function yell() {
  console.log(name.toUpperCase());
  }
}
yell(); // Uncaught ReferenceError: yell is not defined
```

Just like variables, functions are scoped to the parent function. So `yell` function above is only accessible inside `sayHi` function, and not outside it.


## Hoisting

Allows us to access functions and variables _before_ they are created.

2 things that are hoisted in JavaScript:

- Function declarations
- Variable declarations

### Function hoisting

JavaScript compiler will take all function declarations and move them to the top of the file available for use.

**Best practice**: Always define functions _before_ using them.

**Note**: Functions made using a variable are not hoisted. Meaning it will display an error when you call the function before declaring it.

### Variable hoisting

JavaScript hoists the variable declaration but not the actual setting of the values or assignment.

```js
console.log(age); // undefined
var age = 10;

// JavaScript converts the code into:
var age;
console.log(age); // undefined
age = 10;
```


## Closures

Ability to access a parent (outer) level scope from a child (inner) scope even after the parent (outer) function has been _closed_/_terminated_.

### Closure creating a function

```js
function outer() {
  const outerVar = 'Hey I am the outer var!';
  
  function inner() {
    const innerVar = 'Hey I am an inner var!'
    console.log(innerVar)
    console.log(outerVar) 
  }
  return inner;
}

const innerFn = outer()
innerFn()
// Output:
// Hey I am an inner var!
// Hey I am the outer var!
```

Even though `outer` function is done running in the line `const innerFn = outer()`, the variable `outerVar` is still maintained in memory and accessible at a later time even if it is not returned. It is not cleaned up or garbage collected.

### Closure creating a private variables

```js
function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function(name) {
    return `${myGreet} ${name}`;
  }
}

const sayHello = createGreeting('hello')
const sayHey= createGreeting('hey')

console.log(sayHello('gen'))
console.log(sayHello('abby'))
console.log(sayHey('abby'))

// Output:
// HELLO gen
// HELLO abby
// HEY abby
```

The `myGreet` variable is still accessible even after `createGreeting` is done running.

```js
function createGame(gameName) {
  let score = 0;
  return function win(){
    score += 1;
    return `Your game ${gameName} score is ${score}`
  }
}

const hockeyGame = createGame('hockey')
const soccerGame = createGame('soccer')

// In console run:
// hockeyGame()
// "Your game hockey score is 1"
// hockeyGame()
// "Your game hockey score is 2"
// hockeyGame()
// "Your game hockey score is 3"
// soccerGame()
// "Your game soccer score is 1"
// soccerGame()
// "Your game soccer score is 2"
```

`score` is a _private variable_ here. We can access multiple games at once like that.
