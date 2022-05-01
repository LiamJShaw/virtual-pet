import { Pet } from './pet';

export const petController = (name) => {

    const pet = new Pet(name);

    pet.greeting();

    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();
    pet.feed();

    pet.heal();
    pet.heal();

    pet.increaseLove();
}