const express = require("express");
const router = express.Router();
const {
  getAllMachines,
  saveMachines,
  updateMachine,
  deactivateMachine,
  activateMachine,
} = require("../controller/machines");
router.route("/").get(getAllMachines);
router.post("/savemachines", saveMachines);
router.post("/updatemachines", updateMachine);
router.post("/deactivatemachines", deactivateMachine);
router.post("/activatemachines", activateMachine);

module.exports = router;
