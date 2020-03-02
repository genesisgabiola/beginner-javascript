# The Tricky Bits

- [Scope](#scope)


## Scope

Scope answers the question: _"Where are my variables and functions available to me?"_

### Global Variables

Available anywhere, these are not created inside a function, module, if statement etc.

```js
const first = 'Genesis' // first is a global variable
```

In the browser, the global scope is called _window_. `setTimeout` and `setInterval` methods are available on the _window_ object.

```js
const first = 'Genesis';
let second = 'Gabiola';
var third = 100;

console.log(window.first); // undefined
console.log(window.second); // undefined
console.log(window.third); // 100
```

`var` variables are attached to the window object and are globally scoped, whereas `const` and `let` variables are globally scoped but not attached to the _window_ object.

Anything except `let` and `const` declared things which are globally declared are attached to _window_ object.

```js
function sayHi() {
  console.log('HI');
}

sayHi(); // HI
window.sayHi(); // HI
```

**Note**: Using global scoped variables are not advised in general.

```js
const age = 100;
function go() {
  const cool = true;
}
go();

console.log(age); // 100
console.log(cool); // Uncaught ReferenceError: cool is not defined
```

Above, `cool` is function-scoped. Function scoping means anything declared inside of a function is only accessible inside the function and not outside (unless we return it from the function and store the returned value in a variable when the function is run)

**Scope Lookup:** If variables are not found inside a function, it goes a level higher to look for the variable in that scope and if it's not available in that scope as well, it goes another level higher.

```js
const age = 100;
function go() {
  const hair = 'blonde';
  console.log(age); 
  console.log(hair); 
}
go();

// Output:
// 100 (variable age is not declared inside go function scope it, so goes a level higher to find it)
// blonde

const age = 100;
function go() {
  const hair = 'blonde';
  const age = 200; // global variable age has been shadowed by this variable
  console.log(age); 
  console.log(hair); 
}
go();

// Output:
// 200 (variable age in go function scope)
// blonde
```

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
