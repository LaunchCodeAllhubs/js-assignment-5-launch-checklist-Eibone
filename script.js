// Write your JavaScript code here!

// const { pickPlanet, addDestinationInfo } = require("./scriptHelper");
function hide () {
    let hidden = document.getElementById("faultyItems");
    hidden.style.visibility = "hidden";
}
window.addEventListener("load", function() {
    const form = document.querySelector('[data-testid="testForm"]');
    const pilotInput = document.querySelector('[name="pilotName"]');
    const copilotInput = document.querySelector('[name="copilotName"]');
    const fuelLevelInput = document.querySelector('[name="fuelLevel"]');
    const cargoMassInput = document.querySelector('[name="cargoMass"]');
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilot = pilotInput.value;
        let copilot = copilotInput.value;
        let fuelLevel = fuelLevelInput.value;
        let cargoMass = cargoMassInput.value;

        formSubmission(document, listedPlanets, pilot, copilot, fuelLevel, cargoMass);
    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let selectPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, 
            selectPlanet.name, 
            selectPlanet.diameter,
            selectPlanet.star, 
            selectPlanet.distance, 
            selectPlanet.moons, 
            selectPlanet.image)
    });
   
});