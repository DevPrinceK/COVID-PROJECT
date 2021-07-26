    //script type = "module" src = "index.js" > < /script>
    // importing the fetch module from node-fetch
    //import fetch from 'node-fetch';

    // using ES5 syntax --> importing the fetch module
    //const fetch = require('node-fetch');

    // grabbing the placeholders for GHANA
    let ghConfirmed = document.getElementById("gh-recorded-cases"); // Confirmed Cases
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

    // // The select item
    // let select = document.getElementById('select-div');

    // // Adding event listener to the selected item
    // select.addEventListener("select", getOtData)

    // Variable to store the filtered Data on Africa
    let africaData;

    let apijson;

    //API CALL --> Fetching the Data from the COVID-API
    async function start() {
        let apiObj = await fetch("https://covid-api.mmediagroup.fr/v1/cases"); // fetches data from APi
        apijson = await apiObj.json(); // convert Data to JSON format

        // ||function calls|| //
        // Gets info for the gh placeholder
        getGhData(apijson.Ghana);

        // gets info for the world placeholder
        getWoData(apijson.Global);

        // get info for the Africa placeholder
        getAfricaData(apijson);

    }

    // Set the Values for the Ghana placeholders
    function getGhData(ghData) {
        // setting the values of the placeholders to the values from the API
        ghConfirmed.innerHTML = ghData.All.confirmed; // confirmed Cases
        ghRecovered.innerHTML = ghData.All.recovered; // Recovered Cases
        ghDeath.innerHTML = ghData.All.deaths; // Death Cases
        // Active = Confirmed - (recovered + death) 
        ghActive.innerHTML = ghData.All.confirmed - (ghData.All.recovered + ghData.All.deaths);
    }

    // Getting Info on world
    function getWoData(woData) {
        // setting the values of the placeholders to the values from the API
        woConfirmed.innerHTML = woData.All.confirmed; // confirmed Cases
        woRecovered.innerHTML = woData.All.recovered; // Recovered Cases
        woDeath.innerHTML = woData.All.deaths; // Death Cases
        // Active = Confirmed - (recovered + death)
        woActive.innerHTML = woData.All.confirmed - (woData.All.recovered + woData.All.deaths);
    }

    //TODO TODO Get Info on Africa
    // Converts the object to a list
    function getAfricaData(ghData) {
        // converts json/object to list
        let lstAfricaData = Object.keys(ghData).map((key) => [key, ghData[key]]);

        // Function will Extract only African Countries
        africanData(lstAfricaData);
    }

    //let afrData;
    // Extracts the African {countries} Data from the lot
    function africanData(globalData) {
        let afrData = globalData.filter(country => country[1].All.continent === "Africa");

        // // for global scope ****
        // africaData = globalData.filter(country => country[1].All.continent === "Africa");

        // Sums the total cases in Africa || confirmed, recovered, death, active
        sumAfricanCases(afrData);

        // Creates a dropdown with the extracted African Names
        dropCountryNames(afrData);
    }

    // Sums the Cases in African Countries
    function sumAfricanCases(africanData) {
        // Sum of Confirmed (recorded) Cases
        let recordedSum = africanData.reduce((total, record) => total + record[1].All.confirmed, 0);

        // Sum of Recovered Cases
        let recoveredSum = africanData.reduce((total, recover) => total + recover[1].All.recovered, 0);

        // Sum of Death Cases
        let deathSum = africanData.reduce((total, death) => total + death[1].All.deaths, 0);

        // Sum of Active Cases
        let activeSum = recordedSum - (recoveredSum + deathSum);

        // will display AFrica data in HTML
        getAfData(recordedSum, recoveredSum, deathSum, activeSum);
    }

    // DISPLAY AFRICAN CASES IN HTML
    function getAfData(record, recover, death, active) {
        // confirmed / recorded cases
        afConfirmed.innerHTML = record;

        //recovered cases
        afRecovered.innerHTML = recover;

        // death cases
        afDeath.innerHTML = death;

        // active cases
        afActive.innerHTML = active;

    }


    // MAKES A DROPDOWNLIST
    function dropCountryNames(countryNames) {
        document.getElementById('select-div').innerHTML = `
        <select onchange="getOtData(this.value)">
            <option selected>Choose A Country</option>
            ${countryNames.map(function(name){
            return `<option>${name[0]}</option>`
            }).join("")}
        </select>
        `
    }

    // Gets the data for selected country
    // triggeered when user selects a a country
    function getOtData(val) {
        otConfirmed.innerHTML = apijson[val].All.confirmed;
        otRecovered.innerHTML = apijson[val].All.recovered;
        otDeath.innerHTML = apijson[val].All.deaths;
        otActive.innerHTML = apijson[val].All.confirmed - (apijson[val].All.recovered + apijson[val].All
            .deaths)

    }