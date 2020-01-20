const express = require('express');

const router = express.Router();

// const modulesRouter = require('./modules.router');
const annotationsRouter = require('./annotations.router');

// router.use('/modules', modulesRouter);
router.use('/annotations', annotationsRouter);

module.exports = router;
