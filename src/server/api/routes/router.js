"use strict";


const express = require("express");
const router = express.Router();

const modulesRouter = require("./modules.router");

const annotateRouter = require("./annotater.router");

router.use("/modules", modulesRouter);
router.use("/annotate",anno)

module.exports = router;
