const router = require("express").Router();
const {
  getAllCounts,
  addCount,
  getCoutById,
  logIn,
  updateAccount,
  updateAccountToWorker,
} = require("../controllers/cuenta.controller");
const { isAuthorized } = require("../middlewares/isAuthorized");

router.get("/", [isAuthorized], getAllCounts);
router.post("/", addCount);
router.post("/login", logIn);
router.get("/:id", [isAuthorized], getCoutById);
router.put("/:id", [isAuthorized], updateAccount);
router.put("/trabajador/:id", [isAuthorized], updateAccountToWorker);

module.exports = router;
