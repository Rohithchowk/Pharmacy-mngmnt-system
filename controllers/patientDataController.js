// controllers/patientsDataController.js

const Patient = require('../models/patientDataModel');

// Controller to create a new patient record
const createPatient = async (req, res) => {
    const { name, age, gender, lastVisitDate, testReports, doctorName } = req.body;

    if (!name || !age || !gender || !lastVisitDate || !doctorName) {
        return res.status(400).json({ message: "All fields except testReports are required" });
    }

    try {
        const newPatient = new Patient({
            name, age, gender, lastVisitDate, testReports, doctorName
        });
        await newPatient.save();
        res.status(201).json({ message: "Patient created successfully", patient: newPatient });
    } catch (err) {
        res.status(500).json({ message: "Error creating patient", error: err.message });
    }
};

// Controller to get all patients
const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.find();
        res.status(200).json(patients);
    } catch (err) {
        res.status(500).json({ message: "Error fetching patients", error: err.message });
    }
};

// Controller to get a patient by ID
const getPatientById = async (req, res) => {
    const { id } = req.params;
    
    try {
        const patient = await Patient.findById(id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json(patient);
    } catch (err) {
        res.status(500).json({ message: "Error fetching patient", error: err.message });
    }
};

// Controller to update a patient record
const updatePatient = async (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;

    try {
        const patient = await Patient.findByIdAndUpdate(id, updatedData, { new: true });
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json({ message: "Patient updated successfully", patient });
    } catch (err) {
        res.status(500).json({ message: "Error updating patient", error: err.message });
    }
};

// Controller to delete a patient record
const deletePatient = async (req, res) => {
    const { id } = req.params;

    try {
        const patient = await Patient.findByIdAndDelete(id);
        if (!patient) {
            return res.status(404).json({ message: "Patient not found" });
        }
        res.status(200).json({ message: "Patient deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting patient", error: err.message });
    }
};

module.exports = {
    createPatient,
    getAllPatients,
    getPatientById,
    updatePatient,
    deletePatient
};
