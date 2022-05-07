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
        lastPlay: pet.getLastPlay()
    }

    localStorage.setItem("pet", JSON.stringify(petExportObject));
}

// Check for saved pet
export const loadPet = () => {
    return JSON.parse(localStorage.getItem("pet"));
}

// Save users last load?
// log date.now() when document.visiblity changes to hidden)


export const updateLastHungerTick = () => {
    localStorage.setItem("lastHungerTick", Date.now());
}

export const getLastHungerTickUpdate = () => {
    return localStorage.getItem("lastHungerTick");
}

export const setBirthday = () => {
    localStorage.setItem("birthday", Date.now());
}