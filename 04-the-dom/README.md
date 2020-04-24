# Working with HTML and CSS

- [Introduction to the document](#introduction-to-the-document)
- [Selecting Element](#selecting-element)


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


## Selecting Element

**Note**: Always load scripts before the closing body tag (`</body>`) when selecting elements on the page. All elements must be loaded first before we start selecting them in JavaScript. We get `null` if we try to grab elements placing the `<script>` tag in the `<head>` because the elements are not yet created when the JavaScript is run.

**Alternative**: When `<script>` is in the `<head>`.

- Use defer and async
- Listen for the `DOMContentLoaded` event and then try to select elements from the page

### `querySelector()`

Returns first match

```js
const p = document.querySelector('p');
```

### `querySelectorAll()`

Returns all matches as a **NodeList** (like array but without array helper functions)

```js
const p = document.querySelectorAll('p');
```

In `querySelector()` and `querySelectorAll()`, the argument we pass are almost exactly the same as CSS Selectors.

We can use things like:

- `.item` (element with class of item) or `div.item` (div with class of item)
- **Parent-child selector** to grab images inside div with class item (`'.item img'`)

**Note**: We also have dated ways of selecting elements from DOM like `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, and etc.

