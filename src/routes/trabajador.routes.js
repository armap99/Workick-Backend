const router = require("express").Router();
const {
  getWorkerInfoByUserId,
  getAllWorkers,
  addWorkerInformation,
  updateWorkerInfomation,
  updateWorkerWorks,
} = require("../controllers/trabajador.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.get("/", getAllWorkers);
router.post("/", addWorkerInformation);
router.get("/:id", isAuthorized, getWorkerInfoByUserId);
router.put("/:id", isAuthorized, updateWorkerInfomation);
router.put("/trabajos/:id", updateWorkerWorks);

module.exports = router;
