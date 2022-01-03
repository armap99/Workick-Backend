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

router.post("/", addProposal);
router.get("/:id", getClientePropos);
router.get("/trabajador/:id",getWorkerPropos)
router.put("/:id", acceptClient);
router.put("/trabajador/:id", acceptWorker);
router.put("/actualizar/:id",updateProposal);

module.exports = router;
