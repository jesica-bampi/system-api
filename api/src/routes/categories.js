const router = require("express").Router();
const categories = require("../../database/models/categories");
const controller = require("../controllers/categories");

router.get("/", controller.get_All);
router.get("/:id", controller.get_One);
router.post("/", controller.add);
router.put('/', controller.update);

module.exports = router;
