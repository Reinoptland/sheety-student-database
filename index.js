const axios = require("axios")

// console.log(axios)



// 1 ms seconde later

// - we krijgen data (JSON)
// - WE KRIJGEN EEN PROMISE!
// Promise { <pending> }

async function getCrypto(){
    console.log("LETS MAKE A REQUEST")
    const response = await axios.get("https://api.coincap.io/v2/assets")
    console.log(response.status) // wat krijgen we terug??
    console.log("REQUEST IS DONE")
}

console.log("HALLO STUDENTS")

getCrypto()

console.log("CRYPTOS ARE COOL")

// Voorspellingen:
// Hallo students, lets make a request, status, request is done, cryptos are coool
// Hallo students, lets make a request, cryptos are cool, request is done