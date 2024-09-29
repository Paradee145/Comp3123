// Import necessary modules
var http = require("http");

// Import Employee Module
const employees = require('./Employee');  // Assuming employee.js is in the same directory

console.log("Lab 03 - NodeJs");

// Define Server Port
const port = process.env.PORT || 8081

// Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
    } else {
        // Set response headers
        res.setHeader('Content-Type', 'application/json');
        
        // Route: '/'
        if (req.url === '/') {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end("<h1>Welcome to Lab Exercise 03</h1>");
        }
        
        // Route: '/employee'
        else if (req.url === '/employee') {
            res.writeHead(200);
            res.end(JSON.stringify(employees, null, 2)); // Display all employee details in JSON format
        }

        // Route: '/employee/names'
        else if (req.url === '/employee/names') {
            const employeeNames = employees
                .map(emp => `${emp.firstName} ${emp.lastName}`)  // Combine first and last names
                .sort();  // Sort names alphabetically
            res.writeHead(200);
            res.end(JSON.stringify(employeeNames, null, 2));  // Display sorted names in JSON array
        }

        // Route: '/employee/totalsalary'
        else if (req.url === '/employee/totalsalary') {
            const totalSalary = employees.reduce((acc, emp) => acc + emp.Salary, 0);  // Sum up all salaries
            res.writeHead(200);
            res.end(JSON.stringify({ total_salary: totalSalary }, null, 2));  // Return total salary in JSON format
        }

        // Default Route (404 - Not Found)
        else {
            res.writeHead(404);
            res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
        }
    }
});

// Start server
server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


