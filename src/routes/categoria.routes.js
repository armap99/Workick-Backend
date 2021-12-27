const router = require("express").Router();
const { isAuthorized } = require("../middlewares/isAuthorized");
const {
  getAllCotegories,
  getCategorieById,
} = require("../controllers/categoria.controller");

router.get("/", getAllCotegories);
router.get("/:id", getCategorieById);

module.exports = router;
