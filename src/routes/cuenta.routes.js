const router = require("express").Router();
const {
  getAllCounts,
  addCount,
  getCoutById,
  logIn,
} = require("../controllers/cuenta.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.get("/", [isAuthorized], getAllCounts);
router.post("/", addCount);
router.post("/login", logIn);
router.get("/:id", getCoutById);

module.exports = router;
