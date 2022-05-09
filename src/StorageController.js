// Save pet
export const savePet = (pet) => {

    const petExportObject = {
        name: pet.getName(),
        type: pet.getType(),
        birthday: pet.getBirthday(),
        health: pet.getHealth(),
        hunger: pet.getHunger(),
        happiness: pet.getHappiness(),
        love: pet.getLove(),
        lastFeed: pet.getLastFeed(),
        lastPlay: pet.getLastPlay(),
        lastUpdate: pet.getLastUpdate()
    }

    localStorage.setItem("pet", JSON.stringify(petExportObject));
}

// Check for saved pet
export const loadPet = () => {
    return JSON.parse(localStorage.getItem("pet"));
}

export const updateLastHungerTickCheck = () => {
    // localStorage.setItem("lastHungerTickCheck", Date.now());

    localStorage.setItem("lastHungerTickCheck", 1651789074251);
}

export const getLastHungerTickUpdateCheck = () => {
    return localStorage.getItem("lastHungerTickCheck");
}


// This two might not be needed
export const setBirthday = () => {
    localStorage.setItem("birthday", Date.now());
}

export const getBirthday = () => {
    return localStorage.getItem("birthday");
}