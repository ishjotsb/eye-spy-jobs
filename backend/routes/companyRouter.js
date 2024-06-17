const express = require('express');
const router = express.Router();

const companyController = require('../controllers/companyController');

router.post("/add-info", companyController.postCompanyInfo);

module.exports = router;