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
router.post("/saveproducts", saveProducts);
router.post("/updateproducts", updateProduct);
router.post("/deactivateproducts", deactivateProduct);
router.post("/activateproducts", activateProduct);

module.exports = router;
