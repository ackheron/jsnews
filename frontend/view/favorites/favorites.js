/**
 * Gère l'affichage et les interactions de la page des favoris
 */

// Assurez-vous d'avoir ce import si vous utilisez des modules ES6

async function loadAndDisplayArticles() {
    try {
        let response = await axios.post(
            "http://localhost:4000/api/article",
            { favorites: getFavoritesId() },
            { headers: { "Content-Type": "application/json" } }
        );
        let jsonListArticle = response.data;
        console.log("🚀 ~ file: favorites.js:11 ~ loadAndDisplayArticles ~ jsonListArticle:", jsonListArticle);

        for (let jsonArticle of jsonListArticle) {
            let article = new Article(jsonArticle);
            document.querySelector(".container").innerHTML += `
                <div class="col-12 mt-5">
                    <div class="card article">
                        <div class="card-header">
                            <h5 class="card-title d-flex justify-content-between">${article.title}
                                <span class="publication-date">${article.getFormattedDate()}</span>
                            </h5>
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
                </div>`;
        }
    } catch (error) {
        console.error("Une erreur est survenue:", error);
    }
}

loadAndDisplayArticles();
