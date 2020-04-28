# Events

- [Event Listener](#event-listener)


## Event Listener

- `addEventListener()` method sets up a function that will be called whenever the specified event is delivered to the target (usually Element, `document`, `window`)
  - method has 3 steps, get something (where you attached this method), listen for something (events like click) and do something (inside the code block)
  - 1st argument: type of event
  - 2nd argument: callback or regular function
- callback is just a regular function, but instead of us calling the function, we provide the name or reference to a function to `addEventlistener()`, then browser will run the function when it needs to
- the callback function can be names or anonymous function
- when calling the function or callback we don't need to add parentheses `()` to run it, the browser will run it when the event fires up
- `removeEventListener()` method works the same way as the `addEventListener()` but it removes the event instead of adding it
  - anonymous function cannot be remove, because there's no way to reference it
- binding is a buzz word which means taking a function and listening for a specific event against an elemen 
- use `querySelectorAll()` method to select multiple number of elements like buttons
- `forEach()` method will run a function for each item in our nodelist
  - one way to loop through multiple elements to attached an event individually
