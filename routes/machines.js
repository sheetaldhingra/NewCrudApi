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
router.post("/save-machines", saveMachines);
router.post("/update-machines", updateMachine);
router.post("/deactivate-machines", deactivateMachine);
router.post("/activate-machines", activateMachine);

module.exports = router;
