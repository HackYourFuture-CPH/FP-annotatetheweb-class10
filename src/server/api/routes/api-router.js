"use strict";

const express = require("express");
const router = express.Router();

// Router imports
const modulesRouter = require("./modules.router");
const annotationsRouter = require("./annotations.router"); // annotation router added

// swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../config/swagger.json");

// Route for Swagger API Documentation
router.use(`/documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use(`/modules`, modulesRouter); 
router.use(`/annotations`,annotationsRouter); // annotation routes

module.exports = router;
