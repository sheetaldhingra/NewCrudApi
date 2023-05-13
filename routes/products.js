const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getAllProductsTesting,
  saveProducts,
  updateProduct,
  deactivateProduct,
  activateProduct
} = require("../controller/products");
router.route("/").get(getAllProducts);
router.route("/testing").get(getAllProductsTesting);
router.post("/save-products", saveProducts);
router.post("/update-products", updateProduct);
router.post("/deactivate-products", deactivateProduct);
router.post("/activate-products", activateProduct);

module.exports = router;
