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
        lastFeed: pet.getTimeSinceLastFeed(),
        lastPlay: pet.getTimeSinceLastPlay()
    }

    localStorage.setItem("pet", JSON.stringify(petExportObject));
}

// Check for saved pet
export const loadPet = () => {
    return JSON.parse(localStorage.getItem("pet"));
}

// Save users last load?
// log date.now() when document.visiblity changes to hidden)
