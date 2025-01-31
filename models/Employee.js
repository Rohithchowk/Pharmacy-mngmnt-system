const mongoose = require('mongoose');

// Employee schema definition
const employeeSchema = new mongoose.Schema({
    s_no: {
        type: Number,
        required: true,
        unique: true
    },
    employees: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    leaves_per_month: {
        type: Number,
        required: true
    },
    leaves_used: {
        type: Number,
        required: true,
        default: 0
    },
    remaining_leaves: {
        type: Number,
        required: true,
        default: function() {
            return this.leaves_per_month - this.leaves_used;
        }
    }
});

// Create and export the employee model
const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
