const express = require('express');

const router = express.Router();

// Router imports
const userRouter = require('./users.router');
const screenshotsRouter = require('./screenshots.router');
const annotationsRouter = require('./annotations.router');

// swagger-ui-express
const swaggerDocument = require('../../config/swagger.json');
const swaggerUi = require('swagger-ui-express');

// Route for Swagger API Documentation
router.use('/documentation', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use('/users', userRouter);
router.use('/screenshots', screenshotsRouter);
router.use('/annotations',annotationsRouter);

module.exports = router;
