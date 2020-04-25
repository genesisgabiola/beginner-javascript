# Working with HTML and CSS

- [Introduction to the document](#introduction-to-the-document)
- [Selecting Elements](#selecting-elements)
- [Element Properties and Methods](#element-properties-and-methods)
- [Working with Classes](#working-with-classes)


## Introduction to the document

JavaScript is used in all kinds of places. The most popular way we get introduced to JS is through web browser.

When we view HTML in the browser, the browser turns the HTML into the **Document Object Model (DOM)**. We can see the DOM in the Elements tab in Dev Tools.

A big part of working with JavaScript in the Web Browser is interacting with elements on a page such as:

- Clicks
- Scrolls
- Add/remove or modify elements
- Add/remove classes to the elements to trigger css animations
- Fetch a new data
- Play music and videos

**Note**: Very helpful to understand the concepts of the DOM like events, elements and classes when you are planning to use a JavaScript framework.

### The `window` object

- Global scope of the browser
- Where all the global variables are stored
- Helpful properties like:
  - `location` displays the current tab location
  - `innerWidth` displays the actual width of the browser
- It is everything about the currently open window including browser bar. tabs, scrollbars, etc

### The `document` object

- Responsible for everything starting `<!DOCTYPE html>`, `<html>` to `</html>`
- Not concerned with browser bar, tabs, scrollbars, etc

### The `navigator` object

- Higher level than `window` object
- Displays information about the browser
- Including the connected device itself, like webcam, audio, battery level, GPS coordinates, and other specific features live on navigator


## Selecting Elements

**Note**: Always load scripts before the closing body tag (`</body>`) when selecting elements on the page. All elements must be loaded first before we start selecting them in JavaScript. We get `null` if we try to grab elements placing the `<script>` tag in the `<head>` because the elements are not yet created when the JavaScript is run.

**Alternative**: When `<script>` is in the `<head>`.

- Use defer and async
- Listen for the `DOMContentLoaded` event and then try to select elements from the page

### `querySelector()` and `querySelectorAll()` method

- `querySelector()` returns the first match element
- `querySelectorAll()` returns all matches as a **NodeList** (like array but without array helper functions)

In `querySelector()` and `querySelectorAll()`, the argument we pass are almost exactly the same as CSS Selectors.

- `.item` (element with class of item) or `div.item` (div with class of item)
- **Parent-child selector** to grab images inside div with class item (`'.item img'`)

**Note**: We also have dated ways of selecting elements from DOM like `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, and etc.


## Element Properties and Methods

If we do `console.dir()` method after selecting an element then we can see that the selected element is actually an object and we can see the object properties.

We can use these properties as either _getters_ or _setters_.

- _getter_ is to when you display the content
- _setter_ is when you update the content 
- `textContent` property gets all the element including script and style elements
- `innerText` property only shows human readable elements
- `innerHTML` property is used to get or set the HTML content of an element
- `outerHTML` property is used to get the specified HTML element including all its descendant content or replace the contents in an element
- `insertAdjacentText()` method inserts a given text node at a given position relative to the element it is invoked upon
  - **positon**
    - `beforebegin`
    - `afterbegin`
    - `beforeend`
    - `afterend`
  - **element**: represeting the text to be inserted
- **Elements** are wrapped in a tags
- **Nodes** can be anything

### References

- [Element properties & methods](https://developer.mozilla.org/en-US/docs/Web/API/Element)
- [Node properties & methods](https://developer.mozilla.org/en-US/docs/Web/API/Node)


## Working with Classes

- select elements class using `getElementsByClassName()` or `querySelector() method`
- `classList()` property returns a **DOMTokenList** collection of the class attributes of the element
- **DOMTokenList** is an array-like object with a length property and you can index it to retrieve the individual tokens
- **DOMTokenList prototype** displays the lists of methods that can be call against the selected `classList()`
- `add()` method adds _token_ or a class to the list
- `remove()` method adds _token_ or a class to the list
- `toggle()` method removes a given token from the list then return false and if token doesn't exist it's added and the function returns true
- `contains()` method returns a **Boolean**, true if the underlying list contains the given token/class, otherwise false
- `className` property gets and sets the value of the class attribute of the specified element
