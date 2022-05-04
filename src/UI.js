import { importAnimalImages } from './CreatePetScreen.js';
import { Pet } from './pet.js';

const animalImages = importAnimalImages();
console.log(animalImages);
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

// Game setup

// The actual pet object
let currentPet;

const petContainer = createPetContainer();
const buttonContainer = createButtonContainer();

const gameSetup = (pet) => {

    currentPet = pet;

    petContainer.innerHTML = "";
    petContainer.append(createPetNameDisplay(pet.getName()));
    petContainer.append(displayPet(pet.getPetTypeIndex()));
    petContainer.append(createMessageContainer());
    buttonContainer.innerHTML = "";
    buttonContainer.append(createActionButton("Feed"));
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
            break;

        case "Play":
            currentPet.play();
            break;
    }
});