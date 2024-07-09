<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML Module 4</title>
    <style>
        body {
            background-color: black;
            color: white;
        }
        h1, h2, h3, h4, h5, h6 {
            color: white;
        }
    </style>
</head>
<body>

# Module 1: Introduction to io.js

## Introduction to io.js
- **io.js**: An open-source JavaScript runtime built on Chrome's V8 JavaScript engine. It was originally a fork of Node.js and intended to provide faster and more predictable release cycles.
- **Goals**: To bring ES6 features to the developer community faster and to keep up with the changes in V8.

## What is Node.js Foundation?
- **Node.js Foundation**: An open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.
- **Purpose**: To foster and sustain the growth of Node.js and provide a central repository for open-source Node.js projects.
- **Merger**: In 2015, io.js and Node.js merged back together under the Node.js Foundation to combine their efforts.

## V8 JavaScript Engine
- **V8**: Google's open-source high-performance JavaScript and WebAssembly engine, written in C++.
- **Functionality**: Compiles JavaScript directly to native machine code before executing it, improving performance significantly.
- **Use in Node.js**: Node.js uses the V8 engine to execute JavaScript code on the server side.

## Why Server-Side JavaScript?
- **Unified Language**: Developers can use the same programming language (JavaScript) for both client-side and server-side code.
- **Non-Blocking I/O**: Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient for data-intensive real-time applications.
- **Large Ecosystem**: With npm (Node Package Manager), Node.js has a vast library of modules and packages that simplify development.
- **Scalability**: Suitable for microservices and scalable network applications.

## Code Examples

### Example 1: Basic HTTP Server in Node.js
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
```

### Example 2: Reading a File Asynchronously
```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});
```

# Interview Questions and Solutions

## 1. What is io.js and why was it created?
**Answer:**
io.js is a fork of Node.js created to address concerns about the slow pace of updates and development under Joyent's stewardship. It aimed to provide a more open governance model and faster release cycles. It later merged back with Node.js to form the Node.js Foundation.

## 2. What is the Node.js Foundation, and what are its goals?
**Answer:**
The Node.js Foundation is a collaborative project formed in 2015 by merging Node.js and io.js. Its goals are to advance the development and adoption of Node.js, provide a vendor-neutral home for the project, and implement an open governance model.

## 3. Explain the V8 JavaScript Engine and its role in Node.js.
**Answer:**
The V8 JavaScript Engine is an open-source engine developed by Google, written in C++, and used to execute JavaScript code in Google Chrome and Node.js. It compiles JavaScript directly to native machine code, ensuring fast execution and efficiency.

## 4. Why is server-side JavaScript advantageous?
**Answer:**
Server-side JavaScript offers several advantages:
- Unified language for both client and server sides.
- Non-blocking I/O model for handling concurrent requests efficiently.
- High performance due to the V8 engine.
- A large ecosystem of libraries and frameworks via npm.
- Scalability through event-driven architecture.

## 5. Write a simple HTTP server using Node.js.

```javascript
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```



## 5. APPROACH

Explanation:
This code creates a simple HTTP server in Node.js that responds with "Hello World" to every request. The http.createServer() method creates the server, and server.listen() starts it, listening on the specified hostname and port.