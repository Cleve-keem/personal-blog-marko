const { articleCollectionFile } = require("../config/db.config.js");
const BaseRepository = require("./base.repository.js");

class ArticleRepository extends BaseRepository {
  constructor() {
    super(articleCollectionFile);
  }

  saveArticle(article, admin) {
    const articles = this.findAll();

    const { username } = admin;

    const newArticle = {
      id: articles.length + 1,
      ...article,
      publishedBy: username,
      createdAt: new Date(),
    };

    articles.push(newArticle);
    this.save(articles);

    return newArticle;
  }

  findArticleByTitle(title) {
    return this.findAll().find((article) => article.title === title);
  }

  getAllArticles() {
    return this.findAll();
  }
}

module.exports = new ArticleRepository();
