function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: "dhruvlearnings", url: "https://dhruvlearnings.com" });
        }, 3000);
    }); // <- removed the comma and closed properly with a semicolon
}
async function getUserData() {
    try {
        console.log('Fetching user data..');
        const userData = await fetchUserData();
        console.log("USer data fetched succesfully");
        
        console.log("User data:", userData);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}
// Call the async function
getUserData();
