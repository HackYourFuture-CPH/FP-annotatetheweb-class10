const express = require('express');

const router = express.Router();

// Router imports
const swaggerUi = require('swagger-ui-express');
const userRouter = require('./users.router');
const screenshotsRouter = require('./screenshots.router');

// swagger-ui-express
const swaggerDocument = require('../../config/swagger.json');

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/users', userRouter);
router.use('/screenshots', screenshotsRouter);

module.exports = router;
