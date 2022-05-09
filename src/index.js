import './styles.css';

import { loadPet } from './StorageController';
import { newGame, gameSetup, updateButtonContainer, updateStats, updateAgeDisplay  } from './UI';
import { Pet } from './pet.js';
import { getHungerTicksSinceLastUpdate, getHungerTicksSinceBirth, getHungerTicksToApply } from './EventTimer';

const loadedPet = loadPet();

if (loadedPet) {

    document.title = `Virtual Pet | ${loadedPet.name}`;

    const hungerTicksSinceLastUpdate = Math.floor(getHungerTicksToApply(loadedPet.birthday, loadedPet.lastUpdate));

    console.log("Ticks: " + hungerTicksSinceLastUpdate);

    if (hungerTicksSinceLastUpdate > 0) {

        for (let i = 0; i < hungerTicksSinceLastUpdate; i++) {
            loadedPet.hunger++;
        }

        loadedPet.lastUpdate = Date.now();
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