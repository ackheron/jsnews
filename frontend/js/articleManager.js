/**
 * Classe pour gérer les articles. Elle fournit des fonctionnalités pour trier les articles
 * par date de publication et pourrait à l'avenir contenir d'autres méthodes pour le formatage,
 * la récupération, etc.
 */
class ArticleManager {
    /**
     * Construit une nouvelle instance de l'ArticleManager.
     *
     * @param {Array} listArticle - Un tableau d'articles à gérer.
     */
    constructor(listArticle) {
        this.listArticle = listArticle; // Stocke le tableau d'articles dans l'instance qui appelle la classe
        console.log("🚀 ~ file: articleManager.js:14 ~ ArticleManager ~ constructor ~ this:", this);
    }

    /**
     * Trie les articles par date de publication, du plus récent au plus ancien.
     *
     * @return {Array} Le tableau d'articles trié par date de publication.
     */
    static sortByRecent(elem) {
        // Utilise la méthode sort avec une fonction de comparaison personnalisée
        return elem.sort((firstEl, secondEl) => {
            // Compare les dates de publication des deux articles et décide de l'ordre de tri
            return Date.parse(firstEl.publicationDate) < Date.parse(secondEl.publicationDate) ? 1 : -1;
        });
    }

    /**
     * Trie les articles par date de publication, du plus récent au plus ancien.
     *
     * @return {Array} Le tableau d'articles trié par date de publication.
     */
    static sortByOldest(elem) {
        // Utilise la méthode sort avec une fonction de comparaison personnalisée
        return elem.sort((firstEl, secondEl) => {
            // Compare les dates de publication des deux articles et décide de l'ordre de tri
            return Date.parse(firstEl.publicationDate) > Date.parse(secondEl.publicationDate) ? 1 : -1;
        });
    }
}
