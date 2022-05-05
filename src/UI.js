import { importAnimalImages } from './ImportAnimalImages.js';
import { Pet } from './pet.js';
import { createStatsContainer, createIndicator } from './indicators.js';
import { savePet } from './StorageController.js';

const animalImages = importAnimalImages();

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

const createAgeDisplay = (pet) => {
    const ageDisplay = document.createElement("h3");
    ageDisplay.classList.add("age-display");

    // ageDisplay.textContent = pet.getAge();
    ageDisplay.textContent = "Age: 0";

    return ageDisplay;
}


// Game Setup

const petContainer = createPetContainer();
const buttonContainer = createButtonContainer();

export const gameSetup = (pet) => {

    savePet(pet);

    currentPet = pet;

    petContainer.innerHTML = "";

    // Name
    petContainer.append(createPetNameDisplay(pet.getName()));
    
    // Age
    petContainer.append(createAgeDisplay(pet));

    // Pet
    petContainer.append(displayPet(pet.getType()));
    petContainer.append(createMessageContainer());

    // Stat indicator bars
    const statsContainer = createStatsContainer();
    petContainer.append(statsContainer);

    console.log(statsContainer.append(createIndicator("Health", pet.getHealth()*10)));
    statsContainer.append(createIndicator("Hunger", pet.getHunger()*10));
    statsContainer.append(createIndicator("Happiness", pet.getHappiness()*10));
    statsContainer.append(createIndicator("Love", pet.getLove()));

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

            if (name !== "") {
                const newPet = new Pet(name, currentPetSelection, Date.now());
                gameSetup(newPet);
            } else {
                document.querySelector(".pet-name-input").focus();
            }

            break;

        case ">":
            
            if (currentPetSelection > animalImages.length-1) {
                // error
            } else {
                currentPetSelection++;
            }

            
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

            currentPet.setLastFeed(Date.now());
            savePet(currentPet);
            e.target.remove();
            break;

        case "Play":
            currentPet.play();

            const happinessLevel = document.querySelector(".Happiness");
            console.log(currentPet.getHappiness());
            happinessLevel.style.width = currentPet.getHappiness()*10 + "%";

            currentPet.setLastPlay(Date.now());
            savePet(currentPet);
            e.target.remove();
            break;
    }
});

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
        // Check for what buttons to show based on how long has passed
    }
})