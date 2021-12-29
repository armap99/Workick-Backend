const router = require("express").Router();
const { isAuthorized } = require("../middlewares/isAuthorized");
const {
  getAllCotegories,
  getCategorieById,
  addCategorie,
  updateCategorie,
  deleteCategorie,
} = require("../controllers/categoria.controller");

router.get("/", getAllCotegories);
router.post("/",addCategorie)
router.get("/:id", getCategorieById);
router.put("/:id",updateCategorie);
router.delete("/:id",deleteCategorie);


module.exports = router;
