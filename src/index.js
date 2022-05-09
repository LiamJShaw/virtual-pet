import './styles.css';

import { savePet, loadPet, updateLastHungerTickCheck } from './StorageController';
import { newGame, gameSetup, updateButtonContainer, updateStats, updateAgeDisplay  } from './UI';
import { Pet } from './pet';
import { getHungerTicksSinceLastUpdate } from './EventTimer';

const loadedPet = loadPet();

if (loadedPet) {

    document.title = `Virtual Pet | ${loadedPet.name}`;

    const pet = new Pet(
        loadedPet.name,
        loadedPet.type,
        loadedPet.birthday,
        loadedPet.health,
        loadedPet.hunger,
        loadedPet.happiness,
        loadedPet.love,
        loadedPet.lastFeed,
        loadedPet.lastPlay
        );

    gameSetup(pet);
    
} else {
    newGame();
}

updateLastHungerTickCheck();
console.log(getHungerTicksSinceLastUpdate());

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {

        updateStats();
        updateButtonContainer();
        updateAgeDisplay();
    }
})