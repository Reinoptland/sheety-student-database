const axios = require("axios")

// console.log(axios)



// 1 ms seconde later

// - we krijgen data (JSON)
// - WE KRIJGEN EEN PROMISE!
// Promise { <pending> }

async function getCrypto(){
    const response = await axios.get("https://api.coincap.io/v2/assets")
    console.log(response) // wat krijgen we terug??
}

getCrypto()