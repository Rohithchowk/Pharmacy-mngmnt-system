// server.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const patientsDataController = require('./controllers/patientDataController');
const { addImage, getImages } = require("./controllers/imageController");
const distributorController = require("./controllers/distributorController");
const testCenterController = require("./controllers/TestCenterController");
const detailsController = require("./controllers/detailsController");
const Employee = require('./models/Employee');
const employeeController = require('./controllers/employeeController');




app.use(express.json());

mongoose.connect('mongodb+srv://sriraman895:sriram895@cluster0.xnrax.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Error connecting to MongoDB:', err));



app.post("/images", addImage);
app.get("/images", getImages);


app.post('/patients', patientsDataController.createPatient);
app.get('/patients', patientsDataController.getAllPatients);
app.get('/patients/:id', patientsDataController.getPatientById);
app.put('/patients/:id', patientsDataController.updatePatient);
app.delete('/patients/:id', patientsDataController.deletePatient);


app.post("/api/distributors", distributorController.createDistributor);
app.get("/api/distributors", distributorController.getAllDistributors);
app.get("/api/distributors/:id", distributorController.getDistributorById);
app.put("/api/distributors/:id", distributorController.updateDistributor);
app.delete("/api/distributors/:id", distributorController.deleteDistributor);


app.post("/testcenters", testCenterController.createTestCenter);
app.get("/testcenters", testCenterController.getAllTestCenters);
app.get("/testcenters/:centerId", testCenterController.getTestCenter);
app.put("/testcenters/:centerId", testCenterController.updateTestCenter);
app.delete("/testcenters/:centerId", testCenterController.deleteTestCenter);

app.post("/details", detailsController.createDetail);
app.get("/details", detailsController.getAllDetails);
app.get("/details/:detailId", detailsController.getDetail);
app.put("/details/:detailId", detailsController.updateDetail);
app.delete("/details/:detailId", detailsController.deleteDetail);


app.post('/api/employees', employeeController.createEmployee);
app.get('/api/employees', employeeController.getAllEmployees);
app.get('/api/employees/:id', employeeController.getEmployeeById);
app.put('/api/employees/:id', employeeController.updateEmployee);
app.delete('/api/employees/:id', employeeController.deleteEmployee);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
