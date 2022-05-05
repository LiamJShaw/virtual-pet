export class Pet {

    #MAX_HEALTH = 10;
    #MIN_HUNGER = 0;
    #MAX_HAPPINESS = 10;
    #MAX_LOVE = 100;

    #name;
    #type;
    #health;
    #hunger;
    #happiness;
    #love;

    #birthday

    #lastFeed;
    #lastPlay;

    constructor(name, type, birthday, health=9, hunger=5, happiness=0, love=0, lastFeed=0, lastPlay=0) {
        this.#name = name;
        this.#type = type
        this.#birthday = birthday;
        this.#health = health;
        this.#hunger = hunger;
        this.#happiness = happiness;
        this.#love = love;

        this.#lastFeed = lastFeed;
        this.#lastPlay = lastPlay;

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

    getAge() {
        const age = Date.now() - this.#birthday;
        
        let seconds = (age / 1000).toFixed(0);
        let minutes = (age / (1000 * 60)).toFixed(0);
        let hours = (age / (1000 * 60 * 60)).toFixed(1);
        let days = (age / (1000 * 60 * 60 * 24)).toFixed(1);
    
        if (seconds < 60) return seconds + " seconds old";
        else if (minutes < 60) return minutes + " minutes old";
        else if (hours < 24) return hours + " hours old";
        else return days + " days old"
    }

    setBirthday() {
        // this.#birthday = Date.now();
        this.#birthday = 0;
    }

    getLastFeed() {
        return this.#lastFeed;
    }

    setLastFeed(time) {
        this.#lastFeed = time;
    }

    getLastPlay() {
        return this.#lastPlay;
    }

    setLastPlay(time) {
        this.#lastPlay = time;
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
        if (this.#hunger > this.#MIN_HUNGER) {
            this.#hunger = this.#hunger - 1;

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