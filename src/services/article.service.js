const ArticleRepository = require("../repositories/article.repository.js");

class ArticleService {
  static async createArticle(article, admin) {
    const articleExist = await ArticleRepository.findTitle(article.title);

    if (articleExist) {
      throw new Error("Article title already exist!");
    }

    return await ArticleRepository.saveArticle(article, admin);
  }

  static async fetchArticles() {
    return await ArticleRepository.getAllArticles();
  }

  static async findArticleById(id) {
    return await ArticleRepository.findId(id);
  }

  static async updateArticle(id, update) {
    const article = await ArticleRepository.findId(id);

    if (!article) {
      throw new Error("Article not found!");
    }

    article.title = update.title;
    article.date = update.date;
    article.content = update.content;

    return article;
  }

  static async deleteArticle(id) {
    ArticleRepository.findAndRemoveOne(id);
  }
}

module.exports = ArticleService;
