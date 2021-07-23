// importing the fetch module from node-fetch
import fetch from 'node-fetch';

// API CALLS
async function start() {
    let apiObj = await fetch("https://covid-api.mmediagroup.fr/v1/cases"); // fetches data from APi
    let apijson = await apiObj.json(); // convert Data to JSON format

    // function calls

    document.getElementById('gh-recorded-cases').innerHTML = ghData.All.confirmed;


    getGhData(apijson.Ghana);
    //display(apijson.Ghana);
}

// this is a change------
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

    // debugging
    //console.log(`Confirmed: ${ghconfirmed}`);
    //console.log(`Recovered: ${ghRecovered}`);
    //console.log(`Death: ${ghDeath}`);

    // debugging
    //console.log(`Confirmed: ${ghData.All.confirmed}`);
    //console.log(`Recovered: ${ghData.All.recovered}`);
    //console.log(`Death: ${ghData.All.deaths}`);

}