
const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    gender: { type: String, required: true },
    lastVisitDate: { type: Date, required: true },
    testReports: { type: String }, 
    doctorName: { type: String, required: true }
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
