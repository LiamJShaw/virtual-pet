import { Pet } from './pet';

export const petController = (name, type) => {

    const pet = new Pet(name, type);

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