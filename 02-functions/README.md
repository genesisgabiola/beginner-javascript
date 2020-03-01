# Functions

- [Built in Functions](#built-in-functions)
- [Custom Functions](#custom-functions)
- [Parameters and Arguments](#parameters-and-arguments)
- [Different Ways to Declare Functions](#different-ways-to-declare-functions)
- [Debugging](#debugging)


## Built in Functions

- Functions allows us to _group together multiple statements_ take in some values, perform some operations and return some value
- Functions take in data known as _arguments_
- Function may or may not _return_ a value

  ```js
  Math.max(10, 12); // 12
  ```

  10 and 12 passed to the function are arguments, separated by comma (`,`) and 12 is _returned_ from the function.

- There are many built-in JavaScript functions
  - `console.log('hey');` returns `undefined` and logs `hey`
  - `parseFloat('2.032565')` converts string to number
  - `parseInt('2.032565')` converts string to whole number as integer
  - Many date functions, E.g., `Date.now()` returns number of milliseconds since January 1, 1970 00:00:00 UTC
  - DOM functions
    - `navigator.vibrate()` is mobile only functions
    - `scrollTo(0, 200)` which scrolls to (x, y) position in page
- **Note**: Always refer to MDN Docs


## Custom Functions

- Functions are _created_/_defined_ then they are _called_
- Defining and calling a function:

  ```js
  // Function definition
  function calculateBill() {
    // this is the function body
    console.log('Running calculateBill');
  }

  // Function Call or Run
  calculateBill(); // running calculateBill (returns undefined)
  ```

- Variables created inside a function are not available outside the function
  - It is a **temporary variable**. When function is done running, the variable is cleaned up or garbage-collected
- Returning value from function

  ```js
  function calculateBill() {
    const total = 100 * 1.13;
    return total; // total is returned
  }
      
  calculateBill(); // returns 112.999999999
  ```

- Capturing returned value from a function into a variable

  ```js
  const myTotal = calculateBill(); // 112.999999999
  ```


## Parameters and Arguments

- Parameters are like _placeholders_ for data that will be passed to a function
- Arguments are the _actual values_ passed to a function while calling it
    
  ```js
  function calculateBill(billAmount, taxRate) { // billAmount, taxRate are parameters
    const total = billAmount + billAmount * taxRate 
    return total;
  }
  
  calculateBill(100, 0.13); // 100, 0.13 are arguments
  ```

- Parameters are variables local to the function and only available inside the function
- We can pass variables as arguments during a function call
- We can also pass _expressions_ as arguments to a function

  ```js
  myTotal3 = calculateBill(20 + 20 + 30, 0.3);
  ```

- So, we can either pass direct value or variables holding value or expressions resulting in a value to a function as arguments
- **Passing functions as arguments**:

  ```js
  function doctorize (name) { 
    return `Dr. ${name}`;
  }
  
  function yell (name) {
    return `HEY ${name.toUpperCase()}`;
  }
  
  // We can pass a function inside another
  yell(doctorize('Genesis')); // HEY DR. GENESIS
  // Returned value of doctorize function is passed to yell function
  ```

- **Default values** is when we don't pass any argument to a function, then it will take the default value we set in function definition

  ```js
  function yell (name = 'Silly Goose') {
    return `HEY ${name.toUpperCase()}`;
  }
  
  yell('Genesis') // HEY GENESIS
  yell() // HEY SILLY GOOSE
  ```

- **Note**: Set the argument to `undefined` to apply the default value set to it

  ```js
  function calculateBill(billAmount, taxRate = 0.13, tipRate = 0.15) {
    console.log('Running Calculate Bill!');
    const total = billAmount + billAmount * taxRate + billAmount * tipRate;
    return total;
  }
  
  // Example we want to pass the tipRate but not the taxRate and want taxRate to be default, we can do it like this:
  calculateBill(100, undefined, 0.66);
  ```


## Different Ways to Declare Functions

Functions are _First class citizens_, javaScript functions are values in themselves. Stored in variables and passed into other functions, just like any other piece of data in JavaScript.

### Function Keyword

- Declared with function keyword are called **hoisted**, javaScript _hoists_ or puts them at the top of the file before the function call
- Executing this function before it is defined will get no error and function will executed successfully

```js
function doctorize(firstName) {
  return `Dr. ${firstName}`;
}
```

### Anonymous Function (function without name)

- Used in _callbacks_ and _Immediately Invoked Function Expressions (IIFE)_

```js
function (firstName) {
  return `Dr. ${firstName}`;
}
```

### Function Expression

- Anonymous function inside a variable
- Variable functions are **not hoisted**, javaScript doesn't _hoist_ or put them at the top of the file before the function call
- Running this function before it is defined will get an error and the function will fail to execute

```js
const doctorize = function(firstName) {
  return `Dr. ${firstName}`;
};
```

### Arrow Functions

- Concise, shorter syntax, one liner function
- Don't have own scope in refer to `this` keyword
- Anonymous functions
- _Implicit return_:

  ```js
  const add = (a, b = 3) => a + b;
  const inchToCM = inches => inches * 2.54; // if only have 1 parameter, omit the ()
  ```

- _Implicitly returning an object_:

  ```js
  const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });
  ```

### Immediately Invoked Function Expression (IIFE)

- Parantheses run first in JavaScript, that's why function is wrapped in `()` immediately runs

```js
(function(age) {
  return `You are cool and age ${age}`;
})(10);
// The argument passed is 10 for parameter age
```

### Methods

- A function which lives inside an object
- E.g., `console.log()` where `console` is the object and `log` is the function
- 2 ways to define methods

  ```js
  const genesis = {
    name: 'Genesis Gabiola',
    // Method
    sayHi: function() {
      console.log(`Hey ${this.name}`);
      return 'Hey Genesis';
    },
    // Short hand Method
    yellHi() {
      console.log('HEY GENESISSSS');
    },
    // Arrow function
    wisperHi: () => {
      console.log('hii genesisss im a mouse');
    },
  };
  ```

### Callback Functions

- Function that is passed to another function used for something that will happen when something is done
- Referencing method without `()` so that it will not run immediately, only when the event is accomplished

```js
// Click Callback
const button = document.querySelector('.clickMe');

function handleClick() {
  console.log('Great Clicking!!');
}

// Outside of the handler
button.addEventListener('click', handleClick);

// Passing anonymous function directly
button.addEventListener('click', function() {
  console.log('Nice Job!!!');
});

// Timer Callback
setTimeout(() => {
  console.log('DONE! Time to eat!');
}, 1000);
// it runs the console.log after each 1 sec or 1000 milliseconds
```


## Debugging

There are 2 aspects to debugging:

1. Debugging Tools
2. Mindset to tackle errors/bugs etc

### Console Methods
    
- Most basic form of debugging
- `log` for normal logging
- `info` is just similar to `log`
- `error` is used for throwing/handling errors (changes the look of logs in console and gives a stacktrace)
- `warn` is similar to `error` but used for warnings (only w/ UI difference that shows exclamation)
- `table` is useful when we have data in array of objects where the objects have same keys/properties, it formats it in a nice table
    
  ```js
  // For this data, we get below output in console:
  const people = [
    { name: "Genesis", cool: true, country: "America" },
    { name: "David", cool: true, country: "Canada" },
    { name: "Snickers", cool: false, country: "Dog Country" }
  ];
  
  people.forEach((person, index) => {
    console.table(person.name);
  });
  ```
    
- `count` show how many times a function is run
  - useful when we want to check why a function is running more times like `hover` element method triggering too many times
  - counting is based on what string we pass
    
  ```js
  function doctorize(name) {
    console.count(`Running doctorize for ${name}`);
    return `Dr. ${name}`;
  }
  
  // console:
  > doctorize('Genesis')
  Running doctorize for Genesis: 1
  < Dr. Genesis
  > doctorize('Genesis')
  Running doctorize for Genesis: 2
  < Dr. Genesis
  > doctorize('snickers')
  Running doctorize for snickers: 1
  < Dr. Genesis
  > doctorize('Genesis')
  Running doctorize for Genesis: 3
  < Dr. Genesis
  ```
    
- `group` or `groupCollapsed` will group logs in a collapsible group
    
  ```js
  function doALotOfStuff() {
    console.group('Doing some stuff');
    console.log('Hey Im one');
    console.warn('watch out!');
    console.error('hey');
    console.groupEnd('Doing some stuff');
  }
  doALotOfStuff();
  ```
        
### Call Stack or Stack Trace

Tells us what function called what function called what function and so on..
    
```js
function doctorize(name) {
  return `Dr. ${name}`;
}

function greet(name) {
  doesntExist(); // Cause an error
  return `Hello ${name}`;
}

function go() {
  const name = doctorize(greet('Genesis'));
  console.log(name);
}
```
    
In this above example, `doesntExist` function doesn't exist, which will cause an error, when we run the `go()` function:

```
debugging.js:47 Uncaught ReferenceError: doesntExist is not defined
  at greet (debugging.js:47)
  at go (debugging.js:52)
  at <anonymous>:1:1
```
    
The error says that this error occurred at line 47 in function `greet`. `greet` was called by `go` at line 52.

The `anonymous 1:1` will only show when we run the function in the console, otherwise it would have shown the filename and line number. from where we would have called the function in code.
    
### Grabbing Elements
    
If we select something using the _Elements_ tab in dev tools, and then flip over to _Console_ tab, then we run `$0`, then we get returned that selected item.

There are shorthand selectors that we can use in browser's console, but we can't use in code:

- `$0` returns the selected element
- `$1` returns the last selected element
- `$2` returns the second last selected element
- `$` is equal to `querySelector`
- `$$` is equal to `querySelectorAll`
- They help us to select things based on selectors
    
```js
$('p') // selects first p element that matches
    
$$('p') = document.querySelectorAll('p') // selects all p elements that match
```    
    
### Breakpoints
    
To pause JavaScript from running at a certain line of code, we can write `debugger;`. The pausing of JavaScript only works when the DevTools is open. It helps us to peer into JavaScript at that very moment.

It shows us the call stack, values of local variables at that time and other useful stuff.

- _play_/_pause script execution_: will runs JS till the next time `debugger;` is encountered in code
- _step over next function call_ runs the code line by line

**Note**: We can also set breakpoints from the browser manually in _Sources_ tab.
    
### Network Requests

To see the network requests, go to the _Network_ tab in Devtools.

- We can see a lot of different files that are needed in order for the current site to work
- We can see the information (raw data) about the actual request

### Break on Attribute
    
We can select an element in _Elements_ tab and right click on it to select **_break on > attribute modifications._** It means, when somebody changes its attributes, then there will be a breakpoint.
    
### Other types of breakpoints

In _Sources_ tab, there are other type of breakpoints like mouse click, keyboard events, XHR or fetch breakpoints (breakpoint when a XHR request is made) etc.
