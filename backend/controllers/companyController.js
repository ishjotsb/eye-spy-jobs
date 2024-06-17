const CompanyInfo = require('../model/CompanyInfo');

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