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

export const getHealthTicksSinceLastUpdate = (birthday, appliedTicks) => {

    const tickIntervalInMS = 3600000; // 3600000 = 1 hour

    const timeSinceBirthday = Date.now() - birthday;

    const ticksSinceBirthday = timeSinceBirthday / tickIntervalInMS;
    const ticksSinceLastUpdate = ticksSinceBirthday - appliedTicks;

    return ticksSinceLastUpdate;
}

export const getHungerTicksSinceLastUpdate = (birthday, appliedTicks) => {

    const tickIntervalInMS = 14400000; // 14400000 = 4 hours

    const timeSinceBirthday = Date.now() - birthday;

    const ticksSinceBirthday = timeSinceBirthday / tickIntervalInMS;
    const ticksSinceLastUpdate = ticksSinceBirthday - appliedTicks;

    return ticksSinceLastUpdate;
}
