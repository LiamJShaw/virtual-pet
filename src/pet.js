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

    #appliedHungerTicks;
    #appliedHealthTicks;

    constructor(name, type, birthday, 
                health=9, hunger=1, happiness=0, 
                love=0, lastFeed=0, lastPlay=0, 
                appliedHungerTicks=0, appliedHealthTicks=0) {
        this.#name = name;
        this.#type = type
        this.#birthday = birthday;
        this.#health = health;
        this.#hunger = hunger;
        this.#happiness = happiness;
        this.#love = love;

        this.#lastFeed = lastFeed;
        this.#lastPlay = lastPlay;
        this.#appliedHungerTicks = appliedHungerTicks;
        this.#appliedHealthTicks = appliedHealthTicks;
    }

    getName() {
        return this.#name;
    }

    getType() {
        return this.#type;
    }

    getHealth() {
        if (this.#health > 9) return 10;
        if (this.#health < 0) return 0;

        return this.#health;
    }

    getHunger() {
        if (this.#hunger > 9) return 10;

        return this.#hunger;
    }

    getHappiness() {
        if (this.#happiness > 9) return 10;

        return this.#happiness;
    }

    getLove() {
        return this.#love;
    }

    getBirthday() {
        return this.#birthday;
    }

    msToAge(age) {
        let seconds = (age / 1000).toFixed(0);
        let minutes = (age / (1000 * 60)).toFixed(0);
        let hours = (age / (1000 * 60 * 60)).toFixed(1);
        let days = (age / (1000 * 60 * 60 * 24)).toFixed(1);
    
        if (seconds == 1) return "1 second old";
        else if (seconds < 60) return seconds + " seconds old";

        else if (minutes == 1) return "1 minute old";
        else if (minutes < 60) return minutes + " minutes old";

        else if (hours == 1.0) return "1 hour old";
        else if (hours < 24) return hours + " hours old";

        else if (days == 1) return "1 day old";
        else return days + " days old";
    }

    getAge() {
        const age = Date.now() - this.#birthday;
        return this.msToAge(age);
    }

    getDiedAge() {
        // Basically a stub
        const diedAge = (Date.now() - this.#lastFeed) + (10 * 14400000); 
        
        // should be + hungerPreCalc * 4 hours in ms ;

        return this.msToAge(diedAge);
    }

    setBirthday() {
        this.#birthday = Date.now();
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

    getAppliedHungerTicks() {
        return this.#appliedHungerTicks;
    }

    getAppliedHealthTicks() {
        return this.#appliedHealthTicks;
    }

    heal() {
        if (this.#health < this.#MAX_HEALTH) {
            this.#health = this.#health + 1;

            console.log(this.#health);

            console.log(`Health increased by 1 to ${this.getHealth()}`);
            return true;
        }

        console.log("Health already at max level");
        return false;
    }

    feed() {
        if (this.getHunger() > this.#MIN_HUNGER) {
            this.#hunger = this.getHunger() - 1;

            console.log(`Hunger decreased by 1 to ${this.getHunger()}`);
            return true;
        }

        console.log(`${this.#name} is full`);
        return false;
    }

    play() {
        if (this.#happiness < this.#MAX_HAPPINESS) {
            this.#happiness = this.#happiness + 1;

            console.log(`Happiness increased by 1 to ${this.getHappiness()}`);
            return true;
        }

        console.log(`${this.#name}'s all played out`);
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


    checkDead() {
        if (this.#health == 0) {
            return true;
        }

        return false;
    }
}