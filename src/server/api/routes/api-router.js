"use strict";

const express = require("express");
const router = express.Router();

// Router imports
const modulesRouter = require("./modules.router");
const userRouter = require("./users.router");
const screenshotRouter = require("./screenshot.router");

// swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../config/swagger.json");

// Route for Swagger API Documentation
router.use(`/documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use(`/modules`, modulesRouter);
router.use(`/users`, userRouter);
router.use(`/screenshot`, screenshotRouter);

module.exports = router;
