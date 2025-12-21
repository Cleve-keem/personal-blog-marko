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

  findTitle(title) {
    return this.findAll().find((article) => article.title === title);
  }

  findId(id) {
    return this.findAll().find((article) => article.id === Number(id));
  }

  getAllArticles() {
    return this.findAll();
  }

  findAndRemoveOne(id) {
    this.save(this.findAll().filter((article) => article.id != id));
  }
}

module.exports = new ArticleRepository();
