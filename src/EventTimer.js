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

export const getHungerTicksToApply = (birthday, lastUpdate) => {

    const tickIntervalInMS = 60000; // 14400000 = 4 hours
    const now = Date.now();

    const timeSinceBirthday = now - birthday;
    const timeSinceLastUpdate = now - lastUpdate;

    const ticksSinceBirthday = timeSinceBirthday / tickIntervalInMS;
    const ticksSinceLastUpdate = timeSinceLastUpdate / tickIntervalInMS;

    if (lastUpdate == 0) return ticksSinceBirthday;

    console.log(ticksSinceBirthday, ticksSinceLastUpdate);

    return ticksSinceLastUpdate;
}