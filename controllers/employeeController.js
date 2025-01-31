const Employee = require('../models/Employee');

// Create new employee
exports.createEmployee = async (req, res) => {
    try {
        const { s_no, employees, age, gender, address, salary, leaves_per_month, leaves_used } = req.body;

        // Calculate remaining leaves
        const remaining_leaves = leaves_per_month - leaves_used;

        const newEmployee = new Employee({
            s_no,
            employees,
            age,
            gender,
            address,
            salary,
            leaves_per_month,
            leaves_used,
            remaining_leaves
        });

        await newEmployee.save();
        res.status(201).json(newEmployee);
    } catch (err) {
        res.status(500).json({ message: "Error creating employee", error: err });
    }
};

// Get all employees
exports.getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (err) {
        res.status(500).json({ message: "Error fetching employees", error: err });
    }
};

// Get a single employee by ID
exports.getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json(employee);
    } catch (err) {
        res.status(500).json({ message: "Error fetching employee", error: err });
    }
};

// Update employee data
exports.updateEmployee = async (req, res) => {
    try {
        const { 
            employees, 
            age, 
            gender, 
            address, 
            salary, 
            leaves_per_month, 
            leaves_used 
        } = req.body; // Destructure all fields to be updated

        // Find the employee by ID
        const employee = await Employee.findById(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }

        // Update the fields with the new data provided
        if (employees) employee.employees = employees;
        if (age) employee.age = age;
        if (gender) employee.gender = gender;
        if (address) employee.address = address;
        if (salary) employee.salary = salary;
        if (leaves_per_month) employee.leaves_per_month = leaves_per_month;
        if (leaves_used) {
            employee.leaves_used = leaves_used;
            employee.remaining_leaves = leaves_per_month - leaves_used; // Update remaining leaves
        }

        // Save the updated employee data to the database
        await employee.save();

        // Respond with the updated employee data
        res.status(200).json(employee); 
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error updating employee", error: err });
    }
};


// Delete an employee by ID
exports.deleteEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        if (!employee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting employee", error: err });
    }
};
