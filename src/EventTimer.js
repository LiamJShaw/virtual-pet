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