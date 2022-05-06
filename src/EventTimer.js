import { getLastHungerTick } from './StorageController.js';

// Create new feed button if lastFeed is more than an hour ago

// Create new play button if lastPlay is more than 10 mins ago

// location.reload


export const checkFeedInterval = (pet) => {
    const timeSinceLastFeed = Date.now() - pet.getLastFeed();

    // 1 hour in ms (3,600,000)
    if (timeSinceLastFeed > 3600000) { 
        return true;
    }

    return false;
}

export const checkPlayInterval = (pet) => {

    const timeSinceLastPlay = Date.now() - pet.getLastPlay();

    // 10 minutes in ms (600000)
    if (timeSinceLastPlay > 600000) {
        return true;
    }

    return false;
}

const checkHungerTicks = () => {
    // Get time since last tick
    const lastTick = getLastHungerTick();

    // Divide that by 4 hours
    return lastTick / 4;

    // return amount of ticks
    // 0-0.999: 0 / 1 / 2 / 3 / etc
}

export const hungerTicksSinceLastUpdate = () => {
    
}