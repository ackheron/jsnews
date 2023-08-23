/**
 * Gère l'affichage et les interactions de la page d'accueil
 */

const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:4000/api/article/");

        console.log(response.data);
        const data = response.data;

        for (const jsonArticle of data) {
            let article = new Article(jsonArticle);
            document.querySelector(".container").innerHTML += `

    <div class="col-12 mt-5">
        <div class="card article">
            <div class="card-header ">
                <h5 class="card-title d-flex justify-content-between">${article.title}<span class="publication-date">${article.publicationDate}</span></h5>
            </div>
            <img src="http://localhost:4000/${article.image}" class="card-img-top">
            <span class="fa-stack fa-2x addFavorite">
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
    } catch (error) {
        console.log(error);
    }
};

fetchData();
