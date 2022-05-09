import './styles.css';

import { loadPet } from './StorageController';
import { newGame, gameSetup, updateButtonContainer, updateStats, updateAgeDisplay  } from './UI';
import { Pet } from './pet';
import { getHungerTicksSinceLastUpdate, getHungerTicksSinceBirth } from './EventTimer';

const checkHungerTicks = (loadedPet) => {
    // Get hunger ticks since birthday
    console.log("HT since birth: " + getHungerTicksSinceBirth(loadedPet.birthday));

    // Get hunger ticks ticks since last update
    console.log("HT since last update: " + getHungerTicksSinceLastUpdate(loadedPet.lastUpdate));

    // birthTicks - lastTicks = ticks
    const hungerTicks = getHungerTicksSinceBirth() - getHungerTicksSinceLastUpdate(loadedPet.lastUpdate);
    console.log("Check hunger ticks function: " + hungerTicks);

    // Idea being that partial hours are hard to track without doing this

    return 10;
}

const loadedPet = loadPet();

if (loadedPet) {

    document.title = `Virtual Pet | ${loadedPet.name}`;

    const hungerTicksSinceLastUpdate = checkHungerTicks(loadedPet.birthday);
    console.log(hungerTicksSinceLastUpdate);

    if (hungerTicksSinceLastUpdate > 0) {
        for (let i = 0; i == hungerTicksSinceLastUpdate; i++) {
            loadedPet.health--;
            console.log("Loaded pet health: " + loadedPet.health);
        }
    }

    const pet = new Pet(
        loadedPet.name,
        loadedPet.type,
        loadedPet.birthday,
        loadedPet.health,
        loadedPet.hunger,
        loadedPet.happiness,
        loadedPet.love,
        loadedPet.lastFeed,
        loadedPet.lastPlay,
        loadedPet.lastUpdate
        );

    gameSetup(pet);
    
} else {
    newGame();
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {

        updateStats();
        updateButtonContainer();
        updateAgeDisplay();
    }
})