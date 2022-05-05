function importAll(fileList) {

    return fileList.keys().map(fileList);
}

export const importAnimalImages = () => {
    return importAll(require.context('./img/animals/', false, /\.(png)$/));;
}

