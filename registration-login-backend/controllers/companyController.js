const Company = require('../models/Company');
const Rating = require('../models/Rating');

exports.createCompany = async (req, res) => {
    try {
        const { name } = req.body;

        let company = new Company({ name });
        await company.save();

        res.status(201).json({ msg: 'Company created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.listCompanies = async (req, res) => {
    try {
        const companies = await Company.find();
        res.json(companies);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};

exports.rateCompany = async (req, res) => {
    try {
        const { companyId, rating } = req.body;

        let rate = new Rating({ companyId, rating });
        await rate.save();

        res.status(201).json({ msg: 'Rating added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
