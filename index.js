// importing the fetch module from node-fetch
//import fetch from 'node-fetch';

// using ES5 syntax
const fetch = require('node-fetch');

//API CALLS
async function start() {
    let apiObj = await fetch("https://covid-api.mmediagroup.fr/v1/cases"); // fetches data from APi
    let apijson = await apiObj.json(); // convert Data to JSON format
    // ||function calls|| //
    // Gets info for the gh placeholder
    getGhData(apijson.Ghana);

    // gets info for the world placeholder
    getWoData(apijson.Global);
    
    // creates a dropdownlist of countries
    createCountryList(apijson);
}

// function thisStart() {
//     fetch("https://covid-api.mmediagroup.fr/v1/cases")
//         .then(apiObj => apiObj.json())
//         .then(apidata => JSON.stringify(apidata))
//     console.log(apidata);
// }

//thisStart();
// The fetch entry point
start();

// Getting Info on Ghana
function getGhData(ghData) {
    // grabbing the placeholders
    let ghconfirmed = document.getElementById("gh-recorded-cases"); // Confirmed Cases
    let ghRecovered = document.getElementById("gh-recovery-cases"); // Recovered Cases 
    let ghDeath = document.getElementById("gh-DEATH-cases"); // Death Cases

    // setting the values of the placeholders to the values from the API
    ghconfirmed.innerHTML = ghData.All.confirmed; // confirmed Cases
    ghRecovered.innerHTML = ghData.All.recovered; // Recovered Cases
    ghDeath.innerHTML = ghData.All.deaths; // Death Cases
}

// Getting Info on world
function getWoData(woData) {
    // grabbing the placeholders
    let woConfirmed = document.getElementById("wo-recorded-cases"); // Confirmed Cases
    let woRecovered = document.getElementById("wo-recovery-cases"); // Recovered Cases 
    let woDeath = document.getElementById("wo-DEATH-cases"); // Death Cases

    // setting the values of the placeholders to the values from the API
    woConfirmed.innerHTML = woData.All.confirmed; // confirmed Cases
    woRecovered.innerHTML = woData.All.recovered; // Recovered Cases
    woDeath.innerHTML = woData.All.deaths; // Death Cases
}

// Create a dropdown list from the API data
function createCountryList(data){


}