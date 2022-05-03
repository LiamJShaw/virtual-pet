import { getAnimalImages } from './CreatePetScreen.js';

const animalImages = getAnimalImages();
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

    console.log(animalImages["cow"]);

    const petImage = document.createElement("img");
    petImage.classList.add("pet")
    petImage.src = animalImages[index];
    
    return petImage;
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


// Game setup

const petContainer = createPetContainer();
const buttonContainer = createButtonContainer();

const gameSetup = (pet) => {

    petContainer.innerHTML = "";

    petContainer.append(displayPet());

    buttonContainer.append(createActionButton("Feed"));
    buttonContainer.append(createActionButton("Play"));
}


// New Pet Creation

export const newGame = () => {

    petContainer.innerHTML = "";

    const nameInput = document.createElement("input");
    nameInput.type = "text";
    petContainer.append(displayPet(0));
    
    buttonContainer.append(createActionButton("<"));
    buttonContainer.append(createActionButton("Confirm"));
    buttonContainer.append(createActionButton(">"));
}

// Event listeners?

document.addEventListener("click", e => {

    const action = e.target.getAttribute("data-action");

    switch (action) {
        case ">":
            currentPetSelection++;
            console.log(displayPet(currentPetSelection));
            break;
    }
});


