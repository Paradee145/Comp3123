const mongoose = require('mongoose');
const Employee = require('./models/employee.model');

// MongoDB Connection URI
const MONGO_URI = 'mongodb+srv://paradee145:pangpang@cluster.mongodb.net/EmployeeDB';

// Connect to MongoDB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB');

        // Test: Create a New Employee
        const testEmployee = new Employee({
            name: 'John Doe',
            position: 'Software Engineer',
            department: 'IT',
            salary: 90000,
        });

        return testEmployee.save();
    })
    .then((savedEmployee) => {
        console.log('Employee Saved:', savedEmployee);
        return mongoose.disconnect();
    })
    .then(() => {
        console.log('MongoDB connection closed');
    })
    .catch((err) => {
        console.error('Error:', err);
    });
