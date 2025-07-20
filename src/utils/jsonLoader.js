// Utilitaire pour charger les données JSON de manière optimisée
const jsonCache = new Map();

// Mapping des fichiers JSON disponibles
const jsonFiles = {
    'astroSignPage-txt.json': () => import('../json/astroSignPage-txt.json'),
    'card-data.json': () => import('../json/card-data.json'),
    'cgu.json': () => import('../json/cgu.json'),
    'cgv.json': () => import('../json/cgv.json'),
    'contactPage-txt.json': () => import('../json/contactPage-txt.json'),
    'disclaimer-cons-data.json': () => import('../json/disclaimer-cons-data.json'),
    'disclaimer-pros-data.json': () => import('../json/disclaimer-pros-data.json'),
    'homePage-txt.json': () => import('../json/homePage-txt.json'),
    'prestations-list.json': () => import('../json/prestations-list.json'),
    'zodiacSigns.json': () => import('../json/zodiacSigns.json'),
};

export const loadJSON = async (fileName) => {
    // Vérifier le cache d'abord
    if (jsonCache.has(fileName)) {
        return jsonCache.get(fileName);
    }

    try {
        const importFunction = jsonFiles[fileName];
        if (!importFunction) {
            throw new Error(`Fichier JSON non trouvé: ${fileName}`);
        }

        const data = await importFunction();
        const result = data.default;

        // Mettre en cache pour éviter les rechargements
        jsonCache.set(fileName, result);
        return result;
    } catch (error) {
        console.error(`Erreur lors du chargement de ${fileName}:`, error);
        return null;
    }
};

export const preloadJSON = (fileNames) => {
    // Précharger plusieurs fichiers JSON en parallèle
    return Promise.all(fileNames.map(fileName => loadJSON(fileName)));
};

export const clearJSONCache = () => {
    jsonCache.clear();
};
