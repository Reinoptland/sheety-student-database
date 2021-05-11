const axios = require("axios")

// console.log(axios)

const response = axios.get("https://api.coincap.io/v2/assets")

// 1 ms seconde later
console.log(response) // wat krijgen we terug??

// - we krijgen data (JSON)
// - WE KRIJGEN EEN PROMISE!
// Promise { <pending> }