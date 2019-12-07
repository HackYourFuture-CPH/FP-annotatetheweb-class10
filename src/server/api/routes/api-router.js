"use strict";

const express = require("express");
const router = express.Router();

// Router imports
const modulesRouter = require("./modules.router");
const userRouter = require("./users.router");

//Annotater Router
const AnnotaterRouter= require("./annotater.router");

// swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../config/swagger.json");

// Route for Swagger API Documentation
router.use(`/documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use(`/modules`, modulesRouter);
<<<<<<< HEAD
router.use('/annotate', AnnotaterRouter);
=======
router.use(`/users`, userRouter)
>>>>>>> da5ad3bdae26d6b96dc11cabef36eefb31dfa41c

module.exports = router;
