const express = require("express");
const router = express.Router();
const {
    getAllTasks,
} = require("../controllers/controller");


router.get("/", getAllTasks);
/*
router.post("/", createTask);
router.get("/:id", getSingleTask);
router.patch("/:id", updateTask);
router.delete("/:id", deleteTask);
*/

module.exports = router;