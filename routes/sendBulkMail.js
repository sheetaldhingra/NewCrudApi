const express = require("express");
const router = new express.Router();
const {sendBulkMail} = require("../controller/sendBulkMail");
router.post("/sendBulkMail",sendBulkMail);
module.exports = router;