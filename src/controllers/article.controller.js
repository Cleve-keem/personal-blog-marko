const ArticleService = require("../services/article.service.js");
// const AdminService = require("../services/admin.service.js");
const { successResponse, errorResponse } = require("../utils/response.js");

class ArticleController {
  static async addNewArticle(req, res) {
    const admin = req.admin;

    try {
      await ArticleService.createArticle(req.body, admin);
      return res.redirect("/admin/dashboard");
    } catch (error) {
      console.error("Error from new article", error.message);
      if (error instanceof Error) {
        return errorResponse(res, 409, error.message);
      }
      return errorResponse(res, 500, "Internal server error", error.message);
    }
  }

  static async updateArticle(req, res) {
    const { id } = req.params;

    try {
      const article = ArticleService.updateArticle(id, req.body);

      if (!article) {
        return errorResponse(res, 404, "Article not found!");
      }
      return res.redirect("/admin/dashboard");
    } catch (err) {
      console.error("Error from updateArticle controller:", err.message);
      return errorResponse(res, 500, "Failed to update article");
    }
  }

  static async removeArticle(req, res) {
    const { id } = req.params;
    try {
      await ArticleService.deleteArticle(id);
      return res.redirect("/admin/dashboard");
    } catch (err) {
      console.error("Error from delete article", err.message);
      return errorResponse(res, 500, "Internal server error", err.message);
    }
  }
}

module.exports = ArticleController;
