const router = require("express").Router();
const {
  getClientMessage,
  getWorkerMessage,
  addNewMessage,
} = require("../controllers/mensaje.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.post("/", [isAuthorized], addNewMessage);
router.get("/:id", [isAuthorized], getClientMessage);
router.get("/trabajador/:id", [isAuthorized], getWorkerMessage);

module.exports = router;
