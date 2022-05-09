import GravestoneImage from './img/rip.png';

function importAll(fileList) {

    return fileList.keys().map(fileList);
}

export const importAnimalImages = () => {
    return importAll(require.context('./img/animals/', false, /\.(png)$/));;
}

export const createGravestone = () => {
    
    const Gravestone = new Image();
    Gravestone.src = GravestoneImage;
    Gravestone.width = "160px";
    Gravestone.height = "160px";
    
    return Gravestone;
}