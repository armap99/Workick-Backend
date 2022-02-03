const router = require("express").Router();
const {
  addProposal,
  acceptClient,
  acceptWorker,
  updateProposal,
  getClientePropos,
  getWorkerPropos,
} = require("../controllers/propuesta.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.post("/", [isAuthorized], addProposal);
router.get("/:id", [isAuthorized], getClientePropos);
router.get("/trabajador/:id", [isAuthorized], getWorkerPropos);
router.put("/:id", [isAuthorized], acceptClient);
router.put("/trabajador/:id", [isAuthorized], acceptWorker);
router.put("/actualizar/:id", [isAuthorized], updateProposal);

module.exports = router;
