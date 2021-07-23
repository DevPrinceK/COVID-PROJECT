// LOADING THE REQUIREMENT FOR THE FETCH API
let fetch = require('node-fetch');

// GETTING THE DATA
async function getJunkData() {
    // fetching the whole data
    let junkData = await fetch("https://covid-api.mmediagroup.fr/v1/cases");

    // converting the data to JSON
    let jsonData = await junkData.json();

    //

}


// Display data in console
function displayData(data) {
    console.log();
}