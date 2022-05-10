import './styles.css';

import { loadPet } from './StorageController';
import { newGame, gameSetup } from './UI';
import { Pet } from './pet.js';
import { getHungerTicksSinceLastUpdate, getHealthTicksSinceLastUpdate } from './EventTimer';

const load = () => {
    const loadedPet = loadPet();

    if (loadedPet) {

        document.title = `Virtual Pet | ${loadedPet.name}`;

        // Get hunger ticks since last update
        const hungerTicksSinceLastUpdate = Math.floor(getHungerTicksSinceLastUpdate(
                                                        loadedPet.birthday, loadedPet.appliedHungerTicks));

        // Get health ticks since last update
        const healthTicksSinceLastUpdate = Math.floor(getHealthTicksSinceLastUpdate(
                                                        loadedPet.birthday, loadedPet.appliedHealthTicks));

        console.log("Hunger: " + hungerTicksSinceLastUpdate);
        console.log("Health: " + healthTicksSinceLastUpdate);

        // Apply hunger ticks
        if (hungerTicksSinceLastUpdate > 0) {
            loadedPet.appliedHungerTicks = hungerTicksSinceLastUpdate;

            for (let i = 0; i < hungerTicksSinceLastUpdate; i++) {
                loadedPet.hunger++;
            }

        }

        // Apply health ticks
        if (healthTicksSinceLastUpdate > 0) {

            console.log("Applied health: " + loadedPet.appliedHealthTicks);

            loadedPet.appliedHealthTicks = healthTicksSinceLastUpdate;

            for (let i = 0; i < healthTicksSinceLastUpdate; i++) {
                if (loadedPet.hunger > 9) {
                    loadedPet.health--;
                }
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
            loadedPet.appliedHungerTicks,
            loadedPet.appliedHealthTicks
            );

        gameSetup(pet);
        
    } else {
        newGame();
    }
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === 'visible') {
        load();
    }
})


load();