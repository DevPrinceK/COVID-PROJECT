// importing the fetch module from node-fetch
//import fetch from 'node-fetch';

// using ES5 syntax --> importing the fetch module
const fetch = require('node-fetch');

// grabbing the placeholders for GHANA
let ghconfirmed = document.getElementById("gh-recorded-cases"); // Confirmed Cases
let ghRecovered = document.getElementById("gh-recovery-cases"); // Recovered Cases 
let ghDeath = document.getElementById("gh-death-cases"); // Death Cases
let ghActive = document.getElementById("gh-active-cases"); // Active Cases

// grabbing the placeholders for WORLD
let woConfirmed = document.getElementById("wo-recorded-cases"); // Confirmed Cases
let woRecovered = document.getElementById("wo-recovery-cases"); // Recovered Cases 
let woDeath = document.getElementById("wo-death-cases"); // Death Cases
let woActive = document.getElementById("wo-active-cases"); // Active Cases

// grabbing the placeholders for AFRICA
let afConfirmed = document.getElementById("af-recorded-cases"); // Confirmed Cases
let afRecovered = document.getElementById("af-recovery-cases"); // Recovered Cases 
let afDeath = document.getElementById("af-death-cases"); // Death Cases
let afActive = document.getElementById("af-active-cases"); // Active Cases

// grabbing the placeholder for ARBITRARY COUNTRY
let otConfirmed = document.getElementById("ot-recorded-cases"); // Confirmed Cases
let otRecovered = document.getElementById("ot-recovery-cases"); // Recovered Cases 
let otDeath = document.getElementById("ot-death-cases"); // Death Cases
let otActive = document.getElementById("ot-active-cases"); // Active Cases



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
    //createCountryList(apijson);
}

// Set the Values for the Ghana placeholders
function getGhData(ghData) {
    // setting the values of the placeholders to the values from the API
    ghconfirmed.innerHTML = ghData.All.confirmed; // confirmed Cases
    ghRecovered.innerHTML = ghData.All.recovered; // Recovered Cases
    ghDeath.innerHTML = ghData.All.deaths; // Death Cases
}

// Getting Info on world
function getWoData(woData) {
    // setting the values of the placeholders to the values from the API
    woConfirmed.innerHTML = woData.All.confirmed; // confirmed Cases
    woRecovered.innerHTML = woData.All.recovered; // Recovered Cases
    woDeath.innerHTML = woData.All.deaths; // Death Cases
}

// Create a dropdown list from the API data
function createCountryList(data) {
    return 0;
}