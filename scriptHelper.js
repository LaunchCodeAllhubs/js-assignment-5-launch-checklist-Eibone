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

    if (!isNaN(trimInput)) {
        return "Is a Number";
    } else {
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if (pilot === "" || copilot === "" || fuelLevel === "" || cargoLevel === "") {
    alert("All fields are required!");
    return;
   }

   const pilotValidation = validateInput(pilot);
   const copilotValidation = validateInput(copilot);

    if (pilotValidation === "Not a Number" && copilotValidation === "Not a Number") {
        fuelLevelValidation = validateInput(fuelLevel);
        cargoLevelValidation = validateInput(cargoLevel);

        if (fuelLevelValidation === "Is a Number" & cargoLevelValidation === "Is a Number") {
            fuelLevelValidation = Number(fuelLevel);
            cargoLevelValidation = Number(cargoLevel)
        } else {
            alert("Fuel and Cargo must be numbers!");
            return;
        }
    } else {
        alert("Pilot and Copilot must be valid strings!");
        return;
    }
    const pilotStatusCheck = document.getElementById("pilotStatus");
    const copilotStatusCheck = document.getElementById("copilotStatus");
    const launchStatusCheck = document.getElementById("launchStatus");
    const faultyItemsCheck = document.getElementById("faultyItems");
    const fuelStatusCheck = document.getElementById("fuelStatus");
    const cargoStatusCheck = document.getElementById("cargoStatus");

    pilotStatusCheck.innerHTML = `Pilot ${pilot} is ready for launch`;
    copilotStatusCheck.innerHTML = `Co-pilot ${copilot} is ready for launch`;

    if (fuelLevel < 10000 || cargoLevel > 10000) {
        launchStatusCheck.innerHTML = "Shuttle Not Ready for Launch";
        launchStatusCheck.style.color = "rgb(199, 37, 78)";
        fuelStatusCheck.innerHTML = "Fuel level too low for launch";
        cargoStatusCheck.innerHTML = "Cargo mass too heavy for launch";
        faultyItemsCheck.style.visibility = "visible";
        } else if (cargoLevel > 10000) {
            launchStatusCheck.innerHTML = "Shuttle Not Ready for Launch";
            launchStatusCheck.style.color = "rgb(199, 37, 78)";
            cargoStatusCheck.innerHTML = "Cargo mass too heavy for launch";
            fuelStatusCheck.innerHTML = "Fuel level high enough for launch";


            } else if (fuelLevel < 10000) {
                launchStatusCheck.innerHTML = "Shuttle Not Ready for Launch";
                launchStatusCheck.style.color = "rgb(199, 37, 78)";
                fuelStatusCheck.innerHTML = "Fuel level too low for launch";
                cargoStatusCheck.innerHTML = "Cargo mass low enough for launch";

                } else {
                    launchStatusCheck.style.color = "rgb(65, 159, 106)";
                    launchStatusCheck.innerHTML = "Shuttle is Ready for Launch";
                    fuelStatusCheck.innerHTML = "Fuel level high enough for launch";
                    cargoStatusCheck.innerHTML = "Cargo mass low enough for launch";
                    faultyItemsCheck.style.visibility = "visible";
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
