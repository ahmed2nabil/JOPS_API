const express = require("express");
const router = express.Router();

const jobsController= require("../controller/job");


router.get("/",jobsController.getALlJobs);

router.get("/:id",jobsController.getJob);

router.post("/",jobsController.createJob);

router.put("/:id",jobsController.updateJob);

router.delete("/:id",jobsController.deleteJob);


module.exports = router;