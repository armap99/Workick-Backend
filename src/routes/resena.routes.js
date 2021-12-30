const router = require("express").Router();
const {
  getResenasByTrabajadorId,
} = require("../controllers/resena.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.get("/:id", [isAuthorized], getResenasByTrabajadorId);

module.exports = router;
