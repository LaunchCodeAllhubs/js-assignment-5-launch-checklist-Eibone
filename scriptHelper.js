// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
        <h2>Mission Destination</h2>
        <ol>
            <li>Name: ${name}</li>
            <li>Diameter: ${diameter}</li>
            <li>Star: ${star}</li>
            <li>Distance from Earth: ${distance}</li>
            <li>Number of Moons: ${moons}</li>
        </ol>
        <img src="${imageUrl}">
    `;
}

function validateInput(testInput) {
    trimInput = testInput;

    if (trimInput === "") {
        return "Empty";
    }
    trimInput = Number(trimInput);
    if (!isNaN(trimInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
    alert("All fields are required!");
   }

    if (validateInput(pilot) === "Is a Number" && validateInput(copilot) === "Is a Number") {
        alert("Pilot and Copilot must be valid strings!");
        if (validateInput(fuelLevel) === "Not a Number" && validateInput(cargoLevel) === "Not a Number") {
            alert("Fuel and Cargo must be numbers!");
        } 
    }
    const pilotStatusCheck = document.getElementById("pilotStatus");
    const copilotStatusCheck = document.getElementById("copilotStatus");
    const launchStatusCheck = document.getElementById("launchStatus");
    const fuelStatusCheck = document.getElementById("fuelStatus");
    const cargoStatusCheck = document.getElementById("cargoStatus");

    pilotStatusCheck.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatusCheck.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";
    
    if (fuelLevel < 10000 || cargoLevel > 10000) {
        launchStatusCheck.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusCheck.style.color = "rgb(199, 37, 78)";
        
        if (fuelLevel < 10000) {
            fuelStatusCheck.innerHTML = "Fuel level too low for launch";
            } else {
                fuelStatusCheck.innerHTML = "Fuel level high enough for launch";
        } if (cargoLevel > 10000) {
            cargoStatusCheck.innerHTML = "Cargo mass too heavy for launch";
            } else {
                cargoStatusCheck.innerHTML = "Cargo mass low enough for launch";
            }
    } else {
        launchStatusCheck.style.color = "rgb(65, 159, 106)";
        launchStatusCheck.innerHTML = "Shuttle is Ready for Launch";
        fuelStatusCheck.innerHTML = "Fuel level high enough for launch";
        cargoStatusCheck.innerHTML = "Cargo mass low enough for launch";
        }

    }
        



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
    });

    return planetsReturned;
}

function pickPlanet(planets) {
    let pick = Math.floor(Math.random() * planets.length);
    return planets[pick];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
