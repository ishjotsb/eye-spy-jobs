const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const companyInfoSchema = new Schema({
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    companyTitle: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    companyName: {
        type: String,
        required: true
    },
    jobDescription: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    postingUrl: {
        type: String,
        required: true
    },
    additionalNotes: String
});

module.exports = mongoose.model("CompanyInfo", companyInfoSchema);