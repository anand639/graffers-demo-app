const express = require('express');
const router = express.Router();
const companyController = require('../controllers/companyController');

router.post('/create', companyController.createCompany);
router.get('/list', companyController.listCompanies);
router.post('/rate', companyController.rateCompany);

module.exports = router;
