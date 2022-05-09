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