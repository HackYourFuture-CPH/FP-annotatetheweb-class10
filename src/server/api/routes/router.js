const express = require('express');

const router = express.Router();

<<<<<<< HEAD
const annotationsRouter = require('./annotations.router');


=======
// const modulesRouter = require('./modules.router');
const annotationsRouter = require('./annotations.router');

// router.use('/modules', modulesRouter);
>>>>>>> origin/develop
router.use('/annotations', annotationsRouter);

module.exports = router;
