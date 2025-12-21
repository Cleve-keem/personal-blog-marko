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

  static async deleteArticle(id) {
    await ArticleRepository.findAndRemoveOne(id);
  }
}

module.exports = ArticleService;
