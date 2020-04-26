# Working with HTML and CSS

- [Introduction to the document](#introduction-to-the-document)
- [Selecting Elements](#selecting-elements)
- [Element Properties and Methods](#element-properties-and-methods)
- [Working with Classes](#working-with-classes)
- [Build in and Custom Data Attributes](#build-in-and-custom-data-attributes)
- [Creating HTML](#creating-html)
- [HTML from Strings and XSS](#html-from-strings-and-xss)


## Introduction to the document

JavaScript is used in all kinds of places. The most popular way we get introduced to JS is through web browser.

When we view HTML in the browser, the browser turns the HTML into the **Document Object Model (DOM)**. We can see the DOM in the Elements tab in Dev Tools.

A big part of working with JavaScript in the Web Browser is interacting with elements on a page such as:

- clicks
- scrolls
- add/remove or modify elements
- add/remove classes to the elements to trigger css animations
- fetch a new data
- play music and videos

**Note**: Very helpful to understand the concepts of the DOM like events, elements and classes when you are planning to use a JavaScript framework.

### The `window` object

- global scope of the browser
- where all the global variables are stored
- helpful properties like:
  - `location` displays the current tab location
  - `innerWidth` displays the actual width of the browser
- it is everything about the currently open window including browser bar. tabs, scrollbars, etc

### The `document` object

- responsible for everything starting `<!DOCTYPE html>`, `<html>` to `</html>`
- not concerned with browser bar, tabs, scrollbars, etc

### The `navigator` object

- higher level than `window` object
- displays information about the browser
- including the connected device itself, like webcam, audio, battery level, GPS coordinates, and other specific features live on navigator


## Selecting Elements

**Note**: Always load scripts before the closing body tag (`</body>`) when selecting elements on the page. All elements must be loaded first before we start selecting them in JavaScript. We get `null` if we try to grab elements placing the `<script>` tag in the `<head>` because the elements are not yet created when the JavaScript is run.

**Alternative**: When `<script>` is in the `<head>`.

- use `defer` and `async`
- listen for the `DOMContentLoaded` event and then try to select elements from the page

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


## Build in and Custom Data Attributes

Attributes are provided to the element as additional information.

- standard attributes, E.g., `class`, `src`, `alt`, `title`, `width`, `height`, etc
- `getAttribute()` method to display the content of the selected attribute
- `setAttribute()` method used to set an attribute and content
- `hasAttribute()` method returns Boolean true or false, if it is set or not
- difference between `setAttribute()` method and dot notation by setting and getting a property on the object
  - `setAttribute()` also worked for things that are not standard attributes
- `data-` attributes are used when you want to create your own custom attributes to attached data to an element
- `dataset` property displays an object with property values
 it has
 
**Note**: You should not set or make a non-standard attributes, it may clash on your legacy codes with actual standard attributes, which leads to some bugs


## Creating HTML

- `createElement()` method creates the HTML element
- `appendChild()` method is used to add a node to the end of the list of children of a specfied parent node
- `body` element is already available by default through the `document` object as its property
- **Note**: If you do a lot of appending, better to put the last append for everything at the end of `appendChild` to only cause 1 load for it
- `append()` method inserts a set of Node objects after the last child of the ParentNode
- `insertAdjacentElement()` method inserts a given element node at a given position relative to the element it is invoked upon
  - **positon**
    - `beforebegin`
    - `afterbegin`
    - `beforeend`
    - `afterend`
  - **element**: represeting the element to be inserted
- `cloneNode()` method returns a duplicate of the node on which method was called


## HTML from Strings and XSS

- create the HTML with text, then insert the HTML into an item
- if its a valid HTML, the browser will parse it and turn it into all of the items
- using backticks instead of a regular quotations alows us to have a multiple lines
- using backticks we can do **interpolation**, which allows us to inject variables or values directly into a string
- adding indentation when creating HTML inside backticks gives a better readablity of our code
- doing this kind of approach has some downsides
  - creating HTML with backticks or strings gives us a `typeof` strings
  - meaning you can't do things with properties and method on it, which gives us an error like `Cannot read property...` or `undefined`
- `createRange()` method returns a new `Range` object
- `Range` represents a fragments of a document that can contain nodes and parts of text nodes
- `createContextualFragment()` method returns a `DocumentFragment` by invoking the HTML fragment
- `DocumentFragment` represents a minimal document object that has no parent, which we can access now as DOM elements
- use appends or insertAdjacent to display them in the document
- **Cross-site Scripting (XSS)** is a client-side code injection attack.
