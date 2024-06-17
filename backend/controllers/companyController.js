const CompanyInfo = require('../model/CompanyInfo');
const mongoose = require('mongoose');

exports.getCompanyInfo = async (req, res) => {

    const companyId = req.params.id;

    const id = new mongoose.Types.ObjectId(companyId)

    if(!companyId) {
        return res.status(404).json({message: "Sorry the company id is invalid."});
    }

    const foundCompany = await CompanyInfo.findById({_id: id});

    if(!foundCompany) {
        return res.status(404).json({message: "We found no records."});
    }

    return res.status(200).json({message: "Information fetched successfully.", data: foundCompany});

}

exports.postCompanyInfo = async (req, res) => {

    const {
        companyTitle, 
        jobTitle, 
        companyName, 
        jobDescription, 
        status, 
        postingUrl, 
        additionalNotes
    } = req.body;

    const result = await CompanyInfo.create({
        companyTitle: companyTitle,
        jobTitle: jobTitle,
        companyName: companyName,
        jobDescription: jobDescription,
        status: status,
        postingUrl: postingUrl,
        additionalNotes: additionalNotes
    });

    if(!result) {
        return res.status(500).json({messag: "Sorry there is some error"});
    }

    return res.status(201).json({message: "Information added successfully!"});

}