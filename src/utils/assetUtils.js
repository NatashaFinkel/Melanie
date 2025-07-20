// Utilitaire pour gérer les URLs d'assets de manière cohérente
export const getAssetUrl = (path) => {
    // Enlever le slash initial si présent
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;

    // Utiliser BASE_URL de Vite pour la construction de l'URL
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};

// Fonction spécifique pour les assets du dossier public
export const getPublicAssetUrl = (assetPath) => {
    // Pour les chemins qui commencent par /assets/
    if (assetPath.startsWith('/assets/')) {
        return getAssetUrl(assetPath);
    }

    // Pour les chemins relatifs
    if (assetPath.startsWith('./assets/')) {
        return getAssetUrl(assetPath.replace('./', ''));
    }

    // Pour les autres chemins, les retourner tel quel après ajout du BASE_URL
    return getAssetUrl(`assets/${assetPath}`);
};
