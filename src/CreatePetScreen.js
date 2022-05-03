// Images

// I'm struggling with the way Webpack renames files and wanting to dynamically import animals 
// via images in a folder. The filenames get scrambled so trying a mirror array of their names.
let animalLookupArray = [];
let animalImages;

function importAll(fileList) {
    animalLookupArray = [];

    fileList.keys().forEach(file => {
        animalLookupArray.push(getAnimalNameFromImageName(file));
    });

    return fileList.keys().map(fileList);
}

function importAnimalImages() {
    animalImages = importAll(require.context('./img/animals/', false, /\.(png)$/));
    return animalImages;
}

const petImages = importAnimalImages();

function getAnimalNameFromImageName(string) {
    // Removes first 2 and last 4 characters
    return string.substring(2, (string.length-4));
}

export const getAnimalImageFromName = (animalName) => {
    return animalLookupArray.indexOf(animalName);
}

export const getAnimalImages = () => {

    let animalImagesObject = {};

    for (let i = 0; i < animalLookupArray.length; i++) {
        animalImagesObject[animalLookupArray[i]] = animalImages[i];
    }

    return animalImagesObject;
}