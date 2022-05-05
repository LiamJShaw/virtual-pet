import './styles.css';

import { savePet, loadPet } from './StorageController';
import { newGame, gameSetup } from './UI';
import { Pet } from './pet';

const loadedPet = loadPet();

if (loadedPet) {
    const pet = new Pet(loadedPet.name,
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