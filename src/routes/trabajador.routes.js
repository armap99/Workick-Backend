const router = require("express").Router();
const {
  getWorkerInfoByUserId,
  getAllWorkers,
  addWorkerInformation,
  updateWorkerInfomation,
  updateWorkerWorks,
  getAllWorkersFilter,
} = require("../controllers/trabajador.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.get("/", getAllWorkers);
router.post("/", [isAuthorized], addWorkerInformation);
router.post("/filtro/",getAllWorkersFilter);
router.get("/:id",  getWorkerInfoByUserId);
router.put("/:id", [isAuthorized], updateWorkerInfomation);
router.put("/trabajos/:id", [isAuthorized], updateWorkerWorks);

module.exports = router;
