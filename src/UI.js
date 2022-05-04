import { importAnimalImages } from './CreatePetScreen.js';
import { Pet } from './pet.js';
import { createStatsContainer, createIndicator } from './indicators.js';

const animalImages = importAnimalImages();
console.log(animalImages);
let currentPetSelection = 0;

// The actual pet object
let currentPet;

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



// Game Setup

const petContainer = createPetContainer();
const buttonContainer = createButtonContainer();

const gameSetup = (pet) => {

    currentPet = pet;

    petContainer.innerHTML = "";
    
    // Name
    petContainer.append(createPetNameDisplay(pet.getName()));
    
    // Age

    // Pet
    petContainer.append(displayPet(pet.getPetTypeIndex()));
    petContainer.append(createMessageContainer());

    // Stat indicator bars
    const statsContainer = createStatsContainer();
    petContainer.append(statsContainer);

    console.log(statsContainer.append(createIndicator("Health", 100)));
    statsContainer.append(createIndicator("Hunger", 50));
    statsContainer.append(createIndicator("Happiness", 0));
    statsContainer.append(createIndicator("Love", 0));

    buttonContainer.innerHTML = "";
    buttonContainer.append(createActionButton("Feed"));
    buttonContainer.append(createActionButton("Play"));
    buttonContainer.append(createActionButton("Play"));
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

// Event listeners?

document.addEventListener("click", e => {

    const action = e.target.getAttribute("data-action");

    switch (action) {

        // New Game Buttons
        case "Confirm":
            const name = document.querySelector(".pet-name-input").value;
            const newPet = new Pet(name, currentPetSelection);
            gameSetup(newPet);
            break;

        case ">":
            currentPetSelection++;
            console.log(changeDisplayedPet(currentPetSelection));
            break;

        case "<":
            currentPetSelection--;
            console.log(changeDisplayedPet(currentPetSelection));
            break;

        // Gameplay Buttons

        case "Feed":
            currentPet.feed();

            const fedLevel = document.querySelector(".Hunger");
            fedLevel.style.width = currentPet.getHunger()*10 + "%";

            break;

        case "Play":
            currentPet.play();

            const happinessLevel = document.querySelector(".Happiness");
            console.log(currentPet.getHappiness()*10);
            happinessLevel.style.width = currentPet.getHappiness()*10 + "%";
            break;
    }
});