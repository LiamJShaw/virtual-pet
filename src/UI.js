import { Pet } from './pet.js';
import { createStatsContainer, createIndicator } from './indicators.js';
import { savePet } from './StorageController.js';
import { checkFeedInterval, checkPlayInterval, getHungerTicksSinceLastUpdate } from './EventTimer.js';

import { importAnimalImages, createGravestone } from './ImportAnimalImages.js';

const animalImages = importAnimalImages();

// The actual pet object
let currentPet;

// Used for the image array
let currentPetSelection = 0;

const mainContainer = document.querySelector("#container");

const createPetContainer = () => {
    const petContainer = document.createElement("div");
    petContainer.classList.add("pet-container");

    mainContainer.append(petContainer);
    return petContainer;
}

const displayPet = (index) => {
    const petImage = document.createElement("img");
    petImage.classList.add("pet")
    petImage.src = animalImages[index];
    petImage.style.width = "160px";
    petImage.style.height = "160px";
    
    return petImage;
}

const changeDisplayedPet = (index) => {
    const petImage = document.querySelector(".pet");
    petImage.src = animalImages[index];
}

const createButtonContainer = () => {
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");

    mainContainer.append(buttonContainer);

    return buttonContainer;
}

const createActionButton = (action) => {
    const button = document.createElement("button");
    button.classList.add("action-button")
    button.setAttribute("data-action", action)

    button.textContent = action;

    return button;
}

const createPetNameInputBox = () => {
    const petNameInputBox = document.createElement("input");
    petNameInputBox.type = "text";
    petNameInputBox.classList.add("pet-name-input");
    petNameInputBox.placeholder = "Pet Name"

    return petNameInputBox;
}

const createPetNameDisplay = (name) => {
    const petNameDisplay = document.createElement("h1");
    petNameDisplay.classList.add("pet-name-display");
    petNameDisplay.textContent = name;

    return petNameDisplay;
}

const createMessageContainer = () => {
    const messageContainer = document.createElement("p");
    messageContainer.classList.add("message-container");

    return messageContainer;
}

const createAgeDisplay = (pet) => {
    const ageDisplay = document.createElement("h3");
    ageDisplay.classList.add("age-display");

    ageDisplay.textContent = pet.getAge();

    return ageDisplay;
}

export const updateAgeDisplay = () => {
    const ageDisplay = document.querySelector(".age-display");

    ageDisplay.textContent = currentPet.getAge();
}

export const updateStats = () => {

    // Health
    const healthStat = document.querySelector(".level.Health");
    healthStat.style.width = currentPet.getHealth()*10;

    // Hunger
    console.log(currentPet.getHunger()*10);
    const hungerStat = document.querySelector(".Hunger");
    hungerStat.style.width = currentPet.getHunger()*10+"%";

    // Happiness
    const happinessStat = document.querySelector(".level.Happiness");
    happinessStat.style.width = currentPet.getHappiness()*10;

    // Love
    const loveStat = document.querySelector(".level.Love");
    loveStat.style.width = currentPet.getLove();
}


// Game Setup

const petContainer = createPetContainer();
const buttonContainer = createButtonContainer();

export const updateButtonContainer = () => {
    buttonContainer.innerHTML = "";

    if (checkFeedInterval(currentPet)) {
        buttonContainer.append(createActionButton("Feed"));
    }

    if (checkPlayInterval(currentPet)) {
        buttonContainer.append(createActionButton("Play"));
    }
}

export const gameSetup = (pet) => {

    savePet(pet);

    currentPet = pet;

    petContainer.innerHTML = "";

    // Name
    petContainer.append(createPetNameDisplay(pet.getName()));

    // Check if pet is dead
    if (pet.getHealth < 1) {
        // Show gravestone
        petContainer.append(createGravestone());

        // Return to stop further things being created
        return;
    }
    
    // Age
    petContainer.append(createAgeDisplay(pet));

    // Pet
    petContainer.append(displayPet(pet.getType()));

    // Messages
    petContainer.append(createMessageContainer());

    // Stat indicator bars
    const statsContainer = createStatsContainer();
    petContainer.append(statsContainer);

    statsContainer.append(createIndicator("Health", pet.getHealth()*10));
    statsContainer.append(createIndicator("Hunger", pet.getHunger()*10));
    statsContainer.append(createIndicator("Happiness", pet.getHappiness()*10));
    statsContainer.append(createIndicator("Love", pet.getLove()));

    updateButtonContainer();
}


// New Pet Creation
export const newGame = () => {

    petContainer.innerHTML = "";

    petContainer.append(displayPet(currentPetSelection));
    petContainer.append(createPetNameInputBox());

    buttonContainer.append(createActionButton("<"));
    buttonContainer.append(createActionButton("Confirm"));
    buttonContainer.append(createActionButton(">"));
}

// Event listeners
document.addEventListener("click", e => {

    const action = e.target.getAttribute("data-action");

    switch (action) {

        // New Game Buttons
        case "Confirm":
            const name = document.querySelector(".pet-name-input").value;

            if (name !== "") {
                const newPet = new Pet(name, currentPetSelection, Date.now());
                gameSetup(newPet);

                // Sets the initial value so the counter can check 4 hours from now
                newPet.setLastUpdate();

            } else {
                document.querySelector(".pet-name-input").focus();
            }

            break;

        case ">":
        // This is currently a magic number based on the amount of pets currently to choose from
        // I need to look into promises/async/await stuff I think, as the value I need is undefined
            if (currentPetSelection > 1) {
                // error?
            } else {
                currentPetSelection++;
                changeDisplayedPet(currentPetSelection);
            }

            break;

        case "<":
            if (currentPetSelection > 0) {
                currentPetSelection--;
                changeDisplayedPet(currentPetSelection);
            }
            
            break;

        // Gameplay Buttons

        case "Feed":
            currentPet.feed();

            const fedLevel = document.querySelector(".Hunger");
            fedLevel.style.width = currentPet.getHunger()*10 + "%";

            currentPet.setLastFeed(Date.now());
            savePet(currentPet);
            e.target.remove();
            break;

        case "Play":
            currentPet.play();

            const happinessLevel = document.querySelector(".Happiness");
            happinessLevel.style.width = currentPet.getHappiness()*10 + "%";

            currentPet.setLastPlay(Date.now());
            savePet(currentPet);
            e.target.remove();
            break;
    }
});