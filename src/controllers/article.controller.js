const ArticleService = require("../services/article.service.js");
const AdminService = require("../services/admin.service.js");
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
}

module.exports = ArticleController;
