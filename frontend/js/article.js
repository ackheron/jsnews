/**
 * Représentation du format d'un article ainsi que le formatage des dates pour affichage
 */

class Article {
    // Constructeur qui accepte un objet jsonArticle en argument
    constructor(jsonArticle) {
        // Si jsonArticle est fourni et est truthy, fusionne ses propriétés avec l'instance courante
        /*

        jsonArticle && ...: Ceci est une expression logique qui vérifie d'abord si jsonArticle est truthy (c'est-à-dire, il n'est pas falsy comme null, undefined, false, 0, NaN, "", etc.). Si jsonArticle est falsy, alors la deuxième partie après && ne sera pas exécutée.
        Object.assign(this, jsonArticle): Cette méthode est utilisée pour copier les valeurs de toutes les propriétés énumérables de l'objet jsonArticle vers l'objet this (qui est l'instance courante de la classe article). Si une propriété du même nom existe déjà sur l'objet this, sa valeur sera écrasée par la valeur correspondante de jsonArticle.
          */
        jsonArticle && Object.assign(this, jsonArticle);
    }
    getFormattedDate(article) {
        // Crée un objet Date à partir de la date de publication de l'objet courant
        let date = new Date(this.publicationDate);
        // Renvoie la date formatée selon le format français avec des options spécifiques
        return date.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
    }
}
