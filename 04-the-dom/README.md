# Working with HTML and CSS

- [Introduction to the document](#introduction-to-the-document)


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


