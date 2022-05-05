export class Pet {

    #MAX_HEALTH = 10;
    #MAX_HUNGER = 10;
    #MAX_HAPPINESS = 10;
    #MAX_LOVE = 100;

    #name;
    #type;
    #health;
    #hunger;
    #happiness;
    #love;

    #birthday

    constructor(name, type, birthday, health=9, hunger=5, happiness=0, love=0) {
        this.#name = name;
        this.#type = type
        this.#birthday = birthday;
        this.#health = health;
        this.#hunger = hunger;
        this.#happiness = happiness;
        this.#love = love;
    }

    greeting() {
        console.log(`Hello, I'm ${this.name}`);
    }

    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHealth() {
        return this.#health;
    }

    getHunger() {
        return this.#hunger;
    }

    getHappiness() {
        return this.#happiness;
    }

    getLove() {
        return this.#love;
    }

    getBirthday() {
        return this.#birthday;
    }

    setBirthday() {
        // this.#birthday = Date.now();
        this.#birthday = 0;
    }

    heal() {
        if (this.#health < this.#MAX_HEALTH) {
            this.#health = this.#health + 1;

            console.log(`Health increased by 1 to ${this.getHealth()}`);
            return true;
        }

        console.log("Health already at max level");
        return false;
    }

    feed() {
        if (this.#hunger < this.#MAX_HUNGER) {
            this.#hunger = this.#hunger + 1;

            console.log(`Hunger increased by 1 to ${this.getHunger()}`);
            return true;
        }

        console.log(`${this.name} is full`);
        return false;
    }

    play() {
        if (this.#happiness < this.#MAX_HAPPINESS) {
            this.#happiness = this.#happiness + 1;

            console.log(`Happiness increased by 1 to ${this.getHappiness()}`);
            return true;
        }

        console.log(`${this.name}'s all played out`);
        return false;

    }

    increaseLove() {
        if (this.#love < this.#MAX_LOVE) {
            this.#love++;
            console.log(`Love increased by 1 to ${this.getLove()}`);
            return true;
        }

        console.log("All loved up");
        return false;
    }
}