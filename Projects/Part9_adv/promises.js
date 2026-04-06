function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject("Error fetching data");
            }
        }, 3000);
    });
}

// Corrected chaining of .then() and .catch()
fetchData()
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
