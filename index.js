// console.log("first")
// function fetchData(callback) {
//     setTimeout(() => {
//         callback('Data received');
//     }, 1000);
// }

// console.log("second")

// function displayData(data) {
//     console.log(data);
// }

// fetchData(displayData); // Logs "Data received" after 1 second



const fetchData = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('Data received');
    // }, 1000);
    setTimeout(() => {
        resolve('Data encountered error');
    }, 2000);

});

fetchData
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    }); 