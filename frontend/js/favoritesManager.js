/**
 * Gestion des favoris, enregistrement d'un article en favoris, retrait d'un article des favoris et récupération de la liste des favoris
 */
function addFavorites(articlesId) {
    /**@type {Array} - Tableau contenant les ID des articles favoris stocké dans le local storage */
    let listFavorites = getFavoritesLocalStorage();
    listFavorites.push(articlesId);

    setFavoritesLocalStorage(listFavorites);
}

function getFavoritesLocalStorage() {
    let listFavorites = localStorage.getItem("listFavorites");

    if (listFavorites == null) {
        return [];
    } else {
        return JSON.parse(listFavorites);
    }
}

function setFavoritesLocalStorage(listFavorites) {
    localStorage.setItem("listFavorites", JSON.stringify(listFavorites));
}
