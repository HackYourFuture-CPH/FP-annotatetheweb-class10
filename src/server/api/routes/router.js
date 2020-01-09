const express = require('express');

const router = express.Router();


const annotationsRouter = require('./annotations.router');


router.use('/annotations', annotationsRouter);

module.exports = router;
