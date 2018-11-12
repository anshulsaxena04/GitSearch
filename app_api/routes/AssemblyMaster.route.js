var express = require('express');
var router = express.Router();
var ctrlDevice = require('../controllers/AssemblyMaster.controller');

router.post('/addAssMas', ctrlDevice.addAssMas);
router.get('/login', ctrlDevice.login);
router.post('/savehistory', ctrlDevice.savehistory);
router.get('/gethistory', ctrlDevice.gethistory);


module.exports = router;
