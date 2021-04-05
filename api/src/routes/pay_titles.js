const router = require("express").Router();
const controller = require("../controllers/pay_titles");

router.get("/", controller.get_All);
router.get("/:id", controller.get_One);
router.post("/", controller.add);
router.put('/', controller.update);
router.delete('/:id', controller.del);

module.exports = router;