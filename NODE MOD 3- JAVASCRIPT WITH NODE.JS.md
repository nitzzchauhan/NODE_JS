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

# MODULE 3: JAVASCRIPT WITH NODE.JS

## Writing Asynchronous Code
- Asynchronous code allows tasks to be performed without waiting for other tasks to complete.
- JavaScript uses the event loop to handle asynchronous operations.

### Callbacks
- A function passed as an argument to another function to be executed later.
    ```javascript
    function fetchData(callback) {
      setTimeout(() => {
        callback('Data received');
      }, 1000);
    }

    function displayData(data) {
      console.log(data);
    }

    fetchData(displayData); // Logs "Data received" after 1 second
    ```

### Promises
- Promises represent the eventual completion (or failure) of an asynchronous operation.
    ```javascript
    const fetchData = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data received');
      }, 1000);
    });

    fetchData
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
    ```

### Async/Await
- `async` functions return a promise.
- `await` can be used to wait for a promise to be resolved.
    ```javascript
    function fetchData() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Data received');
        }, 1000);
      });
    }

    async function displayData() {
      const data = await fetchData();
      console.log(data);
    }

    displayData(); // Logs "Data received" after 1 second
    ```

## Blocking vs. Non-Blocking Code
- **Blocking code** waits for a task to complete before moving on to the next task.
- **Non-blocking code** allows tasks to start while waiting for other tasks to complete.

### Blocking Code Example
- Synchronous file reading blocks the execution of further code until the file is read.
    ```javascript
    const fs = require('fs');

    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(data);
    console.log('This message is logged after the file is read.');
    ```

### Non-Blocking Code Example
- Asynchronous file reading does not block the execution of further code.
    ```javascript
    const fs = require('fs');

    fs.readFile('example.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
    });
    console.log('This message is logged before the file is read.');
    ```

## Interview Questions

### Writing Asynchronous Code
1. **What is a callback function? Provide an example.**
    - A callback function is a function passed as an argument to another function to be executed later. Example:
        ```javascript
        function fetchData(callback) {
          setTimeout(() => {
            callback('Data received');
          }, 1000);
        }

        function displayData(data) {
          console.log(data);
        }

        fetchData(displayData); // Logs "Data received" after 1 second
        ```

2. **What are Promises in JavaScript? How do they help in writing asynchronous code?**
    - Promises represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They help manage asynchronous code by providing a clearer and more flexible way to handle success and failure.

3. **Explain Async/Await with an example.**
    - `async` functions return a promise. `await` can be used to wait for a promise to be resolved. Example:
        ```javascript
        function fetchData() {
          return new Promise((resolve) => {
            setTimeout(() => {
              resolve('Data received');
            }, 1000);
          });
        }

        async function displayData() {
          const data = await fetchData();
          console.log(data);
        }

        displayData(); // Logs "Data received" after 1 second
        ```

### Blocking vs. Non-Blocking Code
1. **What is the difference between blocking and non-blocking code?**
    - Blocking code waits for a task to complete before moving on to the next task, whereas non-blocking code allows tasks to start while waiting for other tasks to complete.

2. **Provide an example of blocking code.**
    - Synchronous file reading blocks the execution of further code until the file is read.
        ```javascript
        const fs = require('fs');

        const data = fs.readFileSync('example.txt', 'utf8');
        console.log(data);
        console.log('This message is logged after the file is read.');
        ```

3. **Provide an example of non-blocking code.**
    - Asynchronous file reading does not block the execution of further code.
        ```javascript
        const fs = require('fs');

        fs.readFile('example.txt', 'utf8', (err, data) => {
          if (err) throw err;
          console.log(data);
        });
        console.log('This message is logged before the file is read.');
        ```

4. **Why is non-blocking code important in Node.js?**
    - Non-blocking code is important in Node.js because it allows the server to handle multiple requests simultaneously without waiting for one task to complete, thereby improving performance and scalability.
