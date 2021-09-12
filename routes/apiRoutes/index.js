// The index.js file is responsible for exporting the individual routing modules (files)
// to the server.js file. It is automatically searched for when the require call is made
// within the server.js file. Therefore, one needs to only "require" the designated
// folder which contains the index.js file. 

const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyRoutes'));
router.use(require('./voterRoutes'));

module.exports = router;