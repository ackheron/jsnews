/**
 * Récupère les articles depuis une API, crée des instances d'articles,
 * puis les affiche sur la page.
 */

const fetchData = async () => {
    try {
        // Envoie une requête GET pour récupérer les données des articles
        const response = await axios.get("http://localhost:4000/api/article/");
        // console.log(response.data);
        // Stocke les données renvoyées par l'API
        data = response.data;
        ArticleManager.sortByRecent(data);
        console.log("🚀 ~ file: home.js:16 ~ fetchData ~ data:", data);

        // Appel de la fonction pour afficher les articles sur la page `displayArticle`
        displayArticle(data);
    } catch (error) {
        console.log(error);
    }
};

fetchData();

/**
 * Affiche les articles sur la page.
 * @param {Array} data - Tableau d'objets d'articles renvoyer par l'API
 */
const displayArticle = (data) => {
    // Parcourt chaque article et l'affiche sur la page
    for (const arrayArticle of data) {
        // Crée une instance de l'objet Article à partir des données du tableau d'objets envoyer par l'API
        let article = new Article(arrayArticle);
        let trie = new ArticleManager(article);

        // Génère le HTML pour chaque article et l'ajoute au conteneur
        document.querySelector(".container").innerHTML += `
                <div class="col-12 mt-5">
                    <div class="card article">
                    <div class="card-header ">
                    <h5 class="card-title d-flex justify-content-between">${
                        article.title
                    }<span class="publication-date">${article.getFormattedDate()}</span></h5>
                        </div>
                        <img src="http://localhost:4000/${article.image}" class="card-img-top">
                        <span class="fa-stack fa-2x addFavorite" data-id=${article.id}>
                            <i class="fas fa-star fa-stack-1x"></i>
                            <i class="far fa-star fa-stack-1x"></i>
                            </span>
                            <div class="card-body">
                            <p class="card-text">${article.content}</p>
                        </div>
                    </div>
                </div>
                `;
    }

    // Sélectionne tous les éléments ayant la classe "addFavorite"
    document.querySelectorAll(".addFavorite").forEach((star) => {
        // Vérifie si l'article lié à cette étoile est marqué comme favori dans le localStorage
        if (localStorage.getItem(`article-${star.dataset.id}`) === "favorite") {
            // Si l'article est un favori, active visuellement l'étoile
            star.classList.add("activated");
        }

        // Ajoute un écouteur d'événement pour détecter les clics sur l'étoile
        star.addEventListener("click", () => {
            // Si l'étoile est activée (article est un favori)
            /*
            l'intention est de vérifier si la classe activated existe dans l'attribut className de l'élément star.

            Si activated est effectivement une classe de star, alors indexOf("activated") renverra un indice (un nombre) qui est >= 0 (parce que les indices commencent à 0 pour la première position).

            Si activated n'est pas une classe de star, alors indexOf("activated") renverra -1.

            Ainsi, if (star.className.indexOf("activated") != -1) vérifie si l'élément star a la classe activated. Si c'est le cas, le bloc de code à l'intérieur de cette instruction if sera exécuté. Si ce n'est pas le cas, ce bloc sera ignoré. */
            if (star.className.indexOf("activated") != -1) {
                // Retire l'article des favoris
                removeFavorites(star.dataset.id);
                // Désactive visuellement l'étoile
                star.classList.remove("activated");
                // Supprime l'état de favori de cet article du localStorage
                localStorage.removeItem(`article-${star.dataset.id}`);
            } else {
                // Si l'étoile n'est pas activée (article n'est pas un favori)
                // Ajoute l'article aux favoris
                addFavorites(star.dataset.id);
                // Active visuellement l'étoile
                star.classList.add("activated");
                // Sauvegarde l'état de favori de cet article dans le localStorage
                localStorage.setItem(`article-${star.dataset.id}`, "favorite");
            }
        });
    });
};
