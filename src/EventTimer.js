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

export const getHungerTicksSinceBirth = (birthday) => {
    // Stub for now
    return 23;
}

export const getHungerTicksSinceLastUpdate = (lastUpdate) => {
    // Get time since last tick
    const timeSinceLastTick = Date.now() - lastUpdate;

    // Divide that by 4 hours in ms
    return timeSinceLastTick / 14400000;
}