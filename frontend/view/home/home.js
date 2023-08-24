/**
 * Récupère les articles depuis une API, crée des instances d'articles,
 * puis les affiche sur la page.
 */
const fetchData = async () => {
    try {
        // Envoie une requête GET pour récupérer les données des articles
        const response = await axios.get("http://localhost:4000/api/article/");

        console.log(response.data);
        // Stocke les données renvoyées par l'API
        const data = response.data;

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

        // Génère le HTML pour chaque article et l'ajoute au conteneur
        document.querySelector(".container").innerHTML += `
                <div class="col-12 mt-5">
                    <div class="card article">
                        <div class="card-header ">
                            <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.getFormattedDate(
            article.publicationDate
        )}</span></h5>
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

    document.querySelectorAll(".addFavorite").forEach((star) => {
        star.addEventListener("click", () => {
            addFavorites(star.dataset.id);
        });
    });
};
