const express = require("express");
const router = express.Router();
const {
  getAllRanges,
  getAllRangesTesting,
  saveRanges,
  updateRange,
  deactivateRange,
  activateRange
} = require("../controller/ranges");
router.route("/").get(getAllRanges);
router.route("/testing").get(getAllRangesTesting);
router.post("/saveranges", saveRanges);
router.post("/updateranges", updateRange);
router.post("/deactivateranges", deactivateRange);
router.post("/activateranges", activateRange);

module.exports = router;
