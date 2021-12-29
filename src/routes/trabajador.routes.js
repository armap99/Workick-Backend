const router = require("express").Router();
const {
  getWorkerInfoByUserId, getAllWorkers,
} = require("../controllers/trabajador.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.get("/",getAllWorkers);
router.get("/:id", getWorkerInfoByUserId);

module.exports = router;
